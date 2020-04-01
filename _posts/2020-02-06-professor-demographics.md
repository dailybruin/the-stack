---
title:  "How does professor diversity <i>stack</i> up between UCLA departments?"
teaser: 
authors:
    - bernard_mendez
    - jeanette_lin
    - annie_zhang
    - charlotte_huang
    - jc_rios
key_takeaways:
    - not a lot of brown people
    - ucla is very white (despite the fact that the undergrads are very not-white)
featured_image:
    url: /professor-demographics/graph.png
og_image: /professor-demographics/graph.png
stylesheets:
    - /css/posts/professor-demographics/app.css
scripts:
    - //d3js.org/d3.v4.min.js
    - //d3js.org/d3-transition.v1.min.js
    - //ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js
    - /js/posts/professor-demographics/app.js
    - /js/posts/professor-demographics/data_vars/American_Indian.js
    - /js/posts/professor-demographics/data_vars/Asian.js
    - /js/posts/professor-demographics/data_vars/Black.js
    - /js/posts/professor-demographics/data_vars/Latino.js
    - /js/posts/professor-demographics/data_vars/Two_Plus.js
    - /js/posts/professor-demographics/data_vars/Unknown.js
    - /js/posts/professor-demographics/data_vars/White.js
    - /js/posts/professor-demographics/chart.js
---

<h2>About the Data</h2>
Here are some bullet points to consider including:
<ul>
<li>Only considered departments that taught students (undergrad or grad): ones that didn’t tended to be extremely small (often had 5 or less total faculty).</li>
<li>Also wanted to focus on the faculty students are most likely to interact with, as the demographics of the faculty can shape perceptions of the field: seeing faculty who look like you is encouraging, while the opposite can be discouraging</li>
</ul>

<h2>Just how diverse are professors at UCLA?</h2>

<p>
Tempus quam pellentesque nec nam aliquam. Eu mi bibendum neque egestas congue. Vel orci porta non pulvinar. Et tortor at risus viverra adipiscing at. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tincidunt tortor aliquam nulla facilisi cras. Fermentum iaculis eu non diam. Convallis convallis tellus id interdum. Placerat duis ultricies lacus sed turpis tincidunt. Gravida dictum fusce ut placerat orci nulla pellentesque. Nullam non nisi est sit amet facilisis magna etiam tempor. Eget lorem dolor sed viverra ipsum nunc. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. At volutpat diam ut venenatis tellus in metus vulputate. Pellentesque elit eget gravida cum sociis natoque penatibus. Bibendum est ultricies integer quis auctor elit sed vulputate. Nulla facilisi nullam vehicula ipsum a arcu cursus.
</p>


<div id='bernardgraph' style='width: 130vh; max-width: 100%;margin-left: auto; margin-right: auto; margin-bottom: 50px;'>

<div>
<label for='gender'>Sort by Gender or Race/Ethnicity</label>
<select id='gender'>
    <option>Race/Ethnicity</option>
    <option>Gender</option>
</select>
</div>

<div>
    <label for='school'>Select by School</label>
    <select id='school'>
    </select>
</div>

<div>
    <label for='departments'>Select by Department</label>
    <select id='departments'>
    </select>
</div>

<div style='width: 130vh; max-width: 100%;'>
    <canvas id='raceChart' style='height: 70vh'></canvas>
</div>

<div class='comment'>Professor quantity is measured in Full Time Equivalence (FTE).</div>

<h4 style='margin-top: 30px; text-align: center'>Compared to the California Population</h4>
    
<div id='balls' style='display: flex; flex-wrap: wrap; width: 100%; justify-content: space-around'>
    <div>
        <h4>California (2017)</h4>
        <svg id='california' style='width: 250px; height: 270px'></svg>
        <div class='comment'>* Source: 2017 American Community Survey</div>
    </div>
    <div>
        <h4>Department</h4>
        <svg id='people' style='width: 250; height: 270px'></svg>
    </div>
</div>


<div style='width: 100%; padding-bottom: 5px; '>
    <div style='width: 60vh; max-width: 100%; margin-left: auto; margin-right: auto'>
        <input style='width: 59.5vh;' id='changeYear'
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

<h2>Which departments are the most and least diverse?</h2>
<div class='comment'>contemplating changing this heading to be more specific but idk what to change it to</div>

<p>
In this chart you can select a year and ethnic group and see the five departments with the highest proportion of faculty belonging to that ethnic group. 
</p>

<p>
Departments whose area of focus was a particular ethnic group--like the Asian American Studies department--consistently had high proportions of faculty who also belonged to that ethnic group. For instance, African American Studies had the highest proportion of African American professors every year except one, while Chicana/o Studies and Spanish and Portuguese were always in the top five for Latino professors. 
</p>

<p>
For some ethnic groups, the departments that had the greatest proportion of their faculty belonging to that group were almost identical from year to year: across all 9 years, only 10 different departments are in the top 5 for Asian professors, while only 13 are in the top 5 for African American professors. On the other hand, 19 are in the top 5 for white professors.
</p>

