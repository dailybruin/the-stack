---
title: "Course Scarcity: Unveiling UCLA’s online course selling market"
teaser: The Stack scraped data from the UCLA Subreddit and Snapchat groups to model UCLA’s course selling market.
authors:
  - cassidy_sadowski
  - ayushi_kadakia
  - luca_adams
  - junwon_choi
key_takeaways:
  - Psychology and Physics were the two departments with the highest demand in courses on Reddit. (CQ#1)
  - 69% of posts on Reddit for all observed quarters mention monetary transactions. (CQ#2)
  - The Class of 2026 and 2027 Snapchat groups each had over twice the amount of course selling posts than the Class of 2025 Snapchat group (CQ#3)

featured_image:
  url:
  caption:
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

The quarterly stress of enrolling in classes is not new to students at UCLA. For some students however, getting classes they want is not always guaranteed, and they turn to buying or asking for courses held by other students to secure their spots.

Course selling, as the name indicates, is when students buy and sell a seat in a UCLA course. This is done when the seller, who is enrolled in the class, drops the class at a prescribed time so that the buyer, who wants to enroll in the class, can guarantee themselves a spot in the class. This can also be done without a monetary transaction, a process referred to as course holding.

According to a 2020 email from UCLA spokesperson, Ricardo Vazquez, “acquiring courses in a non-sanctioned way, such as on Facebook, is a violation of the Student Conduct Code and may result in a student being referred to the Student Conduct Office for review if they are caught engaging in this activity.” (CQ#4)

If there are strict punishments for course selling, one should ask why students are incentivized to purchase spots in such courses. Why do many go beyond the official and authorized mechanisms for enrollment?

Some UCLA students believe that the limited number of seats in courses compel students to look for alternative means. “In the life sciences (department), a lot of times they (the department) don’t make accommodations or expand class seats, too, so that just makes it extra hard and competitive to get into the classes,” Shania Garrison, a third year physiological science student, said. (CQ#5)

When asked about the impacts of course holding on students, Garrison says that “it’s unfair for people to hold spots if they’re not planning on taking the class or holding it for someone else who has a later registration time.” (CQ#6)

Other students consider the root of the issue to be the insufficient amount of lectures available for certain courses.

Matthew O’Brien, a fourth-year psychology student, notes that “the fact that people have to pay to get the courses they want kind of says a lot about how impacted a lot of the school is. So, I think a solution might be hiring more faculty, having more (lectures) of each class.” (CQ#7)

###Most Requested Departments and Courses

In an effort to gain a better understanding of the true scope of course selling at UCLA and its true impact, The Stack compiled course selling data from the UCLA Subreddit and Snapchat groups from the class of 2025, 2026 and 2027, two popular platforms for course selling.

The interactive below displays the number of course selling related posts on the UCLA subreddit between the enrollment periods for Fall 2022 to Winter 2024. The posts include both requests and offers to hold courses. The circle sizes are categorized by department, with their sizes representing the number of respective posts for the department courses. Hover over the circles to see the number of posts made for the department and the most requested classes.

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
<p class = 'caption'>Note: Subject areas with less than 5 posts requesting or selling a class were removed from the interactive.</p>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack Intern and Junwon Choi, Data editor.</p>

The most common subject area for course selling was Psychology with 83 Reddit posts. The second most common subject area was Physics with 72 posts. The next most common subject area for course selling posts was Chemistry at 47 posts. In general, the data indicates that STEM courses are more frequently subjects of course selling as 85.5% of Reddit Posts were for courses in STEM. (CQ#8)

It is important to note that the Physics Department does not officially designate any of its classes as “Impacted.” Impacted status means that demand for the class far exceeds the number of seats available, and dropping after Week 2 results in a transcript notation. (CQ#9) The goal of these rules is to enable qualified students to be able to take the classes they need.

Therefore, not classifying Physics classes as Impacted leads to a shortage of available seats in popular physics courses. When there are no consequences for dropping courses within the first two weeks, students are more likely to enroll in the course even if they do not plan to remain in the course. The course may fill up more quickly and, consequently, some students who need the course may turn to buying the course.

However, some departments have used other methods in order to mitigate demand. The Mathematics department allows students to submit a Course Request to enroll into upper division math courses. However, given that requests can be completed as late as Week 3, and that many popular courses are lower division, there is still relatively high demand to hold and sell math courses despite this option.

### Variability between Class Years

In an effort to understand when enrollment challenges are most felt by the undergraduate population, The Stack also analyzed the Snapchat posters’ class year to identify patterns regarding the frequency with which each cohort engaged in course selling.

Though each student completes their major requirements at their own pace, first and second year students (class of 25 and 26) are more likely to be enrolling in lower division courses in high demand while upperclassmen are likely seeking out more major-specific upper division courses. On average, these students receive the latest enrollment appointments, which may lead to their desired classes being filled up by those with earlier enrollment appointments. The interactive found below presents a potential impact of this trend. It displays the number of posts found on Snapchat around course selling by class graduation year.

<div class="chart">
    <canvas id="yearGraph"></canvas>
</div>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack Intern</p>

The class of 2025 had nearly 100 fewer posts related to course selling than the classes of 2026 and 2027. Limited access to upper division courses may reduce competition for enrollment, resulting in a smaller course selling market for upperclassmen. As mentioned above, another plausible explanation for the higher levels of course selling seen for underclassmen is the later enrollment times for underclassmen. With later enrollment times, underclassmen are less likely to acquire the courses they need in order to declare their majors through official enrollment, and so may be more likely to turn to course purchasing.

### Payment Patterns

The Stack also analyzed how many Reddits implied a monetary transaction for a course spot.

<div class="chart">
    <canvas id="moneyGraph"></canvas>
</div>
<p class = 'caption'>Graphic reporting by Ayushi Kadakia, Stack Intern</p>

The majority of Reddit posts regarding course selling mention money indicating that online course transactions mostly involve a seller seeking financial gain. However, over 20% of posts for all observed quarters do not mention money (CQ#12). In such cases, it may be that payment is discussed privately or the seller does not seek monetary compensation.

Very few posts on either Reddit or Snapchat mention specific dollar amounts, whether that was for requesting to purchase or sell a course. The highest specific amount offered to purchase a course was \$300 for Economics 11, a required course for popular majors such as Economics and Business Economics, demonstrating how much some students are willing to pay. (CQ#13)

O’Brien, however, proposed a different motivation for course selling. “Some classes are simply more appealing than others, and some professors are more appealing, whether it’s because they’re a good lecturer, better professor, better teacher, or they graded better or easier.” (CQ#14) O’Brien believes that grade distribution differences between professors could drive students to conclude that it is worth some dollar amount to get a better grade in a given course.

The collected Reddit data revealed that 69% of all course selling posts mention money. Evidently, purchasing courses is a more viable option to those with the financial means to do so. Concerns have been raised as wealthier students may be able to afford to purchase courses while less advantaged students may need to try for the course again a later quarter.

“Obviously, you need to pay someone to get a course, which puts wealthy students at an advantage,”(CQ#15) O’Brien said.

To hear more about students’ personal experiences with course buying and selling as well as the UCLA administration’s response to the course selling market, click [here](https://prime.dailybruin.com/enrollmentmarket) for an article from the Daily Bruin’s PRIME Magazine.

### About the Data

The Stack scraped posts regarding buying, selling, and holding classes from the UCLA Subreddit during the five enrollment periods between February 2022 and November 2023. Snapchat data was collected during the enrollment period for the Winter 2024 quarter from each class’ Snapchat group: class of 2025 (current juniors), 2026 (current sophomores), and 2027 (current freshmen).
