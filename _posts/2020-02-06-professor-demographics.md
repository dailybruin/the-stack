---
title:  "Evaluating the Decade's Demographic Trends Among Faculty at UCLA"
teaser: How have the demographics of UCLA faculty changed since 2010?
authors:
    - bernard_mendez
    - annie_zhang
    - charlotte_huang
    - jeanette_lin
    - jc_rios
key_takeaways:
    - Campuswide, UCLA has hired a greater proportion of minority faculty in the past 10 years.
    - The total proportion of female faculty has also increased by around 5%.
    - Few schools had a significant (>10%) percent change in American Indian faculty. 
featured_image:
    url: /professor-demographics/graph.png
og_image: /professor-demographics/graph.png
stylesheets:
    - /css/posts/professor-demographics/app.css
    - /css/posts/professor-demographics/copy.css
scripts:
    - //d3js.org/d3.v4.min.js
    - //d3js.org/d3-transition.v1.min.js
    - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
    - /js/posts/professor-demographics/appDONTFORGETTODELETE.js
    - /js/posts/professor-demographics/data_vars/American_Indian.js
    - /js/posts/professor-demographics/data_vars/Asian.js
    - /js/posts/professor-demographics/data_vars/Black.js
    - /js/posts/professor-demographics/data_vars/Latino.js
    - /js/posts/professor-demographics/data_vars/Two_Plus.js
    - /js/posts/professor-demographics/data_vars/Unknown.js
    - /js/posts/professor-demographics/data_vars/White.js
    - /js/posts/professor-demographics/chart.js
    - /js/posts/professor-demographics/var.js
    - /js/posts/professor-demographics/copy.js
    - /js/posts/professor-demographics/char.js
---

Brantly Fulton grew up in Pontiac, Michigan, an underprivileged community outside Detroit. 

Fulton went on to graduate with a degree in chemistry from Morehouse College and joined UCLA as a lecturer of chemistry in 2019.

Still, he said his path was difficult – he didn’t have any role models.

“I didn't have professors that lived in my neighborhood,” he said. “You don't have a symbol of that person who looks like you represent you.”

Fulton said African American students have told him they feel more comfortable coming to his lectures, coming to his office hours and paying attention in class because they can identify with him.

Fulton said although there is great diversity among undergraduate and graduate students, there is very little among faculty, adding he thinks institutions have to do better jobs seeking out talented individuals from underrepresented backgrounds. Since 2010, there has never been more than two fully employed African American faculty in Fulton’s department.

“Because it is so competitive to get into academia, it allows for institutions to sit back and just allow for applicants to apply,” he said. “Institutions need to be more proactive and attend minority based conferences and go out into these communities to kind of seek out the talents.”

The Stack took a look into faculty hiring patterns based on race and gender over the past 10 years, starting from the 2010-2011 through the 2018-2019 academic year.


<div id='holder'>
    <div id='school_wrap'>
        <h2>Race/Ethnicity by School</h2>
        <select class='menu' id='school'>
        <option>--</option>
        </select>
    </div>
    <div id='dept_wrap'>
        <h2>Race/Ethnicity by Department</h2>
        <select class='menu' id='depts'>
        <option>--</option>
        </select>
    </div>
    <h4 style='padding-top: 10px'>Sort by</h4>
    <form action="">
      <input type="radio" name="gender" value="gender" id='sch' onclick='ichange("school")'>School<br>
      <input type="radio" name="gender" value="race" onclick='ichange("department")'>Department<br>
    </form>
</div>
<div id='wrap1'>

<div id='graphs'>
    <div style='width: 100%; mex-width: 100%; height: 85vh; min-height: 60vh;'>
        <canvas id='modified' style='width: 100%; height: 100%; min-height: 60vh;'></canvas>
    </div>
</div>
</div>


<aside id='pie_stand'>
<div><h2 style='padding-top: 5%;'>Demographics by School</h2>
<p style='color: grey; font-size: 10px'>Measured in FTE — where a value of 1 is equal to an employee working full time year-round</p>
<h4 style='text-align: center;'>2018-2019</h4></div>
<div style='width: 100%; display: flex; flex-direction: row; justify-content: space-around'>
    <div>By Gender</div>
    <div>By Race/Ethnicity</div>
</div>
</aside>

### About the Data
* The data was collected from BruinX, an analytics-based think tank housed under the Office of Equity, Diversity and Inclusion at UCLA.
* The number of faculty per school/department is shown as full-time equivalent – an employee who works full time year round would equal 1 FTE, while an employee who works half time for a full year would equal 0.5 FTE.
* Departments that do not teach undergraduate courses and have less than 5 FTE faculty are not shown, though they are included in broader school counts. 

### General Trends
In general, women are underrepresented compared to men – campuswide, 61% of the UCLA faculty were male in the 2018-2019 school year. Men are most highly represented in the Henry Samueli School of Engineering and Applied Science, the Anderson School of Management and in the physical sciences. Women are most highly represented in the School of Nursing, the Graduate School of Education and Information Studies and the  Fielding School of Public Health.

### What has UCLA done in the past 10 years?

Efforts to improve diversity within the faculty have largely been spearheaded by the Office of Equity, Diversity and Inclusion.

