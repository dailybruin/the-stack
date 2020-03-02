import json
import requests
import yaml

CANDIDATES = [
    'joe-biden',
    'elizabeth-warren',
    'bernie-sanders',
    #'pete-buttigieg',
    'amy-klobuchar',
    'donald-trump',
    'michael-bloomberg',
    'tulsi-gabbard']

# NOTE: Change FILE_PATH variable before use!
# - Navigate to the root directory of 'the-stack' repo on command line, type in pwd and copy the result
#   then append /datasets/primaries/ to create your path
# - If you're using Windows, you might have to change backslashes (\) to forward slashes (/)
FILE_PATH = '/Users/ahuja/Desktop/Clubs/stack/the-stack/datasets/primaries/'

# NOTE: This file contains the API token, make sure to include it in your folder before running
CONFIG_FILE = 'auth.yaml'

# parse tweet json dataset
def json_parser():

    # dictionary: candidate name -> tweets text
    candidate_tweets = dict.fromkeys(CANDIDATES)

    for i in CANDIDATES:
        # open json file
        unparsed_json = open(FILE_PATH + i + '.json', 'rb')
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
    #TODO: add try-catch exception for names not present in the dictionary

# access entire candidate list (to loop through)
def all_candidates():
    return CANDIDATES

# access a candidate's personality profile (dictionary of traits)
def personality(candidate_name):
    headers = {
        'Content-Type': 'text/plain;charset=utf-8',
        'Accept': 'application/json',
    }

    params = (
        ('version', '2017-10-13'),
        ('consumption_preferences', ['true', 'true']),
        ('raw_scores', ['true/v3/profile?version=2017-10-13', 'true']),
    )

    # load api auth credentials
    with open(CONFIG_FILE, 'r') as config_file:
        config = yaml.load(config_file)

    # make call to IBM's API
    data = tweets(candidate_name).encode('utf-8')
    response = requests.post(config['ibm']['url'] + '/v3/profile', headers=headers, params=params, data=data, auth=('apikey', config['ibm']['api_key']))
    parsed = json.loads(response.text)

    # save dictionary mapping personality trait -> percentile
    trait_dict = {}

    for j in range(len(parsed) - 2):
        trait_dict[parsed['personality'][j]['name']] = parsed['personality'][j]['percentile']
        for k in range(len(parsed['personality'][j]['children'])):
            trait_dict[(parsed['personality'][j]['children'][k]['name'])] = parsed['personality'][j]['children'][k]['percentile']
    
    return trait_dict

# with open('../../js/posts/primaries/' + 'tulsi-gabbard' + '_traits.js', 'w') as outfile:
#     json.dump(personality('tulsi-gabbard'), outfile)

# temporary code to save trait dictionaries
# for i in CANDIDATES:
#    with open('../../js/posts/primaries/' + i + '_traits.js', 'w') as outfile:
#        json.dump(personality(i), outfile)
