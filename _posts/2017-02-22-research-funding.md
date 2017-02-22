---
title: Breakdown of where UCLA research funding comes from and where it goes
teaser: The Daily Bruin analyzed research funding data to determine the key sponsors and departments receiving grants.
authors:
  - yiling_liu
  - jeffrey_chan
  - natalie_ethell
  - mahir_eusufzai
  - chang_liu
key_takeaways:
  - The federal government funded the majority of UCLA research projects in the fiscal year 2014-2015.
  - Within the College of Letters and Science, research in math and sciences has received almost $62 million more than research in humanities and social sciences so far in fiscal year 2016-2017.
stylesheets:
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css
  - //cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/dropdown.min.css
  - /css/posts/water-polo-2016/util.css
  - /css/posts/research-funding/app.css
scripts:
  - //d3js.org/d3.v4.min.js
  - //d3js.org/d3-transition.v1.min.js
  - /js/lib/util.js
  - /js/posts/research-funding/barchart.js
  - /js/posts/research-funding/donutchart.js
  - /js/posts/research-funding/index.js
---
UCLA prides itself on being a [successful](www.ucla.edu/research) research university, and it’s not difficult to see why. The university received more than $1 billion in research funding last year, and the number of research proposals has also increased each year since fiscal year 2011-2012.

But what exactly are the factors contributing to UCLA’s research opportunities?

#### Where the money comes from
The largest sponsor of UCLA research is the federal government. In fiscal year 2014-2015, 60.4 percent of awarded money came from the federal government.
Federal agency sponsors include the National Institutes of Health, National Science Foundation, NASA and United States Department of Defense. Of these sponsors, the NIH gave the most funding to UCLA in fiscal year 2014-2015, granting $392.8 million, or 62.9 percent of awarded money from the federal government. NIH grants money to [research](https://grants.nih.gov/grants/grant_basics.htm) that aims to improve health and alleviate burdens of illness.

Nonfederal funding sources make up the remaining 39.6 percent of awarded money to UCLA research. The funders include for-profit businesses, non-profit organizations and state or local governments.

<div id='donut-chart-wrapper'>
  <select style="margin: 0 auto; display: flex; width: 300px; height: 3em;" class="ui selection dropdown" id='donutChartDropdown'>
      <option value='0'>2010-2015</option>
  </select>
</div>

#### Funding is not always guaranteed
Obtaining a grant for research is not always as easy as cashing a check.

<h5 style="text-align: center;">Distribution of Awards by Federal Agency Sponsor, FY 2015</h5>
<div id="table">
  <table cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <th>Federal Agency Sponsor</th>
        <th>Amount Awarded</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>NIH</td>
        <td>$392.8 M</td>
        <td>62.9%</td>
      </tr>
      <tr>
        <td>NSF</td>
        <td>$84.0 M</td>
        <td>13.5%</td>
      </tr>
      <tr>
        <td>USDOD</td>
        <td>$45.1 M</td>
        <td>7.2%</td>
      </tr>
      <tr>
        <td>USDOE</td>
        <td>$23.5 M</td>
        <td>3.8%</td>
      </tr>
      <tr>
        <td>DOVA</td>
        <td>$23.4 M</td>
        <td>3.8%</td>
      </tr>
      <tr>
        <td>NASA</td>
        <td>$20.0 M</td>
        <td>3.2%</td>
      </tr>
      <tr>
        <td>DOED</td>
        <td>$4.0 M</td>
        <td>0.6%</td>
      </tr>
      <tr>
        <td>OTHER FED</td>
        <td>$3.3 M</td>
        <td>0.5%</td>
      </tr>
      <tr>
        <td>USDOC</td>
        <td>$1.9 M</td>
        <td>0.3%</td>
      </tr>
      <tr>
        <td>Other DHHS</td>
        <td>$26.4 M</td>
        <td>4.2%</td>
      </tr>

    </tbody>
  </table>
</div>

For instance, NIH funding depends on the [yearly budget](https://officeofbudget.od.nih.gov/) for federal agencies that the president of the U.S. submits to Congress. How much money the federal government allocates to the NIH ultimately decides how much it can fund biomedical research at universities.

“If you look at the budget, a lot of the federal funding stems from the political climate – whatever’s happening in Washington right now,” said Kathy Kawamura, an assistant director at UCLA Office of Contract and Grant Administration. “We don’t necessarily know but there is enough of a understanding that (funding) is not going to be completely cut (next year).”

#### Types of research that gets funded
> For the years 2015-2016, public data was not available to show the detailed breakdown of funding awarded to each department. FY 2017 is still ongoing so we did not have the comprehensive data at the time of this post. 

The data shows that research in math and the sciences gets more funding than research in the social sciences and humanities.

<div id='bar-chart-wrapper'>
  <select style="margin: 0 auto; display: flex; width: 300px; height: 3em;" class="ui selection dropdown" id='barChartDropdown'>
    <option value='0'>ALL</option>
  </select>
</div>

As of Feb. 20, the UCLA schools receiving the most total amount of award money during fiscal year 2016-2017 are the David Geffen School of Medicine, College of Letters and Science and the Semel Institute, which received about $286 million, $82 million and $64 million, respectively.

A science partnership, the UCLA Clinical and Translational Science Institute, also received the most money of all UCLA labs in fiscal year 2014-2015. NIH granted more than $80 million as a five-year grant toward the creation of the institute.
Within the College of Letters and Science, the humanities division received $474,343 and the social sciences division received $8.57 million. In contrast, life sciences  received $23 million and physical sciences received $47 million.

The reason research projects in math and the sciences are funded more than those in the humanities and social sciences may be attributed to the fact that more faculty in the math and sciences submit research proposals. The David Geffen School of Medicine accounted for more than 40 percent of UCLA research proposals this fiscal year.

The disparity in research funding could also arise from additional costs associated with conducting science lab work.
According to Noa Pinter-Wollman, an assistant professor in ecology and evolutionary biology, some biomedical researchers cannot conduct research without funding from NIH because of the magnitude of research projects they undertake.

These costs come in the form of paying postdoc and student salaries, maintaining lab facilities, obtaining lab supplies and travel costs to field sites, Pinter-Wollman said.

#### Notes:
- All UCLA-related data was derived from the UCLA Office of Research Administration Online Resource Center.
