---
title: "Course Scarcity: Unveiling UCLA’s online course-selling market"
teaser: The Stack scraped data from the UCLA subreddit and Snapchat groups to model UCLA’s course-selling market.
authors:
  - ayushi_kadakia
  - cassidy_sadowski
  - luca_adams
  - junwon_choi
key_takeaways:
  - Psychology and physics were the two departments with the highest demand in courses on Reddit.
  - 69% of posts on Reddit for all observed quarters mention monetary transactions.
  - The class of 2026 and 2027 Snapchat groups each had over twice the amount of course-selling posts than the class of 2025 Snapchat group.

featured_image:
  url: course-selling/design-cover.png
  caption: (Helen Quach/Daily Bruin)
og_image:
scripts:
  - //cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
  - //cdn.anychart.com/releases/8.11.0/js/anychart-core.min.js
  - //cdn.anychart.com/releases/8.11.0/js/anychart-circle-packing.min.js
  - //cdn.anychart.com/releases/8.11.0/js/anychart-data-adapter.min.js
  - /js/posts/course-selling/circlepacking.js
  - /js/posts/course-selling/moneygraph.js
  - /js/posts/course-selling/yeargraph.js

stylesheets:
  - /css/posts/course-selling/app.css
---

### Introduction

The quarterly stress of enrolling in classes is not new to students at UCLA. For some students however, getting classes that they want is not always guaranteed, and they turn to buying or asking for courses held by other students to secure their spots.

Course selling is when students buy and sell a seat in a UCLA course. This is done when the seller, who is enrolled in the class, drops the class at a prescribed time so that the buyer, who wants to enroll in the class, can guarantee themselves a spot in the class. This can also be done without a monetary transaction, a process referred to as course holding.

According to a 2020 email from UCLA spokesperson Ricardo Vazquez, “acquiring courses in a non-sanctioned way, such as on Facebook, is a violation of the Student Conduct Code and may result in a student being referred to the Student Conduct Office for review if they are caught engaging in this activity.”

If there are strict punishments for course selling, why are students incentivized to purchase spots in such courses? Why do many go beyond the official and authorized mechanisms for enrollment?

### Student Reactions

Some UCLA students believe that the limited number of seats in courses compels students to look for alternative enrollment methods.

“In the life sciences (department), a lot of times they (the department) don’t make accommodations or expand class seats, too, so that just makes it extra hard and competitive to get into the classes,” said Shania Garrison, a third-year physiological science student.

When asked about the impacts of course holding on students, Garrison said that, “It’s unfair for people to hold spots if they’re not planning on taking the class or holding it for someone else who has a later registration time.”

Other students consider the root of the issue to be the insufficient number of lectures available for certain courses.

“The fact that people have to pay to get the courses they want kind of says a lot about how impacted a lot of the school is” said fourth-year psychology student Matthew O’Brien.

### About the Data

The Stack scraped posts regarding buying, selling, and holding classes from the UCLA subreddit during the five enrollment periods between February 2022 and November 2023. Data from Snapchat was collected during the enrollment period for the Winter 2024 quarter from each class’ Snapchat group: class of 2025 (current juniors), 2026 (current sophomores) and 2027 (current freshmen).

### Most Requested Departments and Courses

The interactive below displays the number of course-selling-related posts on the UCLA subreddit between the enrollment periods for Fall 2022 to Winter 2024. The posts include both requests and offers to hold courses. The circle sizes are categorized by department, with their sizes representing the number of respective posts for the department courses. Hover over the circles to see the number of posts made for the department and the most requested classes.

<style>
#container {
  /* Default dimensions for large devices */
  width: 800px;
  height: 800px;
}

/* When the viewport is 800px or less, make the width 100% */
@media (max-width: 480px) {
  #container {
    width: 480px;
    height: 480px;
  }
}
</style>
<div id="container"></div>
<p class = 'caption'>Note: Subject areas with fewer than 5 posts requesting or selling a class were removed from the interactive.</p>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack intern and Junwon Choi, Data editor.</p>

