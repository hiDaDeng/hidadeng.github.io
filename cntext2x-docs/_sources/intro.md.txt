# 简介
cntext 是大邓开发维护的中英文文本分析库，内置有多重词典和常用函数。 常见的文本分析代码行数在数十行，而 cntext2.x 力求将代码量控制在 2~5 行。

<br>


## 模块

cntext2.x 含io、model、stats、mind五个模块

1. 导入数据用io
2. 训练模型扩展词典用model
3. 统计词频、情感分析、相似度等用stats
4. 可视化模块plot
5. 态度认知文化变迁用mind
6. 大模型LLM


<br>

| 模块 | 函数                                        | 功能                                        |
| -------- | ------------------------------------------- | ------------------------------------------- |
| ***io*** | ***ct.get_cntext_path()***                    | 查看cntext安装路径                          |
| ***io*** | ***ct.get_dict_list()***                    | 查看cntext内置词典                          |
| ***io*** | ***ct.get_files(fformat)***                   | 查看符合fformat路径规则的所有的文件         |
| ***io*** | ***ct.detect_encoding(file, num_lines=100)*** | 诊断txt、csv编码格式                        |
| ***io*** | ***ct.read_yaml_dict(yfile)***         | 读取内置yaml词典                            |
| ***io*** | ***ct.read_pdf(file)***         | 读取PDF文件                                    |
| ***io*** | ***ct.read_docx(file)***         | 读取docx文件                                    |
| ***io*** | ***ct.read_file(file, encodings)***         | 读取文件                                    |
| ***io*** | ***ct.read_files(fformat, encoding)***       | 读取符合fformat路径规则的所有的文件，返回df |
| ***io*** | ***ct.extract_mda(text, kws_pattern)***       | 提取A股年报中的MD&A文本内容。如果返回'',则提取失败。 |
| ***io*** | ***ct.traditional2simple(text)***     | 繁体转简体 |
| ***io*** | ***ct.fix_text(text)*** | 将不正常的、混乱编码的文本转化为正常的文本。例如全角转半角 |
| ***io*** | ***ct.fix_contractions(text)***                       | 英文缩写(含俚语表达)处理， 如you're -> you are                                      |
| ***model*** | ***ct.Word2Vec(corpus_file, encoding, lang='chinese', ...)***    | 训练Word2Vec                                     |
| ***model*** | ***ct.GloVe(corpus_file, encoding, lang='chinese', ...)***    | GloVe, 底层使用的 [Standfordnlp/GloVe](https://github.com/standfordnlp/GloVe)                                    |
| ***model*** | ***ct.glove2word2vec(glove_file, word2vec_file)***                 | 将GLoVe模型.txt文件转化为Word2Vec模型.txt文件； 一般很少用到    |
| ***model*** | ***ct.load_w2v(wv_path)***                 | 读取cntext2.x训练出的Word2Vec/GloVe模型文件       |
| ***model*** | ***ct.expand_dictionary(wv,  seeddict, topn=100)***            | 扩展词典,  结果保存到路径[output/Word2Vec]中 |
| ***model*** | ***ct.SoPmi(corpus_file, seed_file, lang='chinese')***         | 共现法扩展词典                                   |
| ***stats*** | ***ct.word_count(text, lang='chinese')***                       | 词频统计                                                 |
| ***stats*** | ***readability(text, lang='chinese', syllables=3)***                     | 文本可读性                                               |
| ***stats*** | ***ct.sentiment(text, diction, lang='chinese')***            | 无(等)权重词典的情感分析                                 |
| ***stats*** | ***ct.sentiment_by_valence(text, diction, lang='chinese')***   | 带权重的词典的情感分析                                   |
| ***stats*** | ***ct.word_in_context(text, keywords, window=3, lang='chinese')*** | 在text中查找keywords出现的上下文内容(窗口window)，返回df |
| ***stats*** | ***ct.epu()***                                               | 使用新闻文本数据计算经济政策不确定性EPU，返回df          |
| ***stats*** | ***ct.fepu(text, ep_pattern='', u_pattern='')***             | 使用md&a文本数据计算企业不确定性感知FEPU                 |
| ***stats*** | ***ct.semantic_brand_score(text, brands, lang='chinese')***  | 衡量品牌（个体、公司、品牌、关键词等）的重要性           |
| ***stats*** | ***ct.cosine_sim(text1, text2, lang='chinese')*** | 余弦相似度    |
| ***stats*** | ***ct.jaccard_sim(text1, text2, lang='chinese')***  | Jaccard相似度 |
| ***stats*** | ***ct.minedit_sim(text1, text2, lang='chinese')***  | 最小编辑距离  |
| ***stats*** | ***ct.word_hhi(text)***  | 文本的赫芬达尔-赫希曼指数 |
| ***plot*** | ***ct.matplotlib_chinese()***  | 支持matplotlib中文绘图 |
| ***plot*** | ***ct.lexical_dispersion_plot1(text, targets_dict, lang, title, figsize)***  | 对某一个文本text， 可视化不同目标类别词targets_dict在文本中出现位置  |
| ***plot*** | ***ct.lexical_dispersion_plot2(texts_dict, targets, lang, title, figsize)***  | 对某几个文本texts_dict， 可视化某些目标词targets在文本中出现相对位置(0~100)  |
| ***mind***  | ***tm = ct.Text2Mind(wv)***<br>                      | 单个word2vec内挖掘潜在的态度偏见、刻板印象等。tm含多重方法 |
| ***mind***  | ***ct.sematic_projection(wv, words, c_words1, c_words2)*** | 测量语义投影                                               |
| ***mind***  | ***ct.sematic_distance(wv, words, c_words1, c_words2)*** | 测量语义距离                                               |
| ***mind***  | ***ct.divergent_association_task(wv, words)***       | 测量发散思维(创造力)                                       |
| ***mind***  | ***ct.discursive_diversity_score(wv, words)***       | 测量语言差异性(认知差异性)                                       |
| ***mind*** | ***ct.procrustes_align(base_wv, other_wv)*** | 两个word2vec进行语义对齐，可反应随时间的社会语义变迁       |
| ***LLM*** | ***analysis_by_llm(text, prompt, base_url, api_key, model_name, temperature, output_format)*** | 使用大模型进行文本分析        |


