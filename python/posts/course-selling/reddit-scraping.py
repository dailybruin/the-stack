import praw
from datetime import datetime
import pandas as pd
import os

reddit = praw.Reddit(client_id='8eWx8IaUOl3ecXJrmqQS5Q', client_secret='4-KZWbeQNjeIWLZvUE-YVMgnkWyYKg', user_agent='course-selling')
 
keyword=['course', 'class', 'hold', 'pay', 'drop', 'spot', '$', '$$', '$$$', 'enrollment', 'first', 'second', 'pass', 'lower', 'upper', 'div', 'division']

print ("Subreddit: ",'ucla')
print ("Keyword: ",keyword)
submissions = {"ID": [], "Title/Text": [],
              "Score": [], "URL": [], "Time": []}


for element in keyword:

    for submission in reddit.subreddit('ucla').search(element, limit=None):
         submissions["ID"].append(submission.id)
         submissions["Title/Text"].append(submission.title.encode('ascii', 'ignore') + submission.selftext[:120].encode('ascii', 'ignore'))
         submissions["Score"].append(submission.score)
         submissions["URL"].append(submission.url.encode('ascii', 'ignore'))
         time = submission.created_utc
         submissions["Time"].append(datetime.fromtimestamp(time).strftime('%Y-%m-%d %H:%M:%S'))
        


df = pd.DataFrame(submissions)
path = "/Users/ayushikadakia/Downloads/"

df.to_csv(os.path.join(path, 'output3.csv'))
print(df)