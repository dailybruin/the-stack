# Title of Article

“When to Enroll in Each Class” (Class-Fill-Ups-2)
**Authors**: List of authors
Charlotte Huang, Mansa Krishna, Ananya Garg, Lindsey Parungo

## Visualizations

### All tools used

* React?
* Library 2

### Visualization 1 (Main Graph)

* Main Author: Charlotte
* Based off of old graph
* Has 3 jsx files

### Visualization 2: Most full class by department graph:

* Bar Graph
* Attempts to show which departments fill up the fastest by showing which departments had the most full classes after first pass
* Main Authors: Lindsey
* Major Difficulties: It generally was not too hard. Most of the work was in creating JSON files. We used a code for a similar graph from the first class fill ups article
* Data files: We used JSONs that were converted from a CSV of the main data
* File: js/posts/class-fill-ups-2/insights.jsx

### Visualization 3: Computer Science/Math Increase in Enrollment Table:

* Table
* Shows which computer science and math classes had the highest increase in enrollment due to online classes
* Main authors: Ananya/Charlotte
* Data from class scraper was already cleaned, the main task was filtering the math/CS classes and sorting it based on enrollment, and comparing it to last year's data, and then inputting it into a table.
* File: js/posts/class-fill-ups-2/graphs/mathcstable.js

## Datasets/Data collection

Describe:

* What data was collected - Number of seats left in classes offered each quarter
* How/from who was it collected (scraper, source, etc.) - Scraped from the registrar’s webpage
* How long did it take to gather the data - We ran the scraper every hour for the duration of regular enrollment passes
* Any data formatting done (converting to csv, removing null values, etc.) - There was extensive cleaning and removing of null values - Charlotte did most of the cleaning
* Any data transformation (transforming data to create variables for a visualization) - Created a column for the department codes separate from the class codes
* Every data file that was created, what data it stored, and how it was formatted - JSON files for the charts - csv for data

## Sources

### Source A

* John Langdon, History professor
* Relevance to story - professor who has seen changes in enrollment
* Contact information - unsure
* Difficulty in reaching source - unsure

## Additional Information

* This article was very similar to the first class-fill-ups article
