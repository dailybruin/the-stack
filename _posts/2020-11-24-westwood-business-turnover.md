---
title: Westwoood Business Turnover 
teaser: Analysis of the impacts of COVID-19 pandemic on the Westwood businesses.
authors:
  - cameron_bian
  - eustina_kim
  - ziqing_luo
  - xuxin_zhang
key_takeaways:
  - Compared with 2018 and 2019, the numbers of Westwood businesses that opened and closed in 2020 both decrease by 57.4% and 80.0% respectively under the effect of COVID-19 pandemic.
  - The close-to-open-business ratio is 0.25 in 2020, which is the lowest in the last 20 years.
  - New businesses in Westwood are vulnerable to the impact of Covid-19 compared to the old businesses.

featured_image:
  url:
og_image:
stylesheets:
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css
  - https://fonts.googleapis.com/css?family=Roboto&display=swap
  - /css/posts/westwood-business/app.css
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
  - https://code.highcharts.com/highcharts.js
  - https://code.highcharts.com/highcharts-more.js
  - https://code.highcharts.com/modules/exporting.js
  - https://code.highcharts.com/modules/accessibility.js
  - /js/posts/westwood-business-turnover/barplot.js
  - /js/posts/westwood-business-turnover/bubble.js
---
## Introduction

The spread of COVID-19 has devastated many businesses across the U.S. According to Yelp’s Local Economic Impact Reports in August 2020, “163,735 total U.S. businesses on Yelp have closed since the beginning of the pandemic (observed as March 1)...with 60% of those closed businesses not reopening (97,966 permanently closed)”. However, its Annual 2020 report indicates that many businesses have reopened towards the end of 2020 and new restaurants/food businesses were opening near pre-pandemic levels. The Stack investigated trends in business openings and closures in Westwood before and during the pandemic to look into how COVID-19 has impacted businesses specifically in Westwood. 

## About the Data
The data was collected and provided by the Los Angeles Office of Finance. The data columns used include business name, zip code, primary naics description, location start date, location end date and location. Below are notes and limitations of the data.

The following graphs may not reflect the actual number of closed businesses and close-to-open ratio in December 2020 because of the following limitations: 
1. **the datasets we used were last updated on December 23rd, 2020, so any changes after that date are not accounted in this analysis**
2. **some of the businesses only closed temporarily for the time being; the others may close forever but didn't report to the Los Angeles Office of Finance. Thus, these two types of businesses would be treated as active businesses in our datasets. This issue with our datasets could lead to serious inaccuracy of our analysis, but we haven't figured out a way to solve it.**

The data also involves independent home-based businesses. With that being said, a business’ location may appear as a household address on the interaction map. In addition, these independent home-based businesses registered to the government with their own name, that's why we see people's name on the y-axis of the timeline plot. 


## Overview


Before studying the impact of COVID-19 on Westwood businesses, it is important to have an overview of its current ones.  For more detailed information, visit [here][1] where you can find the most updated list of the names of operating businesses. The visualization below illustrates the number of operating businesses in each category. The data is scraped from the westwoodvillage website mentioned before. We managed to get the category information of each business and grouped them into 7 main categories: shopping, daily service, dining, education, entertainment, medical and religious. In particular, based on our analysis, by December 20th, 2020, the three most active business categories are dining with 81 operating businesses, daily service with 53 operating businesses and entertainment with 23 operating businesses. 

[1]: <https://thewestwoodvillage.com/directory/> "Westwood Village website"
 
  

<div id="container" style="position: relative; width:60vw; margin:0 auto"></div>




The map below shows an overview of businesses closures and openings from year 2018 to 2020 by clustering locations by proximity. Click the clusters to zoom in. You can also click the boxes on the right corner to observe opened and closed businesses for different years. *Write the percentages of businesses that opened and closed here .


<img src="/img/posts/westwood-business/interactive_map.png" style="width:60vw" class = "center"/>



## Analysis

The timeline plot here is made for those businesses that reported to close in 2020. Based on the dataset we have, we found that there were 42 businesses closed in 2020 by the beginning of December. From the timeplot, one can see that more than half of the businesses first opened after 2015. This phenomenon leaves us with a question: are newer businesses more vulnerable to the negative impact of COVID-19?

To answer this question, we first labeled the businesses first opened before Jan 1, 2015 as the “old businesses” and those opened after this date as “new businesses”. One should not just reach a conclusion by simply comparing the closed number of new and old businesses. Instead, we calculated the ratio between the number of closed businesses in 2020 to the number of currently active businesses for both old and new businesses. This ratio is used to reflect the vulnerability of old and new businesses to the pandemic: the lower the ratio is, the more resistant the business is to COVID-19. The result shows for the new businesses, there are 2012 operating businesses together with 23 businesses closed this year; for old businesses, 3728 of them are still active, and 19 closed in 2020. That is to say, the ratio for the old businesses is 0.005097 while that for the new businesses is 0.01143. The ratio almost doubled for the new businesses. Thus, we conclude that the new businesses are more susceptible to covid-19.

