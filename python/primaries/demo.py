# USAGE DEMO
# NOTE: First go to candidate.py and change your path!

# import candidate.py in the file you're working in
import candidate

# access all the tweets text by calling the method candidate.tweets with the candidate's name as a parameter
# the naming convention for candidates is firstname-lastname
print(candidate.tweets('donald-trump'))

# access the names of/loop through all the candidates in the dictionary by calling candidate's all_candidates method
# it returns a list of all the candidates
for i in candidate.all_candidates():
    print(i)
    # print(candidate.tweets(i)) # this prints all tweets from each candidate