UCLA founded the Office of EDI in 2015 in response to the [Moreno Report](https://www.ucop.edu/moreno-report/external-review-team-report-10-15-13.pdf) – an internal investigation which found the university’s response to incidents of bias and discrimination “inadequate.”

Since then, the office has attempted to improve UCLA’s response to bias and discrimination, including by publicizing [resources](https://equity.ucla.edu/know/) aimed to encourage sensitivity and releasing [accountability reports](https://equity.ucla.edu/public_accountability/public_accountability_reports/) to publicize statistics of complaints and investigations on campus. 

The Office of EDI also created [BruinX](https://equity.ucla.edu/about-us/our-teams/bruinx/), a campus think tank that aims to apply data analytics toward diversity-related issues.

Chukwuebuka Nweke, a postdoctoral researcher in civil and environmental engineering, said there has been a lot of effort to hire minority faculty – which includes African American, Chicana(o)/Latina(o)/Hispanic, LGBTQ+ and female candidates. 

Nweke added that minorities are put in the same pool when it comes to searching for minority candidates, which reduces the efficacy of these initiatives.

“It's almost like they compete against each other,” he said. “(It) becomes a crabs-in-a-bucket type situation.”

In the end, however, the faculty chooses the best candidate regardless of race, he added. The process brings out the best minority candidates and lets them compete with the otherwise best candidates, he said.

“A lot of complaints before was that, ‘Oh we can't find these people,’” he said. “So now, what a lot of schools do is, ‘OK, now you have to find them.’”


### Unequal Departments

Cultural fields of study often had high proportions of that culture as faculty. The Asian Languages & Cultures Department, for example, had a majority of Asian faculty through the nine years we measured. Similarly, the Chicana/o studies and Spanish and Portuguese departments had high levels of Chicana(o)/Latina(o)/Hispanic faculty.

It’s also worth noting that some departments had no professors of some ethnic groups – the data showed that almost every year, there were at least 20 departments that had no Asian professors, African American professors, Chicana(o)/Latina(o)/Hispanic professors or American Indian professors, while there were rarely more than four departments with no white professors.


<div class="anniegraph">
    <canvas id="proportions_chart"> </canvas>
</div>

<div class="anniegraph" id="dropdown-wrapper">
    <div class="dropdown-child">
    <select class="anniegraph" id="years" name= "years" onchange="YEAR_VAL=this.value; update_chart(YEAR_VAL, ETHNICITY_VAL);"> 
    <option value='2010'>2010</option>
    <option value='2011'>2011</option>
    <option value='2012'>2012</option>
    <option value='2013'>2013</option>
    <option value='2014'>2014</option>
    <option value='2015'>2015</option>
    <option value='2016'>2016</option>
    <option value='2017'>2017</option>
    <option value='2018'>2018</option>
    </select>
    </div>
    <div class="dropdown-child">
    <select class="anniegraph" id = "ethnicity" name = "ethnicity" onchange="ETHNICITY_VAL=this.value; update_chart(YEAR_VAL, ETHNICITY_VAL);">
    <option value='americanIndian'>American Indian</option>
    <option value='asian'>Asian</option>
    <option value='black'>Black</option>
    <option value='latino'>Latino</option>
    <option value='white'>White</option>
    </select>
    </div>
</div>

### Upticks in Faculty Diversity
In the table below, we show the five schools with the largest change in proportion per minority group.

Few schools had a significant (>10%) percent change in American Indian faculty.

The School of Law was within the top five biggest increases in each of the minority faculty present, raising the percentage of Chicana(o)/Latina(o)/Hispanic and African American faculty by approximately 30% and 20%, respectively.


  <label for='gender'>Sort by Gender or Race/Ethnicity</label>
  <select id='tableChoice'>
      <option>Female</option>
      <option>American Indian</option>
      <option>Asian</option>
      <option>Black</option>
      <option>Latino</option>
  </select>

  <div id="table" style='width: 100%;'></div>

UCLA faculty is less diverse than the California population – however, this has changed over the past 10 years. The proportion of white faculty decreased by nearly 10%, whereas the proportion of minority faculty, including Chicana(o)/Latina(o)/Hispanic and African American faculty, increased by nearly 3%.

Interestingly, the proportion of faculty who declined to note their race or ethnicity increased by nearly 400%.

The proportion of female faculty has also increased by around 5%.

<div style='width: 110vh; max-width: 100%; margin-left: auto; margin-right: auto;'>
<h4 style='margin-top: 30px; text-align: center'>Compared to the California Population</h4>
<div id='balls' style='display: flex; flex-direction: row; flex-wrap: wrap; width: 90vh; max-width: 100%; justify-content: space-around; margin-left: auto; margin-right: auto;'>
    <div>
        <h4>California</h4>
        <svg id='california' style='width: 250px; height: 270px;'></svg>
        <div class='comment'>* Source: 2017 American Community Survey</div>
    </div>
    <div>
        <h4>UCLA Faculty</h4>
        <svg id='people' style='width: 250px; height: 270px'></svg>
    </div>
</div>
<div style='padding-bottom: 5px; '>
    <div style='width: 60vh; max-width: 100%; margin-left: auto; margin-right: auto'>
        <input style='width: 59.5vh;' id='changeYear' onchange='updateBalls()'
            type="range" min="2010" max="2018" value="2018" step='1'>
        <div id='yrlist' style='width: 61vh; max-width: 100%; margin-left: auto; margin-right: auto; display: flex; justify-content: space-between'>
            <span>2010</span>
            <span>2011</span>
            <span>2012</span>
            <span>2013</span>
            <span>2014</span>
            <span>2015</span>
            <span>2016</span>
            <span>2017</span>
            <span>2018</span>
        </div>
    </div>
</div>
<div class='comment'>* Each dot represents 1 person out of a 100 person group</div>
</div>


