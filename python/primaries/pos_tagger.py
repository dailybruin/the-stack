# Verb extraction

import nltk
#nltk.download('punkt')
#nltk.download('stopwords')
#nltk.download('averaged_perceptron_tagger')
import candidate
import stopwords
import keywords
import statistics
from nltk.tokenize import word_tokenize
#from nltk.corpus import stopwords
#import matplotlib.pyplot as plt

# it returns a list of all the candidates
def main() :
    #just for testing
    print("hi")
    
    #joe_nouns = (get_words_by_pos('joe-biden', 'noun'))
    #print(joe_nouns)
   

    #joe_verbs = (get_words_by_pos('joe-biden', 'verb'))
    
    #joe_adjectives=(get_words_by_pos('joe-biden', 'adjective'))
    
    #joe_adverbs=(get_words_by_pos('joe-biden', 'adverb'))

    #elizabeth_nouns = open("elizabeth-nouns.txt", "w")
    #elizabeth_nouns=(get_words_by_pos('elizabeth-warren', 'noun'))
    #elizabeth_nouns.close()
    
    #lizabeth_verbs = open("elizabeth-verbs.txt", "w")
    #elizabeth_verbs=(get_words_by_pos('elizabeth-warren', 'verb'))
    #elizabeth_verbs.close()
    
    #elizabeth_adjectives = open("elizabeth-adjs.txt", "w")
    #elizabeth_adjectives=(get_words_by_pos('elizabeth-warren', 'adjective'))
    #elizabeth_adjectives.close()
    
    #lizabeth_adverbs = open("elizabeth-adverbs.txt", "w")
    #elizabeth_adverbs=(get_words_by_pos('elizabeth-warren', 'adverb'))
    #elizabeth_adverbs.close()
    
    #bernie_nouns = open("bernie-nouns.txt", "w")
    #bernie_nouns=(get_words_by_pos('bernie-sanders', 'noun'))
    #bernie_nouns.close()
    
    #bernie_verbs = open("bernie-verbs.txt", "w")
    #bernie_verbs=(get_words_by_pos('bernie-sanders', 'verb'))
    #bernie_verbs.close()
    
    #bernie_adjectives = open("bernie-adjs.txt", "w")
    #bernie_adjectives=(get_words_by_pos('bernie-sanders', 'adjective'))
    #bernie_adjectives.close()
    
    #bernie_adverbs = open("bernie-adverbs.txt", "w")
    #bernie_adverbs=(get_words_by_pos('bernie-sanders', 'adverb'))
    #bernie_adverbs.close()
    
    #pete_nouns = open("pete-nouns.txt", "w")
    #pete_nouns=(get_words_by_pos('pete-buttigieg', 'noun'))
    #pete_nouns.close()
    
    #pete_verbs = open("pete-verbs.txt", "w")
    #pete_verbs=(get_words_by_pos('pete-buttigieg', 'verb'))
    #pete_verbs.close()
    
    #bernie_adjectives = open("pete-adjs.txt", "w")
    #pete_adjectives=(get_words_by_pos('pete-buttigieg', 'adjective'))
    #
    
    #pete_adverbs = open("pete-adverbs.txt", "w")
    #pete_adverbs=(get_words_by_pos('pete-buttigieg', 'adverb'))
    #pete_adverbs.close()
    
    #amy_nouns = open("amy-nouns.txt", "w")
    #amy_nouns=(get_words_by_pos('amy-klobuchar', 'noun'))
    #amy_nouns.close()
    
    #amy_verbs = open("amy-verbs.txt", "w")
    #amy_verbs=(get_words_by_pos('amy-klobuchar', 'verb'))
    #amy_verbs.close()
    
    #amy_adjectives = open("amy-adjs.txt", "w")
    #amy_adjectives=(get_words_by_pos('amy-klobuchar', 'adjective'))
    #amy_adjectives.close()
    
    #amy_adverbs = open("amy-adverbs.txt", "w")
    #amy_adverbs=(get_words_by_pos('amy-klobuchar', 'adverb'))
    #amy_adverbs.close()
    
    #donald_nouns = open("donald-nouns.txt", "w")
    #donald_nouns=(get_words_by_pos('donald-trump', 'noun'))
    #donald_nouns.close()
    
    #onald_verbs = open("donald-verbs.txt", "w")
    #donald_verbs=(get_words_by_pos('donald-trump', 'verb'))
    #donald_verbs.close()
    
    #donald_adjectives = open("donald-adjs.txt", "w")
    #donald_adjectives=(get_words_by_pos('donald-trump', 'adjective'))
    #donald_adjectives.close()
    
    #donald_adverbs = open("donald-adverbs.txt", "w")
    #donald_adverbs=(get_words_by_pos('donald-trump', 'adverb'))
    #donald_adverbs.close()
    #print(get_most_frequent_words(joe_nouns, 10))
    #print(joe_adjectives)
    #print(get_most_frequent_words(donald_adjectives, 10))
    print('bernie')
    print(map_occurances('bernie-sanders', keywords.get_keywords()))
    print('joe')
    print(map_occurances('joe-biden', keywords.get_keywords()))
    print('donald')
    print(map_occurances('donald-trump', keywords.get_keywords()))
    print('elizabeth-warren')
    print(map_occurances('elizabeth-warren', keywords.get_keywords()))
    print('pete-buttigieg')
    print(map_occurances('pete-buttigieg', keywords.get_keywords()))
    print('amy-klobuchar')
    print(map_occurances('amy-klobuchar', keywords.get_keywords()))
    
        
        
        

