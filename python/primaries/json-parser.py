import json
import requests

CANDIDATES = [
    'joe-biden', 
    'elizabeth-warren', 
    'bernie-sanders', 
    'pete-buttigieg', 
    'amy-klobuchar', 
    'tom-steyer', 
    'andrew-yang',
    'donald-trump']

# NOTE: Change path before use!
PATH = 'C:/Users/ahuja/Desktop/Clubs/stack/the-stack/datasets/primaries/'

# parse tweet json dataset
def json_parser():

    # dictionary: candidate name -> tweets text
    candidate_tweets = dict.fromkeys(CANDIDATES)

    for i in CANDIDATES:
        # open json file
        unparsed_json = open(PATH + i + '.json', 'rb')
        parsed_json = json.load(unparsed_json)

        # assign each candidate's tweet text to candidate name 
        tweet_data = ""
        for j in range(len(parsed_json)):
            tweet_data = tweet_data + parsed_json[j]['text']
        candidate_tweets[i] = tweet_data

    return candidate_tweets

# access candidate's tweets
def tweets(candidate_name):
    candidate_tweets = json_parser()
    return candidate_tweets[candidate_name]

print(tweets('donald-trump'))

headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

params = (
    ('version', '2017-10-13'),
    ('consumption_preferences', 'true'),
    ('raw_scores', 'true'),
)


#TODO: Do we need to remove links?
#data = open('C:/Users/ahuja/Desktop/Clubs/stack/the-stack/datasets/primaries/andrew-yang.json', 'rb').read()
#response = requests.post('http://%7Burl%7D/v3/profile', headers=headers, params=params, data=data, auth=('apikey', 'Evef9Le9VD1b4wMKw3N0dfauvn3EQDVydNOcGxjQf9oM'))
#print(response)

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.post('http://{url}/v3/profile?version=2017-10-13&consumption_preferences=true&raw_scores=true', headers=headers, data=data, auth=('apikey', '{apikey}'))

