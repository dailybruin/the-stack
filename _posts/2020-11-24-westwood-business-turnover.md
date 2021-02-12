---
title: Westwoood Business Turnover 
teaser: Analysis of the impacts of COVID-19 pandemic on the Westwood businesses.
authors:
  - cameron_bian
  - eustina_kim
  - ziqing_luo
  - faye_zou
  - xuxin_zhang
key_takeaways:
  - Compared with 2018 and 2019, the number of Westwood businesses that opened and closed in 2020 decreased by 57.4% and 83.2% respectively under the effect of the COVID-19 pandemic.
  - The close-to-open-business ratio was 0.25 in 2020, the lowest in the last 20 years.
  - New businesses in Westwood are more vulnerable to the impact of Covid-19 compared to old businesses.

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
  - 
---
## Introduction

The spread of COVID-19 has devastated many businesses across the U.S. According to Yelp’s Local Economic Impact Reports in August 2020, “163,735 total U.S. businesses on Yelp have closed since the beginning of the pandemic (observed as March 1)...with 60% of those closed businesses not reopening (97,966 permanently closed)”  . However, its Annual 2020 report indicates that many businesses have reopened towards the end of 2020 and new restaurants/food businesses were opening near pre-pandemic levels. The Stack investigated trends in business openings and closures in Westwood before and during the pandemic to look into how COVID-19 has impacted businesses specifically in Westwood. 

## About the Data
The data was collected and provided by the Los Angeles Office of Finance.
Some of the graphs may not reflect the actual number of closed and opened businesses because of the following limitations:
The dataset was updated on December 23rd, 2020, so any changes after that are not accounted in this analysis
Some of the businesses only closed temporarily while the others may close forever but haven’t reported to the Los Angeles Office of Finance yet. Thus, these two types of businesses would still be treated as active businesses in our datasets. 

The data also includes independent home-based businesses, so a business’s location may appear as a household address on the interaction map. In addition, since some of the business owners registered with their own names, we will see people's names on the y-axis of the timeline plot below.
To find out the number of opened and closed businesses in the Westwood neighborhood in 2018, 2019 and 2020, explore the interactive map below and select the corresponding options that you wish to see at the top right corner. 
## Overview

Before studying the impact of COVID-19 on Westwood businesses, it is important to have an overview of its current ones.  For more detailed information, visit [here][1] where you can find an updated list of the names of operating businesses. The visualization below illustrates the number of operating businesses in each category, collected from the website mentioned before. We obtained the category information of each business and grouped them into 7 main categories on our own: shopping, daily service, dining, education, entertainment, medical and religious. In particular, based on our analysis, by December 20th, 2020, the three most active business categories are dining with 81 operating businesses, daily service with 53 operating businesses and entertainment with 23 operating businesses. 

[1]: <https://thewestwoodvillage.com/directory/> "Westwood Village website"


 
  

<div id="container" style="position: relative; width:60vw; margin:0 auto"></div>






The map below shows an overview of businesses closures and openings from 2018 to 2020. Click the clusters to zoom in. You can also click the boxes on the right corner to observe the opened and closed businesses for different years. According to the map, 299 businesses closed and 443 closed in 2018, 248 closed and 379 opened in 2019 and 46 closed and 176 opened in 2020.  

<iframe width="100%" height="500" src="../../../../westwood-business-map.html" frameboarder="0" allowfullscreen></iframe>



## Analysis
In the timeplot below, we found that 42 businesses closed in 2020 by the beginning of December. One can see that more than half of the businesses first opened after 2015. This observation leaves us with a question: are newer businesses more vulnerable to the negative impact of COVID-19?

<img src="/img/posts/westwood-business/timeline.png" style="width:53vw" class = "center"/>




To answer this question, we labeled the businesses first opened before Jan 1, 2015 as “old businesses” and those opened after this date as “new businesses”. We calculated the ratio between the number of closed businesses in 2020 to the number of currently active businesses for both old and new businesses. This ratio is used to reflect the vulnerability of old and new businesses to the pandemic— the lower the ratio is, the more resistant the business is to COVID-19. The result shows that the ratio for new businesses is 0.01143 (23 closed/ 2012 active) which almost doubles compared to  0.005097 (19 closed/3729 active) of old businesses. Thus, we conclude that the new businesses are more susceptible to COVID-19.




To further study how Westwood businesses are impacted by the Covid-19, we can take a look at how many businesses closed and opened during each month of 2018, 2019 and 2020


