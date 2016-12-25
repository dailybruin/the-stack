---
title: How are departments at UCLA related?
teaser: ...
authors:
    - tyson_ni
key_takeaways:
    - ...
    - ...
featured_image:
    url: 
og_image: 
stylesheets:
    - /css/posts/course-catalog/grid.min.css
    - /css/posts/course-catalog/container.min.css
    - /css/posts/course-catalog/table.min.css
    - /css/posts/course-catalog/dropdown.min.css
    - /css/posts/course-catalog/app.css
scripts:
    - //code.jquery.com/jquery-3.1.1.min.js
    - /js/posts/course-catalog/libs/d3.min.js
    - /js/posts/course-catalog/libs/d3-tip.js
    - /js/posts/course-catalog/tables.js
    - /js/posts/course-catalog/scatterplot.js
---
 
From Plato to Pluto, hundreds of subjects taught at UCLA cover much of the knowledge scholars accumulated over time, but if we were to plot every department on a chart, what relations and clusters would we find? 

The geography of UCLA offers a guide. By putting a divider line at near Powell Library, we might get two large buckets  – the north and south campus departments. But what if we want to know whether *geography* is more similar to *geology* or *anthropology*? Or subjects that are most like and unlike *electrical engineering*?

The **course catalog** is a better source of data for answering these questions. After scrapping the class descriptions of every department from UCLA's course catalog, we applied a variant of the *Word2vec* algorithm, which is able to capture the semantic meaning of words, to assign 200 values to the course catalog of each department. Using these numbers, we then quantified the relationships between departments.


## Plotting UCLA departments

<div id='scatterplot-wrapper'>
    <div class='ui grid centered'>
        <div class='twelve wide column' id='scatterplot'>
        </div>
    </div>
</div>

## Similar and dissimilar departments
<label>Pick a subject</label>
<select class="ui search selection dropdown" id="pick-subject">
</select>

<br>

<div class="ui equal width center aligned padded grid" id='similar-tables-wrapper'>
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


## Interpreting results

The algorithm is only as good as the whatever information that's contained in the course catalog. We might decompose those information into three categories, ways in which departments are similar:

**What subjects are and how they are commonly practiced**

Course catalog inevitably reflects how subjects are practiced throughout the academic world. Because physicists use math quite heavily, we might argue that *physics* and *mathematics* are more similar. Yet if we are concerned only with what subjects are, we are better off working with the millions of Wikipedia entries.

**How subjects are taught at UCLA**

Each department might teach only parts of its discipline, and professors might over or under-teach certain topics compared to how the discipline is practiced outside UCLA. Therefore course catalog, much more so than Wikipedia, are key data points for understanding how departments within UCLA are related. In addition, some classes are offered through several departments, and that the algorithm should infer that those departments are similar in some sense.

**How class descriptions are worded**

The catalog of multiple departments might be written under the same guidelines or by the same people. If that's the case, there has to commonality between these departments. But this category poses a problem for our approach. When class descriptions are worded sparsely without being complemented by context, they don't offer enough data to allow semantics to be captured. While some classes are explained through information-rich sentences, others are described merely by a list of topics, thereby preventing the algorithm from learning how some concepts relate to others.

## Isn't this obvious?

## Data and model


