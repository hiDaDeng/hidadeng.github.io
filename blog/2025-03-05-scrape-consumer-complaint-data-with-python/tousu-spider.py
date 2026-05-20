import pandas as pd
import os
import requests
from tqdm import tqdm
import time

#避免网站反爬，使用伪装头
header = {"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36"}

def gen_rs_ts_signature(page=1):
    import random
    import time
    import hashlib
    import json
    sha256=hashlib.sha256()
    c = str(int(time.time() * 1000))   #13位时间戳
    a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    h =''.join(random.choice(a) for i in range(16))   #随机16个字符
    d ='$d6eb7ff91ee257475%'   #默认值
    e = '2'       #最新信息为2
    u ='10'      #每页数量
    page=str(page)   #页码
    ts = c
    rs = h
    bb = [d,u,c,e,page,h]
    bb.sort()
    signature=hashlib.sha256((''.join(bb)).encode('utf-8')).hexdigest()
    return ts,rs,signature




# 确定CSV文件路径
csv_file_path = '黑猫投诉.csv'

#假设采集1-50页
max_page = 50

#for循环， 遍历每个url，均进行访问、提取、保存
for page in tqdm(range(1, max_page+1), '采集进度'):
    time.sleep(1)
    ts,rs,signature = gen_rs_ts_signature(page=page)
    page_url = f'https://tousu.sina.cn/api/index/feed?ts={ts}&rs={rs}&signature={signature}&type=2&page_size=10&page={page}'
    page_resp = requests.get(page_url,headers = header)
    

    # 创建一个标志变量，用于判断是否是第一次写入
    first_write = not os.path.exists(csv_file_path)
    for complaint_card in page_resp.json()['result']['data']['lists']:
        data = dict()
        data['title'] = complaint_card['main']['title']
        data['timestamp'] = complaint_card['main']['timestamp']
        data['summary'] =complaint_card['main']['summary']
        data['cotitle'] = complaint_card['main']['cotitle']
        data['appeal'] = complaint_card['main']['appeal']
        data['issue'] = complaint_card['main']['issue']
        data['url'] = complaint_card['main']['url']
        df_ = pd.DataFrame([data])
        
        # 写入DataFrame到CSV文件中
        if first_write:
            # 第一次写入时包含表头
            df_.to_csv(csv_file_path, mode='a', index=False, encoding='utf-8')
            first_write = False  # 修改标志变量为False，以便后续不再写入表头
        else:
            # 后续追加数据时不包含表头
            df_.to_csv(csv_file_path, mode='a', index=False, header=False, encoding='utf-8')