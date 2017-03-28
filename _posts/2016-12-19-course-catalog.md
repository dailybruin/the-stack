---
title: How are departments at UCLA related?
teaser: Explore the relationships between 100 academic subjects as we apply natural language algorithms to "read" from course descriptions.  
authors:
    - tyson_ni
featured_image:
    url: department-similarity/pair-similarity.png
og_image: department-similarity/pair-similarity.png
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
 
From Plato to Pluto, the hundreds of subjects taught at UCLA cover much of the knowledge scholars accumulated over time, but how might we plot every department on a chart so as to find relations between fields of study? 

With the geography of UCLA as a guide, we could put a divider line near Powell Library and get two buckets – the North and South campuses. But what if we want to know whether Art History is closer to History or Classics? Or which subjects are most like and unlike Economics? Intuition can only guide us so far because most of us are familiar with only a small subset of the many subjects of the world.

Public sources of data on the UCLA Registrar website contain useful information on what each department is about. Using [course descriptions](http://www.registrar.ucla.edu/Academics/Course-Descriptions) as well as [departmental objectives](http://catalog.registrar.ucla.edu/ucla-cat2016-224.html), we apply a variant of the *word2vec* algorithm – a machine learning model that was able to capture the semantic meaning of words – and quantify each department as high-dimensional vectors. 

## Plotting UCLA departments

At a high level, we are locating each department on a "map". And so we can visually summarize this analysis as a 2D scatterplot. A few departments are labeled, but feel free to hover over each point.

  <div class='ui grid centered' id='scatterplot-wrapper'>
      <div class='twelve wide column' id='scatterplot'>
      </div>
  </div>

Note that our model actually provides 200 dimensions for each department and while the dimensionality-reduction technique used here guarantees that the most closely related departments are visually clustered together in a 2D plot, the visual distances between points do not contain much information. The non-visual analysis in the following sections, however, does not suffer from this loss of information.
<br>

## 5 Most / Least Similar Departments

Using all 200 dimensions, we can better examine the relationship between departments.

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

<br>

## Compare any two departments

Pick any two subjects. (Which two? Your old major and your current major; what you and your significant other major in; double majors ...)

<div class='ui grid centered'>
  <div class='row'>
    <select class="ui search selection dropdown" id="pick-subject1"></select>
  </div>
  <div class='row'>
    <select class="ui search selection dropdown" id="pick-subject2"></select>
  </div>
</div>

<div class='ui grid centered statistics'>
  <div class='blue statistic'>
    <div id='pair-similarity-score' class='value'></div>
    <div id='pair-similarity-label' class='label'></div>
  </div>
</div>

<br><br>

## Data: course catalog, departmental objectives

We are interested in texts that capture some kind of similarity between academic subjects. For every department, we use the course description of all the classes offered by that department. Many departments also publish a "Scope and Objectives" on the Registrar's website, which we incorporate as well.

**Course Catalog**

The course catalog reflects what subjects are about in the academic world, and how they are taught at UCLA. Thus, keywords of topics and concepts play a key role in highlighting the differences between disciplines. In addition, course descriptions that refer to classes in other departments or are of classes are cross-listed in multiple departments provide insight on the cross-pollination between departments.

However, some course descriptions are sparsely worded and simply contain a list of topics rather than fully expressive sentences. They can be poor linguistic environments for the algorithm when it tries to capture semantic meanings.

<figure>
  <img src="/img/posts/department-similarity/math-course-description.png" height="100px" width="630px" />
  <figcaption>The succinctly worded course description of a Mathemetics class</figcaption>
</figure>

**Departmental Objectives**

In contrast to course descriptions, departmental objectives are written in full sentences and paragraphs that better express how each department positions itself, providing valuable signals that can be superior to the less expressive course descriptions.

<figure>
  <img src="/img/posts/department-similarity/linguistic-objective.png" height="250px" width="400px" />
  <figcaption>The Linguistic departmental objective</figcaption>
</figure>


## Model

...

