---
title:  From to $22 to $35,000, how USAC allocates funds to student groups
teaser: Some student groups get thousands while others receive pocket change. Find out how much USAC gave your student group this year.
authors:
    - katie_shepherd
key_takeaways:
    - The money students pay to USAC goes toward officer stipends, office budgets, funds, administrative costs and student groups.
    - Hooligan Theatre Company was allocated the most this year, $35,560.19. Most student groups receive less than a tenth of this.
    - Search for your student group below to see how it compares to other groups.
featured_image:
    url: /usac-endorsements-vs-election-results/visualization.svg
og_image: /usac-endorsements-vs-election-results/visualization.png
stylesheets:
    - /css/posts/student-group-allocations/app.css
scripts:
    - //cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3-tip/0.6.3/d3-tip.min.js
    - /js/posts/student-group-allocations/app.js
---
Every year, students pay more than $4 million to support the undergraduate student government.

That money is meant to support student government programming efforts, advocacy and come back to some students through student group allocations.

But what happens once that money enters the coffers of the Undergraduate Students Association Council can be difficult to track.

The money is divvied up into four main categories: officer stipends, USAC office budgets, major funds and administrative costs.

Officer stipends and administrative costs cover the 14 USAC councilmembers’ paychecks and pay for things like rent, utilities and professional support.

The major funds that draw from student fees include The Green Initiative Fund, contingency, capital contingency and smaller funds that lie under offices like the cultural affairs, academic affairs and student wellness commissions.

But USAC also funnels money into another, somewhat untracked, avenue: officially recognized student groups.

Some of these groups get massive checks totaling up to $35,560.19. Other clubs take home as little as $22.50. The allocations will continue to change slightly until the fiscal year ends in mid-July.

It’s important to keep in mind that these groups can still apply for additional funding through the major funds USAC controls: TGIF and the Student Organization Operational Fund are two of the main sources of student funding.

But the allocations USAC makes to student groups carries huge disparities with some groups getting thousands of dollars in the 2014-2015 academic year and others receiving pocket change.

It’s unclear why these gaps between some groups exist. It could be because some groups simply ask for much more money. It could be because the funding application process is lengthy and confusing.

Student groups have complained in the past because of USAC’s complicated funding applications. Several USAC councilmembers have run on platforms of revising the process and building a centralized funding platform – a goal that has yet to come to fruition.

Whatever the reason, it is clear that some student organizations are pocketing huge sums while others accept tiny allocations.

## Visualizing the allocations

Different classes of allocations orbit a center dot representing all USAC fees, where the money comes from.

The largest allocations are pulled to the outermost orbit, while smaller dollar amounts hover close to the center.

To see how much money was given to any student group, search for the organization’s name and click submit. The selected group will highlight green. Hover over the group to see how much money it received.

*Note: The dropdown will not work on Safari but the visualization has been updated so that searching for any word in a student group’s name will cause corresponding dots to highlight.*

<div id="visualization">
    <div class="filter">
        <input type="text" class="search" id="search_text" list="search" placeholder="Search for student groups"/><br />
        <datalist id="search"><br/>
        </datalist><br/>
        <input class="search_button" type="submit" onclick="search()"/>
    </div>
    <div class="viz"></div>
</div>

---

## About the data

All of the allocations are based on the USAC budget reports updated in mid-May after the 2014-15 councilmembers finished their terms in office.

The allocations are subject to change slightly until the fiscal year ends in mid-July.
