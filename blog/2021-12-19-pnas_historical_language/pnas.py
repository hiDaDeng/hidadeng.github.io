from nltk.util import ngrams
from nltk.tokenize import word_tokenize

sentence = "Historical language records reveal a surge of cognitive distortions in recent decades"
words = word_tokenize(sentence)
print('分词结果: ', words)
#2-gram
two_grams = [' '.join(tw) for tw in ngrams(words, 2)]
print('2-gram处理结果: ', two_grams)
#3-gram
three_grams = [' '.join(tw) for tw in ngrams(words, 3)]
print('3-gram处理结果: ', three_grams)