The most common subject area for course selling was psychology, with 83 Reddit posts. The second most common subject area was physics, with 72 posts. The next most common subject area for course-selling posts was chemistry, at 47 posts. In general, the data indicates that STEM courses are more frequently subjects of course selling as 85.5% of Reddit posts were for STEM courses.

It is important to note that the physics department does not officially designate any of its classes as “impacted.” Impacted status means that demand for the class far exceeds the number of seats available, and dropping after week 2 results in a transcript notation.) The goal of this rule is to enable qualified students to be able to take the classes they need. This is because a lack of consequences for dropping a class within the first two weeks may incentivize students to enroll in the course when they are unsure if they will remain in the course. As a result, the course may fill up more quickly, and, consequently, some students who need the course may turn to buying the course. The choice not to classify physics classes as impacted may contribute to the shortage of available seats in popular physics courses.

To address this issue, some departments have implemented alternative course enrollment tools. The mathematics department, for example, allows students to submit a course request to enroll in upper-division math courses, providing motivated students an avenue into courses they need without having to resort to buying seats.

### Variability Between Class Years

In an effort to understand when enrollment challenges are most felt by the undergraduate population, The Stack also analyzed course holding and selling requests from Snapchat. By collecting data about each poster’s class year, The Stack sought to identify patterns regarding the frequency with which each cohort engaged in course selling.

First- and second-year students (class of 2026 and 2027) are more likely to be enrolling in lower-division courses in high demand, while upperclassmen are likely to seek out more major-specific upper-division courses. Students with fewer completed units – first and second years – generally receive later enrollment appointments, which may lead to their desired classes being filled up by those with earlier enrollment appointments. The interactive found below presents a potential impact of the unit-based enrollment time distribution. It displays the number of posts found on Snapchat about course selling by class graduation year.

<div class="chart">
    <canvas id="yearGraph"></canvas>
</div>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack intern</p>

The class of 2025 had nearly 100 fewer posts related to course selling than the classes of 2026 and 2027. Limited access to upper-division courses may reduce competition for enrollment, resulting in a smaller course-selling market for upperclassmen. As mentioned above, another plausible explanation for the higher levels of course selling seen for underclassmen is the later enrollment times for underclassmen. With later enrollment times, underclassmen are less likely to acquire the courses they need in order to declare their majors through official enrollment, and so, may be more likely to turn to course purchasing.

### Payment Patterns

The Stack also analyzed how many Reddits implied a monetary transaction for a course spot.

<div class="chart">
    <canvas id="moneyGraph"></canvas>
</div>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack intern</p>

The majority of Reddit posts regarding course selling mention money, indicating that online course transactions mostly involve a seller seeking financial gain. However, over 20% of posts for all observed quarters do not mention money. In such cases, it may be that payment is discussed privately, or the seller does not seek monetary compensation.

Very few posts on either Reddit or Snapchat mention specific dollar amounts, whether that was for requesting to purchase or sell a course. The highest specific amount offered to purchase a course was \$300 for Econ 11: “Microeconomic Theory I”, a required course for popular majors such as economics and business economics, demonstrating how much some students are willing to pay.

O’Brien, however, proposed a different motivation for course selling.

“Some classes are simply more appealing than others, and some professors are more appealing, whether it’s because they’re a good lecturer, better professor, better teacher, or they graded better or easier,” O’Brien said.

O’Brien believes that grade distribution differences between professors could drive students to conclude that it is worth some dollar amount to get a better grade in a given course.

The collected Reddit data revealed that 69% of all course-selling posts mention money. Evidently, purchasing courses is a more viable option for those with the financial means to do so. Concerns have been raised as wealthier students may be able to afford to purchase courses while less advantaged students may need to try for the course again in a later quarter.

“Obviously, you need to pay someone to get a course, which puts wealthy students at an advantage,”O’Brien said.

### Conclusion

The findings presented here display the challenges that students face during course enrollment. As the course-selling market is dominated by monetary transactions, financial disparities between students emerge as a concern, especially as students attempt to enroll in high-popularity courses.

### Related Article

- [Enrollment’s Out-of-Pocket Price](https://prime.dailybruin.com/enrollmentmarket)