<p>
It’s also worth exploring the departments that have no professors of certain ethnic groups--the data showed that while it was not uncommon that every year there were at least 20 departments that featured no Asian professors, no African American professors, no Latino professors, or no American Indian professors, rarely was there more than 4 departments that featured no white professors. 
</p>

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

<p>
Imperdiet dui accumsan sit amet nulla facilisi morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Semper risus in hendrerit gravida. Sed enim ut sem viverra aliquet eget. Pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque dignissim enim sit amet venenatis urna. Id diam vel quam elementum pulvinar etiam non quam. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Tristique senectus et netus et. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.
</p>

<h2>How does UCLA stack up with other UC schools?</h2>

<p>
Ac turpis egestas maecenas pharetra convallis. Fringilla ut morbi tincidunt augue interdum velit. Placerat in egestas erat imperdiet sed. Iaculis eu non diam phasellus. Quisque non tellus orci ac auctor augue mauris. Morbi tristique senectus et netus. Tincidunt id aliquet risus feugiat in ante. Eu consequat ac felis donec et odio pellentesque diam volutpat. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Dui nunc mattis enim ut tellus. Donec massa sapien faucibus et molestie ac. At risus viverra adipiscing at in tellus integer. Nibh mauris cursus mattis molestie a iaculis. Orci phasellus egestas tellus rutrum tellus.
</p>

<h1 style='color: grey; text-align: center; width: 100%; font-size: 900%; user-select: none'>[  JC viz  ]</h1>

<p>
Imperdiet dui accumsan sit amet nulla facilisi morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Semper risus in hendrerit gravida. Sed enim ut sem viverra aliquet eget. Pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque dignissim enim sit amet venenatis urna. Id diam vel quam elementum pulvinar etiam non quam. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Tristique senectus et netus et. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.
</p>


<h2>Has UCLA improved diverse hiring?</h2>

<p>
Yes, gratefully! UCLA on average has improved diverse hiring and the period from year 2010 to 2018 has seen a big increase in the proportion of minority groups, including Female, American Indian, Asian, Black, and Latino. We calculated each year's proportion of the minority groups in every department and the increase in the proportion from 2010 to 2018. For some departments data are not available for the first few years, for which the increase is calculated from the year when the data is available. Same applies for the departments that do not have data in the recent years. Each minority group has different increase in proportion, with Female and Asian on average bigger increases. This can also be validated from the below tables, where we listed the departments that have the biggest increase in the minority group proportion respectively.
</p>

<div id='bernardgraph' style='width: 130vh; max-width: 100%;margin-left: auto; margin-right: auto; margin-bottom: 50px;'>

  <div>
  <label for='gender'>Sort by Gender or Race/Ethnicity</label>
  <select id='tableChoice'>
      <option>Female</option>
      <option>American Indian</option>
      <option>Asian</option>
      <option>Black</option>
      <option>Latino</option>
  </select>
  </div>
  </div>

  <div id="table"></div>

<p>
The top five departments in Female and Asian groups have higher increase in proportion than others. Both of them have higher than or equal to 100 percentage increase in all top five departments, while some of the departments in the rest of the minority groups: American Indian, Black, and Latino have less than 100 percentage increase. Note that here we only examine the increase in one minority group, but not the general increase in all minority groups. Therefore, for the listed departments in one minority group, such as Asian, may decrease in the proportion of the other minority group.


<div id="table"></div>

<p>
The top five departments in Female and Asian groups have higher increase in proportion than others. Both of them have higher than or equal to 100 percentage increase in all top five departments, while some of the departments in the rest of the minority groups: American Indian, Black, and Latino have less than 100 percentage increase. Note that here we only examine the increase in one minority group, but not the general increase in all minority groups. Therefore, for the listed departments in one minority group, such as Asian, may decrease in the proportion of the other minority group.
</p>

<h2>Does diversity matter?</h2>

<p>
Ac turpis egestas maecenas pharetra convallis. Fringilla ut morbi tincidunt augue interdum velit. Placerat in egestas erat imperdiet sed. Iaculis eu non diam phasellus. Quisque non tellus orci ac auctor augue mauris. Morbi tristique senectus et netus. Tincidunt id aliquet risus feugiat in ante. Eu consequat ac felis donec et odio pellentesque diam volutpat. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Dui nunc mattis enim ut tellus. Donec massa sapien faucibus et molestie ac. At risus viverra adipiscing at in tellus integer. Nibh mauris cursus mattis molestie a iaculis. Orci phasellus egestas tellus rutrum tellus.
</p>

<p>
Imperdiet dui accumsan sit amet nulla facilisi morbi. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Semper risus in hendrerit gravida. Sed enim ut sem viverra aliquet eget. Pellentesque dignissim enim sit amet venenatis urna cursus. Pellentesque dignissim enim sit amet venenatis urna. Id diam vel quam elementum pulvinar etiam non quam. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Tristique senectus et netus et. Euismod nisi porta lorem mollis aliquam ut porttitor leo a.
</p>