<img src="/img/posts/westwood-business/barplot.png" style="width:63vw" class = "center"/>


 
Based on the barplot above, we can clearly see that compared to the previous two years, there are considerably fewer businesses closed and opened for each month of 2020. On average, 4.6 businesses closed and 14.7 businesses opened monthly in 2020; in 2019, the average numbers of opening and closing businesses were 31.8 and 20.7 respectively; in 2018, 37.1 businesses opened monthly and 25 businesses closed in each month. 

I.F., manager of Sharetea spoke from his past experiences of working in Westwood, that “the general trend is that business goes down especially during breaks, because all of the students leave. So it was even harder when we’ve lost a lot of customers when they’ve had to go back home already, because [there’s no in-class stuff.]” 

Shebaz Mattu, owner of the 7-11 store in Westwood, also expressed similar sentiment: “We took the hardest hit out of most 7-11s because my sole customer base is UCLA: UCLA tourism, UCLA students, UCLA faculty, UCLA moms, dads, and kids... (the) whole village is just a home to a lot of people and seeing it become so scared, and so ghost-town, it’s just sad.” 

Andrew Thomas, the executive director of the Westwood Village Improvement Association, also suggests that “opening a business in Los Angeles is not for the faint of heart” because the permitting process is challenging. He says that “the pandemic is only added to, you know, just the challenges that our businesses have to overcome in order to open”.

In addition, we noticed a trend where many businesses open in January and close in December. According to Thomas, the explanation could be due to the way the leasing contract works in Westwood or that people are generally more optimistic about the future at the beginning of a new year or that it’s more difficult to start a process for opening a business after Thanksgiving into the holidays. 



For a further analysis, we dug deeper to explore the data of Westwood businesses in the past 20 years. Here, we used the close-to-open-business ratio (ratio between the total number of businesses opened and closed in a specific year) to reflect the well-being of Westwood businesses. From the graph below, we see that the ratio was highest during 2008 with a value of 0.86 during the 2008 financial crisis. However, the ratio of 2020 is 0.255 which is the lowest of the past 20 years. Using our ratio, we concluded that the Westwood businesses were not hit as bad as the 2008 crisis.   

<img src="/img/posts/westwood-business/close-open-ratio.png" style="width:63vw" class = "center"/>






However, Thomas claims he “saw the percentage of vacancy go up, pretty significantly” in 2020. He says that “about 31% of our ground floor retail spaces are vacant now” compared to 22% last year. The difference in the trends between the close-to-open business ratio and the rate of vacancy may have resulted from the fact that the data we used includes all businesses in Westwood, including independent businesses and those in UCLA while the data from the association only includes retail spaces in its estimation. 

Thomas’ observation aligns with the varying degrees of negative impact that the pandemic has imposed on different businesses in Westwood. This has led to varied responses from the businesses in regards to the adjustments they made as well as their perspective on the issue. According to I.F., Sharetea has learned to adopt many new procedures to bring back their sales while ensuring the safety of their workers and customers. “We decided to stay open throughout the whole process,” he said, “but what we did was adjust.” This included implementing safety precautions such as requiring employees to wear gloves and record their temperatures before their shifts. Along with the in-person precautions, the store, like many others, began performing deliveries for customers, which has allowed its sales to slowly pick up since the initial fall. 

In contrast to Sharetea, which has stayed open during the whole period of the pandemic, life retail store Urban Outfitters took a slightly different approach, closing immediately when the pandemic hit and not reopening to the public until spring with several adjustments and precautionary measures. With regards to the store business, Arturo Ramirez Jr., manager at Urban Outfitters Westwood, wrote that “Sure, the business might not be performing the best it can, but if that means people are staying indoors and staying aware of the bigger problems going on then I’m all for it.” 

## Conclusion
Although fewer businesses closed compared to previous years, our analysis shows that the number of new businesses also decreased in 2020 due to the increasing difficulty of maintaining normal business activities brought by COVID-19. The decrease in both the number of closing and opening stores suggests that business activity in Westwood has slowed down overall. 

At the same time, by studying the ratio between closed and opened businesses, we find that the ratio in 2020 drops to the lowest point of the past 20 years, meaning the negative impact of COVID-19 on Westwood businesses is less serious than that brought by the financial crisis in 2008, even though the vacancy rate of retail spaces in Westwood increased quite drastically. This insight could show that people turned to opening independent businesses where they can work in a more flexible environment instead of opening physical stores as the pandemic began to spread. Another insight from our study is that the newer businesses (opened after 2015) are more vulnerable to COVID-19 than older businesses. 
