#returns a dictionary that maps words (as passed in) with their occurance counts for the candidate
def map_occurances(name, words) :
    candidate_tweets = candidate.tweets(name)
    candidate_tweets = candidate_tweets.lower()
    
    
    issues = []
    college = ['college', 'higher education', 'higher-education', 'tuition', 'stem', 'student', 'university', 'regents', 'school', 'scholar', 'community college', 'junior college', 'loan', 'ucla', 'public education', 'education', 'public school', 'UC', 'student loan', 'student debt', 'predatory lending', 'broke college']
    employment = ['employment', 'job', 'wage', 'minimum wage', 'unemployment', 'entrepreneurship']
    immigration = ['immigration', 'opt', 'h1b', 'daca', 'undocumented', 'student visa', 'travel ban', 'ice', 'illegal aliens', 'border wall', 'citizenship', 'immigrant', 'dream act', 'dreamer', 'muslim ban', 'no ban act', 'deportation', 'detention center']
    mental_health = ['mental health', 'mental illness', 'counseling', 'ptsd', 'trauma', 'mental disorder', 'suicide', 'stigma', 'addiction', 'substance abuse']
    discrimination_and_equality = ['discrimination and equality', 'lgbtq', 'women\'s rights', 'black lives matter', 'racial equality', 'women', 'race', 'racial', 'sexual assault', 'sexual harassment', 'title 9', 'title ix', 'titleix', 'domestic violence', 'female', 'empowerment', 'equal rights ammendment', 'era', 'human rights', 'diverse', 'diversity', 'racism', 'sexism', 'homophobia', 'sexual orientation', 'trans', 'disability', 'bigotry', 'discrimination', 'discriminatory', 'hbcu', 'ethnic group', 'equal pay', 'income inequality', 'civil rights', 'violence against women acts', 'vawa', 'xenophobia']
    healthcare = ['healthcare', 'medicare', 'obamacare', 'insurance', 'health care', 'prescription', 'affordable care', 'pharmaceuitcals', 'pharma', 'primary care', 'clinic', 'urgent care', 'hospital', 'caregiver', 'nurse', 'doctor', 'medical', 'coverage', 'drug manufacturer', 'drug manufacturering', 'insulin', 'public health', 'medicaid']
    environment = ['environment', 'climate', 'carbon', 'fossil fuel', 'renewable energy', 'petrol', 'paris aggreement', 'green new deal', 'pollution', 'pollute', 'pollutant', 'toxic', 'mining', 'fracking', 'drilling', 'oil', 'coal', 'sea level', 'temperature', 'glacier', 'iceberg', 'kyoto protocol']
    womens_issues = ['women', 'women\'s rights', 'abortion', 'reproductive', 'planned parenthood', 'sexual harassment', 'sexual assault', 'domestic violence','title 9', 'title ix', 'title9', 'titleix', 'female', 'contraceptives', 'contraception', 'birth control', 'reprorights', 'naral', 'allaboveallact', 'pregnant', 'pregnancy', 'maternity', 'birth']
    weed = ['weed', 'marijuana', 'cannabis', 'drug possession']
    gun_issues = ['gun issue', 'gun control', 'gun violence', 'gun restriction', 'gun law', 'nra', 'shooting', 'background check', 'parkland', 'gun safety', 'open fire', 'armed', 'gunman', 'mass shooting', 'weapon', 'ar-15', 'firearm', 'shot']
    issues.append(college)
    issues.append(employment)
    issues.append(immigration)
    issues.append(mental_health)
    issues.append(discrimination_and_equality)
    issues.append(healthcare)
    issues.append(environment)
    issues.append(womens_issues)
    issues.append(weed)
    issues.append(gun_issues)
    
    result = dict()
    for i in issues :
        #print (i)
        for w in i :
            keys = result.keys()
            if i[0]  in keys :
                result[i[0]] += candidate_tweets.count(w)
            else :
                result[i[0]] = candidate_tweets.count(w)
    
    return result
        

def get_most_frequent_words(words, num) :
    count = 0
    lower_bound = 0
    freq_words = list()

    for w in words :
        #print(w)
        t = w.lower()
        words.remove(w)
        words.append(t)
    for w in words :
        word_count = words.count(w)
        if word_count > lower_bound and len(w) > 1 :
            lower_bound = max(lower_bound, word_count)
            #print(lower_bound)
            if len(freq_words) < num :
                count += 1
                freq_words.append(w)
            else :
                freq_words[count-1] = w
    return freq_words
    
        
#get_pos function takes in candidate name and pos you want,
#returns a list of tuples: words from tweets are paired with their POS code
#POS code definitions found here #https://opensenselabs.com/blog/tech/entity-extraction-using-nlp-python
def pos_tag_tweets(name) :
    # Remove stopwords
    stop_words=set(stopwords.get_stopwords())
    a = {',','!','#','%',':','+','.','@','-','&','?','\"','\'','(',')','\'','`'}
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
    
        
        
