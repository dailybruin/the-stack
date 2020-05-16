---
title:  "Evaluating the Decade's Racial Trends Among Faculty at UCLA"
teaser: 
authors:
    - bernard_mendez
    - annie_zhang
    - charlotte_huang
    - jeanette_lin
    - jc_rios
key_takeaways:
    - not a lot of brown people
    - ucla is very white (despite the fact that the undergrads are very not-white)
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

Fulton went on to graduate with a degree in Chemistry from Morehouse College and joined UCLA as a lecturer of Chemistry in 2018.

Still, he said his path was difficult — there was nobody for him to look up to.

“I didn't have professors that lived in my neighborhood,” he said. “You don't have a symbol of that person who looks like you represent you.”

Fulton said African American students have told him they feel more comfortable coming to his lectures, coming to his office hours and paying attention in class because they can identify with him.

Fulton said although there is great diversity among undergraduate and graduate students, there is diversity among faculty is very little, adding he thinks institutions should do better seeking out talented individuals from underrepresented backgrounds. Since 2010, there has never been more than two fully employed African American faculty in Fulton’s department.

“Because it is so competitive to get into academia, it allows for institutions to sit back and just allow for applicants to apply,” he said. “Institutions need to be more proactive and attend minority based conferences and go out into these communities to kind of seek out the talents.”

UCLA founded the Office of Equity, Diversity and Inclusion in 2015 in response to the Moreno Report — an internal investigation which found the university’s response to incidents of bias and discrimination as “inadequate.”

The Office of EDI has since implemented measures to improve faculty diversity, including the creation of BruinX, a campus think tank which aims to apply data analytics toward diversity-related issues.

The Stack took a look into faculty hiring patterns based on race over the past 10 years, starting from the 2010-2011 through the 2018-2019 academic year, using data provided by the BruinX office.

<div id='holder'>
    <div id='school_wrap'>
        <h2>School</h2>
        <select class='menu' id='school'>
        <option>--</option>
        </select>
    </div>
    <div id='dept_wrap'>
        <h2>Department</h2>
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
<h4 style='text-align: center;'>2018-2019</h4></div>
<div style='width: 100%; display: flex; flex-direction: row; justify-content: space-around'>
    <div>By Gender</div>
    <div>By Race/Ethnicity</div>
</div>
</aside>

## General Trends
### About the Data

<ul>
<li>The data was collected from BruinX, an analytics-based think tank housed under the Office of Equity, Diversity and Inclusion at UCLA.</li>
<li>The number of faculty per school/department is shown as Full-time equivalent — an employee who works full time year round would equal 1 FTE, while an employee who works full time for half the year would equal 0.5 FTE.</li>
<li>Departments that do not teach undergraduate courses and have less than 5 FTE faculty are not shown, however they are included in broader school counts. </li>
</ul>

In general, women are underrepresented compared to men. Campuswide, 61% of the UCLA faculty are male. Men are most highly represented in the School of Engineering, the School of Management and in the Physical Sciences. Women are most highly represented in the School of Nursing, the Graduate School of Education and Information Studies and the School of Public Health.

## What has UCLA done in the past 10 years?

Efforts to improve diversity within the faculty have largely been spearheaded by UCLA’s Office of Equity, Diversity and Inclusion.

Law Professor Jerry Kang was appointed as the first Vice Chancellor in 2015, tasked to build the new department from scratch. 

Since then, the office has attempted to ___ including by publicizing resources to encourage ___ and releasing accountability reports which includes statistics of complaints and investigations on campus.. 

Nweke Chukwuebuka, a postdoctoral researcher in the Civil and Environmental Engineering said there has been a lot of effort to hire minority faculty — which includes black, latino/a, LGBTQ and female candidates. 

Chukwuebuka added that minorities are put in the same pool when it comes to searching for minority candidates, which reduces the efficacy of these initiatives.

“It's almost like they compete against each other,” he said. “(It) becomes a crabs in a bucket type situation.”

By the end, however, the faculty chooses the best candidate regardless of race, he added. The process brings out the best minority candidates and lets them compete with the otherwise best candidates.

Chukwuebuka added he thinks universities should focus on pipelining students from the high school and undergraduate level toward the graduate and professor level, since the pathway is a funnel between each level. Still, UCLA is on the right track he said, adding he hopes people don’t forget the importance of diversity.

“My biggest fear is that (diversity is) in fact a buzzword, and that people will forget about it in a couple of years,” Chukwuebuka said. “But from what I'm seeing... I don't think that that's the case”

## Unequal Departments

Unsurprisingly, cultural fields of study often had high proportions of that culture as faculty. The Asian American Studies department, for example, had a nearly homogeneously asian faculty through the 9 years we measured. Similarly, the Chicana/o Studies and Spanish and Portuguese departments had high levels of latina/o faculty and the.

It’s also worth noting that some departments had no professors of some ethnic groups — the data showed that almost every year, there were at least 20 departments that had no Asian professors, African American professors, Latino professors or American Indian professors, while there were rarely more than 4 departments with no white professors.

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

<h2>Has UCLA improved diverse hiring?</h2>

Yes, gratefully! UCLA on average has improved diverse hiring and the period from year 2010 to 2018 has seen a big increase in the proportion of minority groups, including Female, American Indian, Asian, Black, and Latino. We calculated each year's proportion of the minority groups in every department and the increase in the proportion from 2010 to 2018. For some departments data are not available for the first few years, for which the increase is calculated from the year when the data is available. Same applies for the departments that do not have data in the recent years. Each minority group has different increase in proportion, with Female and Asian on average bigger increases. This can also be validated from the below tables, where we listed the departments that have the biggest increase in the minority group proportion respectively.


  <label for='gender'>Sort by Gender or Race/Ethnicity</label>
  <select id='tableChoice'>
      <option>Female</option>
      <option>American Indian</option>
      <option>Asian</option>
      <option>Black</option>
      <option>Latino</option>
  </select>

  <div id="table" style='width: 100%;'></div>

The top five departments in Female and Asian groups have higher increase in proportion than others. Both of them have higher than or equal to 100 percentage increase in all top five departments, while some of the departments in the rest of the minority groups: American Indian, Black, and Latino have less than 100 percentage increase. Note that here we only examine the increase in one minority group, but not the general increase in all minority groups. Therefore, for the listed departments in one minority group, such as Asian, may decrease in the proportion of the other minority group.

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


