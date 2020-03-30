---
title:  Visualizing divisions in public higher education executive pay
teaser: Demographics of university administrators compared to how much they make.
authors:
    - neil_bedi
key_takeaways:
    - Significantly more men than women are in university administrator roles.
    - Pay among male and female executives is similar.
    - Investigate the data yourself with interactive “data magnets”.
featured_image:
    url: higher-education-executive-pay/visualization.svg
og_image: higher-education-executive-pay/visualization.png
stylesheets:
    - /css/posts/higher-education-executive-pay/app.css
scripts:
    - //ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
    - //ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
    - /js/lib/d3.tooltip.js
    - /js/posts/higher-education-executive-pay/app.js
---

The University of California’s recent consideration of tuition hikes had many questioning whether students should be bearing the brunt of the University’s costs. Some have pointed to bloated executive pay as a more reasonable place to cut funds rather than increasing fees.

But how much do the UC’s executives actually make compared to other public institutions?

We took a look at the numbers for the 2013 fiscal year and created an interactive look at public higher education executive pay across the country using [data magnets](https://github.com/nbedi/magnets).

Hover over each data point (purple circles) to see the name, university and photo of one university executive. Magnets (orange circles) contain conditions rather than data. Magnets will attract points that satisfy their conditions. For example, a magnet that contains the condition “sex equals female” will attract all data points that represent female executives.

It’s easy to note that there are fewer women than men in executive positions. There are only 40 women compared to 215 men.

The pay distributions between the two sexes are similar. The majority of executives from both sexes earn between $350,000 and $520,000.

To visualize complex divisions in data, create multiple magnets. Points that are attracted to multiple magnets will gravitate to an area between those magnets.

We’ll start you off with magnets for pay and sex. Notice that the points below all split and gravitate toward their respective pay ranges. Those groups then split slightly by sex, women grouping above the men.

<div id="visualization">
    <div ng-app="magnet">
        <div ng-controller="MagnetController as magnet">
            <magnet data="magnet.data" initialmagnets="true" allowcreate="true" />
        </div>
    </div>
</div>

Feel free to delete the initial magnets and make your own to see how university executives break down by a variety of other factors including sex, pay and years in office. Delete individual magnets by right clicking them.

Note that some executives started or ended their position in the middle of the 2013 fiscal year. Their base pay will reflect the salary earned in that partial year and an asterix will appear next to their names.

---

## About the data

Our data mostly came from the Chronicle of Higher Education and its [post on executive compensation in public universities](https://chronicle.com/article/Executive-Compensation-at/146519/#id=table). Our only addition was including each executive’s sex.

[Here’s a Google spreadsheet](https://docs.google.com/spreadsheets/d/1R2JynUyYIyrl2EBEvBJpUZhc07obiABgWQHWjsgbtD8/edit?usp=sharing) with the data we’re using.

At the bottom of the Chronicle’s post is an in-depth explanation of how they got their data and how the 255 universities were chosen. Below is an excerpt from that explanation:

> These data show the total compensation received in the 2013 fiscal year by 255 chief executives at 227 public universities and systems in the United States.
>
> Our analysis included all public doctoral universities in the United States and all state college and university systems or governing boards with at least three campuses and 50,000 total students in the 2011-12 academic year.
>
> Institutions that did not respond:
>
> - City Colleges of Chicago
> - Colorado School of Mines
> - Colorado State University system
> - Louisiana Community and Technical College system
> - Massachusetts Community Colleges
> - Morgan State University
> - Oklahoma State Regents for Higher Education
> - San Mateo County Community College District
> - South Carolina State University
> - South Carolina Technical College system
> - Tennessee State University
> - University of Idaho
