# 五、LLM模块
目前大模型本地化使用越来越方便， 

| 模块            | 函数(类)                                             | 功能                                                       |
| --------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| ***LLM*** | ***text_analysis_by_llm(text, prompt, base_url, api_key, model_name, temperature, output_format)*** | 使用大模型进行文本分析        |

## 5.1 analysis_by_llm()

使用大模型（本地或API）进行文本分析，从非结构化的文本数据中识别模式、提取关键信息、理解语义，并将其转化为结构化数据以便进一步分析和应用。 

<br>

```python
ct.analysis_by_llm(text, prompt, base_url, api_key, model_name, output_format, max_retries, return_df)
```

- ***text***: 待分析的文本
- ***prompt*** 提示Prompt, 默认 prompt="根据评论内容，返回文本的情感类别(pos、neg)", 可判断文本pos或neg
- ***base_url***: 大模型API接口， 默认base_url=''， 默认使用的本地Ollama搭建服务的API接口；
- ***api_key***: 大模型API对应的KEY， 默认api_key='' 表示使用的本地Ollama搭建服务
- ***model_name***: 模型名；默认使用 model_name="qwen2.5:3b"
- ***temperature***:  控制模型输出结果的随机性，取值范围0到无穷, 常用的范围[0, 1]。虽然理论上可以设置大于 1 的值，但这样会导致输出过于随机，通常不推荐这样做。需要结合任务确定取值
  - 高准确性一致性任务，如情感分析、文本分类、事实性回答， 建议temperature=0
  - 高创造性和多样性任务， 如故事写作、头脑风暴等， 建议temperature=0.7
  - 实验性或探索性任务，较高的 `temperature` 值（如 1.0 以上，但一般不推荐超过 2.0）
- ***output_format***: 设置分析结果的输出格式; 默认output_format = {'label': str, 'score': float},   输出结果为字典， 含字段类别字段label和数值字段score
- ***max_retries***: 最大失败次数， 默认max_retries=3
- ***return_df***: 返回结果是否为dataframe， 默认False

<br>

**实验数据为外卖评论， 今天咱们做个有难度的文本分析任务，从不同维度(味道、速度、服务)对外卖评论进行打分(-1.0~1.0)**。

![](img/28-llm-analysis.png)<br>

```python
import cntext as ct

PROMPT = '从口味taste、速度speed、服务service三个维度， 对外卖评论内容进行文本分析， 分别返回不同维度的分值(分值范围-1.0 ~ 1.0)'
BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1'
API_KEY = '你的API-KEY'
MODEL_NAME = 'qwen-max'

# 味道、速度、服务
OUTPUT_FORMAT = {'taste': float, 'speed': float, 'service': float}

COMMENT_CONTENT = '太难吃了'

# 使用
# result = ct.analysis_by_llm(text=COMMENT_CONTENT, 
# 或
result = ct.text_analysis_by_llm(text=COMMENT_CONTENT, 
                                 prompt=PROMPT,
                                 base_url=BASE_URL, 
                                 api_key=API_KEY, 
                                 model_name=MODEL_NAME, 
                                 temperature=0,
                                 output_format=OUTPUT_FORMAT, 
                                 max_retries=3,  
                                 return_df=False)

result
```

Run

```
{'taste': -1.0, 'speed': 0.0, 'service': 0.0}
```

<br>

批量运算

```python
import pandas as pd
import cntext as ct


# 构造实验数据
data = ['速度非常快，口味非常好， 服务非常棒！', 
        '送餐时间还是比较久',
        '送单很快，菜也不错赞',
        '太难吃了']
df = pd.DataFrame(data, columns=['comment'])


# 分析函数
def llm_analysis(text):
    result = ct.analysis_by_llm(text=text, 
                                prompt= '从口味taste、速度speed、服务service三个维度， 对外卖评论内容进行文本分析， 分别返回不同维度的分值(分值范围-1.0 ~ 1.0)',
                                base_url='https://dashscope.aliyuncs.com/compatible-mode/v1', 
                                api_key='你的API-KEY', 
                                model_name='qwen-max', 
                                output_format={'taste': float, 'speed': float, 'service': float}
                               )
    return pd.Series(result)
    

# 批量运算
df2 = df['comment'].apply(llm_analysis)
res_df = pd.concat([df, df2], axis=1)

# 保存分析结果
res_df.to_csv('result.csv', index=False)
res_df
```

![](img/28-llm-analysis.png)

<br>

LLM更多详细内容，请阅读  [**教程 | 使用在线大模型将文本数据转化为结构化数据**](https://textdata.cn/blog/2025-02-14-using-online-large-model-api-to-transform-text-data-into-structured-data/)

