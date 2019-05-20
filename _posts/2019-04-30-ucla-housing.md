---
title: Bruins' Apartment Analyzed
teaser: Find out how apartment rent prices have changed over the year, where are bruins living, and talks of affordable housing.
authors:
  - lik_teng_ung
featured_image:
  # url: 2018db-recruitment/featured_image.png
# og_image: 2018db-recruitment/featured_image.png
stylesheets:
  # - /css/posts/2018db-recruitment/app.css
scripts:
  - //cdn.plot.ly/plotly-latest.min.js
  # - /js/posts/ucla-housing/westwood-apt-bubble-map.js
  - /js/posts/ucla-housing/listing-over-year.js
  - /js/posts/ucla-housing/apt-price-over-year.js
  - /js/posts/ucla-housing/individual-apt.js
  - /js/posts/ucla-housing/top-10-popular-street.js
  # - /js/posts/ucla-housing/bdr-price-per-street
---

It’s no secret to UCLA students that Westwood is one of the most expensive areas for renters in the nation. In addition to paying for tuition, UCLA students also have to grapple with the high cost of rent due to the lacking of affordable housing in the area.

According to a <a href="https://www.rentcafe.com/blog/apartment-search-2/expensive-zip-code-2018/">study</a> conducted by RENTCafe, the average apartment renting for Westwood neighborhood’s 90024 Zip Code is at $4,883, which is third in the nation and first in the state of California. Meanwhile, <a href="https://www.rentcafe.com/blog/rental-market/apartment-rent-report/rentcafe-apartment-market-report-july-2018/">the U.S. average rent is only at $1,409 in July 2018. </a>

In order to explore apartment renting pattern among UCLA students, we obtained apartment listings data from a public Facebook Group, <a href="https://www.facebook.com/groups/415336998925847/">“UCLA Housing, Rooms, Apartments, Sublets”</a>. The data includes 7696 listings from February 2014 to March 2019.

<h2>Apartment Renting Price Over Year</h2>
<div id="apt-price-over-year" align="center"></div>

To determine the average renting price over year, we aggregate the listings based on shared bedroom and single bedroom. A shared bedroom is shared between two or three people (double or triple) and a single bedroom is either a studio unit or a room within a multiple bedrooms apartment. 

The average price for a shared bedroom increased by 16.8%, from an average of $623.26 in 2014 to $727.99 in 2019. The average price for a single bedroom stayed relatively stable throughout 2014-2019. 

<h2>Where do students live</h2>
<div id="top-10-popular-street" align="center"></div>

The top 10 popular street for apartment renting are Kelton Avenue (920 listings), Midvale Avenue (601 listings), Veteran Avenue (528 listings), Gayley Avenue (449 listings), Wilshire Boulevard (439 listings), and among others. It’s unsurprising since UCLA students prefer to live closer to UCLA campus.

<div>
    <a href="https://plot.ly/~unglikteng/50/?share_key=HPEqksdNovQoeMd281GCUV" target="_blank" title="plot from API (7)" style="display: block; text-align: center;"><img src="https://plot.ly/~unglikteng/50.png?share_key=HPEqksdNovQoeMd281GCUV" alt="plot from API (7)" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="unglikteng:50" sharekey-plotly="HPEqksdNovQoeMd281GCUV" src="https://plot.ly/embed.js" async></script>
</div>

We created to rank a list of 32 streets by their average renting price. The renting price for apartments in these popular streets are fairly reasonable (they aren’t among the most expensive). For comparison; Midvale Avenue (#7), Gayley Avenue (#25), Kelton Avenue (#26), Wilshire Boulevard (#27), Veteran Avenue (#28)

<div id="individual-apt" align="center"></div>

The apartment listings are concentrated in the North Westwood Neighborhood area. Some of the most popular apartment unit includes 512 Veteran Avenue, 515 Kelton Avenue, 
11090 Ophir Drive, and among others. 

<h2>Apartment Seeking Trend</h2>
<div id="listing-over-year" align="center"></div>

The apartment seeking trend peaks before the summer in May and June. This is intuitive since most students will be pursuing other activities such as internship and studying abroad over the summer and most would prefer to sign a lease before summer.

Notably, students are fairly active in apartment search throughout the year. This is likely because 46% of the listings are for subletting or subleasing. UCLA students who pursued extracurricular involvement such as internships and research outside of Los Angeles would want to sublet their apartments during the academic year.


