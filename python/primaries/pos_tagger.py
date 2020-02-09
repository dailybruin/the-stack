# Verb extraction

import nltk
#nltk.download('punkt')
#nltk.download('stopwords')
#nltk.download('averaged_perceptron_tagger')
import candidate
import stopwords
from nltk.tokenize import word_tokenize
#from nltk.corpus import stopwords
#import matplotlib.pyplot as plt

# it returns a list of all the candidates
def main() :
    #just for testing
    print("hi")
    print(get_words_by_pos('andrew-yang', 'noun'))


#get_pos function takes in candidate name and pos you want,
#returns a list of tuples: words from tweets are paired with their POS code
#POS code definitions found here #https://opensenselabs.com/blog/tech/entity-extraction-using-nlp-python
def pos_tag_tweets(name) :
    # Remove stopwords
    stop_words=set(stopwords.get_stopwords())
    a = {',','!','#','%',':','+','.','@','-','&','?','\"','\'','(',')'}
    stop_words.update(a)

    #get all the tweets and tokenize them
    tokenized_tweets = []
    candidate_tweets = candidate.tweets(name)
    temp = word_tokenize(candidate_tweets)

    for t in temp :
        if t not in stop_words:
            tokenized_tweets.append(t)
    tagged_tweets = nltk.pos_tag(tokenized_tweets)
    
    return tagged_tweets
    
#returns a list of words from the selected candidate with the selected POS
def get_words_by_pos(name, pos) :
    tagged_tweets = pos_tag_tweets(name)
    
    #allowed pos
    adjectives = ['JJ', 'JJR', 'JJS']
    nouns = ['NN', 'NNS', 'NNP', 'NNPS']
    adverbs = ['RB', 'RBR', 'RBS']
    verbs = ['VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ']
    
    selected_tags = ()
    if (pos == "noun") :
        selected_tags = set(nouns)
    elif (pos == "adjective") :
        selected_tags == set(adjectives)
    elif (pos == "adverb") :
        selected_tags = set(adverbs)
    elif (pos == "verb") :
        selected_tags = set(verbs)
    else :
        print("ERROR: Acceptible Parts of Speech: \n 'noun' , 'adjective', 'adverb', 'verb' ")
        return None
    
    result = []
    for pair in tagged_tweets :
        if pair[1] in selected_tags :
            result.append(pair[0])
    
    return result
        
#def get_most_frequent_words(words) :
    
if __name__ == "__main__" :
    main()
    
        
        
