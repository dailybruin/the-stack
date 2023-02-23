Don't know markdown? Check out this link (markdown guide)[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet]

# Title of Article

**Authors**: Ananya Garg, Hinal Jajal, Jessica Li, Tyler Wu

## Visualizations

### All tools used

* jupyter notebook
* d3.js
* chart.js

### Visualization 1: Professor Ratings

* Bar chart
* Compares professor ratings between genders
* Tyler
* d3.js
* no major difficulties
* animation added with .transition() in d3.js
* prof_sentiment_by_qtr_filt.csv
* rating_vis2.js

### Visualization 2: Review Word Cloud

* Word cloud
* Show most common words for all professors
* Tyler
* d3.js
* tuning parameters so all words show up
* hover effect (opacity change)
* prof_word_freqs_POS.csv
* word_cloud.js

### Visualization 3: Professor Adjectives

* lollipop chart (bar chart with circle at end)
* Allows comparison of common adjectives for male and female professors
* Tyler
* d3.js
* filtering stopwords and formatting data to fit visualization
* hover effects, tooltip, vertical line as visual aid
* prof_word_freqs_POS.csv
* word_freq.js

## Datasets/Data collection

Describe:

* What data was collected
- Professor review data (review text, review quarter, rating scores)
* How/from who was it collected (scraper, source, etc.)
-Bruinwalk
* How long did it take to gather the data
-A couple weeks to scrape data; later provided by Bruinwalk
* Any data formatting done (converting to csv, removing null values, etc.)
- none
* Any data transformation (transforming data to create variables for a visualization)
- converted review text to list of words => then used to count frequency of each word
- removed filler words using nltk's stopwords function
* Every data file that was created, what data it stored, and how it was formatted
- prof_sentiment_by_qtr_filt.csv: professor ratings by gender for each quarter
- prof_word_freqs_POS.csv: percent of each word among all words for both genders, as well as difference in percentage, and part-of-speech of word (to filter for adjectives/adverbs)
- top500.csv: 

## Sources

### Source A

* Relevance to story
* Contact information
* Difficulty in reaching source

## Additional Information

* Include any inspiration, major hurdles (and how you overcame them), and anything else you'd like to document here!