<img src="/img/posts/westwood-business/timeline.png" style="width:60vw" class = "center"/>

To further study how Westwood businesses are impacted by the Covid-19, we can take a look at how many businesses closed and opened during each month of 2018, 2019 and 2020.

Based on the barplot, we can clearly see that compared to the previous two years, there are considerably fewer businesses closed and opened for each month of 2020. On average, 4.6 businesses closed and 14.7 businesses opened monthly in 2020; in 2019, the average numbers of opening and closing businesses were 31.8 and 20.7 respectively; in 2018, 37.1 businesses opened monthly and 25 businesses closed in each month. In addition, we noticed in the beginning and end of almost each year, there are usually many businesses opened and closed. According to Andrew Thomas, executive director of the Westwood Village Improvement Association, the explanation could be due to the way the leaseing contract works in Westwood or that people are generally more optimisitc about the future at the beginning of a new year.

<img src="/img/posts/westwood-business/barplot.png" style="width:80vw" class = "center"/>


For a further analysis, we dug deeper to explore the data of Westwood businesses in the past 20 years. Here, we used the close-to-open-business ratio (ratio between the total number of businesses opened and closed in a specific year) to reflect the well-being of Westwood businesses. From the graph below, we see that the ratio is the highest around 2008 with a value of 0.86 when the Financial Crisis negatively impacted the national economy. However, the ratio of 2020 is 0.255 which is the lowest of the past 20 years. Following this logic, we conclude that the Westwood businesses are not hit as bad as the 2008 period.   

<img src="/img/posts/westwood-business/close-open-ratio.png" style="width:80vw" class = "center"/>

However, sources from the Westwood Village Improvement Association suggests that business closures in 2020 were higher compared to previous years. Andrew Thomas states that the vacancy rate of storefronts in Westwood went from 22% in 2018 to 31% in 2020. The difference in the trends may have resulted from the fact that the data we used includes all businesses in Westwood, including independent businesses and those in UCLA while the data from the association does not. 

We found out the top 5 business categories at Westwood and checked their number of active businesses in 2018, 2019 and 2020. We can observe that at the beginning of 2018 and 2019, there are huge boosts in the graph, which means fair amounts of businesses that fall in the five categories opened their business as the new year started. However, in 2020, due to the pandemic, less companies chose to do so. The top 5 business categories are: Independent artists, writers, & performers, All other personal services, All other professional, scientific, & technical services, Management, scientific, & technical consulting services, and Lessors of real estate (including mini warehouses & self-storage units)Independent artists, writers, & performers include companies that produce films and animation, such as “Noise Nest Animation”. All other personal services include tourist and cleaning companies. All other professional, scientific include consulting firms. (***We think this part is a little redundant and similar to what we have analyzed above: subject to deletion if you want.***)
<img src="/img/posts/westwood-business/gif.gif" style="width:80vw" class = "center"/>


We also interviewed store owners and managers from a variety of sources on their experience with operating a business in Westwood since the pandemic hit. I.F., manager of the fairly new boba shop Sharetea (opened in December 2019), says that the store has learned to adopt many new procedures to bring back their sales while ensuring the safety of their workers and customers: “We decided to stay open throughout the whole process. But what we did was adjust. We had our employees wear masks, wear gloves, constantly. We had to disinfect all of our high contact surfaces, often as much as we could. And then throughout the lockdown, we improved our safety precautions the longer this has been going. We also had a checklist where we would take a peek at the temperatures of our workers right before the shift.” In addition, the store also ventured into the new arena of delivery services in response to more people staying home during the stay-at-home order. This has been an effective strategy for the store as a majority of the orders that come in nowadays are for delivery, even though in-person orders have slowly picked up and increased since the initial fall. 

In contrast to Sharetea, which has stayed open during the whole period of the pandemic, life retail store Urban Outfitters took a slightly different approach, as they closed immediately when the pandemic hit and did not reopen to the public until around mid-May/Early June 2020 with several adjustments and precautionary measures. With regards to the store business, Arturo Ramirez Jr, manager at Urban Outfitters Westwood, says that “the business has definitely suffered, but our main concern is still maintaining a safe, healthy environment for everyone. Sure, the business might not be performing the best it can, but if that means people are staying indoors and staying aware of the bigger problems going on then I’m all for it.” 

Lastly, we also spoke with Shehbaz Mattu, owner of the convenience chain store 7-11 in Westwood. Having deep affection for the Westwood community, Shehbaz was sad to see stores in Westwood running out of business as the sales situation continued to worsen for the store. (from not selling about 100 items every month to not selling about 500 (?) per month. *Will add more and polish up after Diego finishes transcribing* 

Both Sharetea and 7-11 have identified the drastic drop of student population as a factor that has posed much challenge during this pandemic process. 
















