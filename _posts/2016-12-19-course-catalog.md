---
title: How are departments at UCLA related?
teaser: Course catalog allows us to learn subjects that are similar or dissimilar to your major, and answers questions like "what's electrical engineering without the mathematics".
authors:
    - tyson_ni
featured_image:
    url: 
og_image: 
stylesheets:
    - /css/posts/course-catalog/grid.min.css
    - /css/posts/course-catalog/container.min.css
    - /css/posts/course-catalog/table.min.css
    - /css/posts/course-catalog/dropdown.min.css
    - /css/posts/course-catalog/statistic.min.css
    - /css/posts/course-catalog/app.css
scripts:
    - /js/lib/jquery-3.1.1.min.js
    - /js/posts/course-catalog/libs/d3.min.js
    - /js/posts/course-catalog/libs/d3-tip.js
    - /js/posts/course-catalog/tables.js
    - /js/posts/course-catalog/scatterplot.js
    - /js/posts/course-catalog/pair-similarity.js
---
 
From Plato to Pluto, the hundreds of subjects taught at UCLA cover much of the knowledge scholars accumulated over time, but if we were to plot every department on a chart, what relations or clusters would we find? 

Using the geography of UCLA as a guide. we might put a divider line near Powell Library and get two buckets – the north and south campus departments. But what if we want to know whether *art history* is closer to *history* or *classics*? Or subjects that are most like and unlike *economics*?

The [**course catalog**](...) is a better source of data for answering these questions. Using course descriptions, we applied a variant of the *Word2vec* algorithm, which is able to capture the semantic meaning of words, and assigned 200 values to each department. These high dimensional vectors allowed us to quantify how departments are related.

## Plotting UCLA departments

Seeing 200 dimensions is not possible but simplifying them down to a 2D chart allows us to visualize distinct clusters. I've labeled a few departments to make obvious a few interesting clusters the model was able to capture, but feel free to hover over each point.

  <div class='ui grid centered' id='scatterplot-wrapper'>
      <div class='twelve wide column' id='scatterplot'>
      </div>
  </div>

While the dimensionality-reduction technique used here preserves clusters, it does not try to preserve distances. For instance, that *mathematics* is placed closer to *spanish* than *electrical engineering* on the chart does not neccearily suggest any insight, but the fact that they appear in *separate* clusters does matter.

## Similar and dissimilar departments

Using all the dimensions, we could better find relationships between departments.

Pick a subject and see which 5 subjects are most similar and least similar to it:

<select class="ui search selection dropdown" id="pick-subject">
</select>

<br>

<div class="ui equal width center aligned grid" id='similar-tables-wrapper'>
  <div class='row'>
    <div class='column'>
      <h1>5 Most Similar</h1>
      <table class='ui celled table' id='most-similar-table'>
      </table>
    </div>
    <div class='column'>
      <h1>5 Least Similar</h1>
      <table class='ui celled table' id='least-similar-table'>
      </table>
    </div>
  </div>
</div>

## Find the similarity between any two subjects

<div class='ui equal width center aligned grid'>
  <div class='row'>
    <div class='column'>
      <select class="ui search selection dropdown" id="pick-subject1">
      </select>
    </div>
    <div class='column'>
      <select class="ui search selection dropdown" id="pick-subject2">
      </select>
    </div>
  </div>
</div>

<div id='pair-similarity-text'>
</div>

## Subject 1 + Subject 2 = ?
At its best, *Word2vec* should allow us to learn new insights rather than simply quantify existing intuition. For instance, knowing the relationship between *United States* and *Britney Spears* it could allow us to find the Japanese Britney Spears. 

In our case, adding the vectors of two departments allows us to learn departments that are similar to *both*.

Which subjects are most similar to ...

## Subject 1 - Subject 2 = ?

We might also wonder: "what's *electrical engineering* without the *mathematics*?"

Pick a pair of subjects, and see the answers to questions that could be phrased in that form:

<select class="ui search selection dropdown" id="pick-subtract-pair">
</select>

<div class='ui centered grid'>
  <div class='column'>
    <h1>5 Closest Subjects</h1>
    <table class='ui celled table' id='subtract-table'>
    </table>
  </div>
</div>

The "subtraction" analysis, however, is more difficult to understand or validate than "addition", perhaps due to our lack of intuition on how to decompose a subject into other subjects.


## More on course catalog

The algorithm is only as good as the whatever information that's contained in course descriptions. We might break those information down into three categories:

**What subjects are, and how they are commonly practiced**

Course catalog inevitably reflects how subjects are practiced throughout the academic world. Yet if we are concerned only with what subjects are, we are better off working with the millions of Wikipedia entries.

**How subjects are taught at UCLA**

Each department might teach only parts of its discipline, and professors might over or under-teach certain topics compared to how the discipline is practiced outside UCLA. In addition, some classes are offered through several departments, and our model would infer that those departments are similar.

**How class descriptions are worded**

If the catalog of several departments were written in the same style, using similar words and phrases, there had to some commonality between those departments. This category allows us to learn *what departments sound like*.

## Data and model

After scrapping the course catalog, I merged the course descriptions of every department into a corresponding document.  ...


