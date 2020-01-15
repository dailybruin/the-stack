---
title: Class Enrollment Speeds
teaser: learn how quickly your classes fill up
authors:
  - andrew_kan
  - keith_atienza
  # - sydney_kovach
key_takeaways:
  - classes fill up
featured_image:
  url: class-fill-ups/placeholder.png
og_image: class-fill-ups/placeholder.png
stylesheets:
  - https://unpkg.com/react-vis/dist/style.css
  - https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
scripts:
  - /js/posts/class-fill-ups/graphs/src/ChartMD.jsx
  - https://unpkg.com/react@16/umd/react.development.js
  - https://unpkg.com/react-dom@16/umd/react-dom.development.js
  - https://unpkg.com/babel-standalone@6/babel.min.js
  - https://unpkg.com/react-vis/dist/dist.min.js
  - https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js
---

#### YO what up

<p class="text">you should be seeing this text</p>

color code the lines and text on the info bar

use a card or something to remove classes instead of a dropdown

have search bar for choosing class

<div id="chartMD"></div>

#### Data Collection

the reason we sometimes have spikes in total students enrolled in a class is bc the web site refreshes its data while the scraper is scraping and so the scraper scrapes that class twice (once from before it updated and once after)

#### Which classes fill up the fastest?

#### Conclusion

<link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css">
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
<script src="https://unpkg.com/react-vis/dist/dist.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

<script type="text/babel" src="/js/posts/class-fill-ups/graphs/src/ChartMD.jsx"></script>
