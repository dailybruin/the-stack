# Verb extraction 

import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger')
import candidate
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import matplotlib.pyplot as plt

yangtweets = candidate.tweets('andrew-yang')

# Tokenize tweets into individual words
yangwords = word_tokenize(yangtweets)

# Remove stopwords
stop_words=set(stopwords.words("english"))

a = {',','!','#','%',':','+','.','@','-','&','?','\"','\'','(',')'}

stop_words.update(a)

words = []
for w in yangwords:
    if w not in stop_words:
        words.append(w)

#print(words)

print(nltk.pos_tag(words))






for i in candidate.all_candidates():
    tweets = candidate.tweets(i)
    
    # print(candidate.tweets(i)) # this prints all tweets from each candidate



