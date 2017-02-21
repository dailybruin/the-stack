---
title: Research Funding
teaser: The Daily Bruin analyzed research funding data to determine the key sponsors and departments receiving grants.
authors:
  - yiling_liu
  - jeffrey_chan
  - chang_liu
key_takeaways:
  - The federal government funded the majority of UCLA research projects in fiscal year 2015.
  - More funding has gone to research in the math and sciences than to humanities and social sciences in FY 2016-2017
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
UCLA prides itself on being a [great](www.ucla.edu/research) research university, and it’s not difficult to see why. The university received more than $1 billion in research funding last year, and the number of research proposals have also increased each year since FY 2012.

But what exactly are the factors contributing to UCLA’s copious research opportunities?

#### Where the money comes from
The largest sponsor of UCLA research is the federal government. In FY 2015, 60.4% of awarded money came from the federal government.

Federal agency sponsors include National Institutes of Health (NIH), National Science Foundation (NSF), National Aeronautics and Space Administration (NASA), and United States Department of Defense (USDOD). Of these sponsors, NIH gave the most funding to UCLA in FY 2015, granting $392.8 million, or 62.9% of awarded money from the federal government. NIH grants money to research [that aims to](https://grants.nih.gov/grants/grant_basics.htm) improve health and alleviate burdens of illness.

Non-federal funding sources make up the remaining 39.6% of awarded money to UCLA research. The funders include for-profit businesses, non-profit organizations, and state or local government.

<div id='donut-chart-wrapper'>
  <select style="margin: 0 auto; display: flex; width: 300px; height: 3em;" class="ui selection dropdown" id='donutChartDropdown'>
      <option value='0'>ALL</option>
  </select>
</div>

#### But - the money is not always guaranteed
Obtaining a grant for research is not always as simple as receiving a huge sum of money.

For instance, NIH funding is dependant on the [President’s yearly submitted budget](https://officeofbudget.od.nih.gov/) for federal agencies to Congress. How much money NIH is allocated ultimately decides how much they can fund biomedical research at universities.

“If you look at the budget, a lot of the federal funding stems from the political climate – whatever’s happening in Washington right now,” said Kathy Kawamura, assistant director at UCLA Office of Contract and Grant Administration. “We don’t necessarily know but there is enough of a understanding that (funding) is not going to be completely cut (next year).”

#### Types of research that gets funded
The data suggests that more research in the math and sciences gets funded than research in the social sciences and humanities.

<div id='bar-chart-wrapper'>
  <select style="margin: 0 auto; display: flex; width: 300px; height: 3em;" class="ui selection dropdown" id='barChartDropdown'>
    <option value='0'>ALL</option>

  </select>
</div>

As of December 16, the UCLA schools receiving the most total amount of award money during FY 2016-2017 are the David Geffen School of Medicine ($245 million), College of Letters and Science ($65 million), and the Semel Institute ($53 million). The Semel Institute aims to [understand](https://www.semel.ucla.edu/) complex human behavior.

A science lab also received the most money of all UCLA labs in FY 2015. NIH granted $80.3 million towards research conducted by Professor Steven Dubinett, who works at the UCLA Clinical and Translational Science Institute.

Within the College of Letters and Science, Humanities received $342,066, and Social Sciences received $7.17 million. In contrast, Life Sciences received more than $19 million and Physical Sciences received $36 million.

Though more research projects in the math and sciences are funded than in the humanities and social sciences, more faculty submit research proposals in those departments as well. The David Geffen School of Medicine accounted for more than 40% of UCLA research proposals this fiscal year.

#### Notes:
- All UCLA-related data came from or were derived from the UCLA Office of Research Administration Online Resource Center.
- Data is up to date as of December 16, 2016.
