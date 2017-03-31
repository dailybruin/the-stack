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

With the geography of UCLA as a guide, we could put a divider line near Powell Library and get two buckets – the North and South campuses. But what if we want to know whether Art History is closer to History or Classics? Or which subjects are most like and unlike Economics? Intuition can only guide us so far because we are likely familiar with only a small subset of all the world's academic subjects.

Public sources of data on the UCLA Registrar website contain useful information on what each department is about. Using [course descriptions](http://www.registrar.ucla.edu/Academics/Course-Descriptions) as well as [departmental objectives](http://catalog.registrar.ucla.edu/ucla-cat2016-224.html), we apply a variant of the *word2vec* algorithm – a machine learning model that can capture the semantic meaning of words – and quantify each department as a list of numbers. Details are explained later in the post. 

## Plotting UCLA departments

Essentially, we are locating each department on a "map". And so we can visually summarize this analysis as a 2D scatterplot. A few departments are labeled, but feel free to hover over any point.

  <div class='ui grid centered' id='scatterplot-wrapper'>
      <div class='twelve wide column' id='scatterplot'>
      </div>
  </div>

Note that our model actually provides 200 dimensions for each department and while the dimensionality-reduction technique used to make the plot guarantees that the most closely related departments are visually clustered together, the visual distances between points do not contain much information. The non-visual analysis in the following sections, however, does not suffer from this loss of information.
<br>

## 5 Most / Least Similar Departments

Pick a subject and see which 5 other subjects are most and least similar:

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

Pick any two subjects. (Which two? Your old major and your current major; what you and your significant study; double majors ...)

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

## Data

We are interested in texts that can capture the essence of academic subjects. For every department, we use the course descriptions of all the classes offered by that department. Many departments also publish a "Scope and Objectives" statement, which we incorporate as well.

**Course Catalog**

The course catalog reflects the breadth and depth of subjects in the academic world, and how they are taught at UCLA. Thus, keywords of topics and concepts play highlight the differences between disciplines. In addition, course descriptions sometimes refer to pre-requisites in other departments or include classes that are cross-listed in multiple departments. These links provide clues into the cross-pollination between deparments at UCLA. 

However, course descriptions are sparsely worded and simply contain a list of topics rather than fully expressive sentences. They can prevent the algorithm when from fully capturing the semantics.

<figure>
  <img src="/img/posts/department-similarity/math-course-description.png" height="100px" width="630px" />
  <figcaption>A succinctly worded course description</figcaption>
</figure>

**Departmental Objectives**

In contrast to course descriptions, departmental objectives are written in full sentences and paragraphs that better express how each department positions itself, thereby providing information that can be superior to the less expressive course descriptions.

<figure>
  <img src="/img/posts/department-similarity/linguistic-objective.png" height="250px" width="400px" />
  <figcaption>The Linguistic departmental objective</figcaption>
</figure>


## Model

**Texts**

For each department, we create a document that combines the course descriptions of all the classes under that department, and if applicable, its objective statement. Quantifying the relations between departments is then a matter of modeling the relations between those documents.

**A Language Model**

A landmark in natural language processing is the [word2vec](https://www.tensorflow.org/tutorials/word2vec) model, which  infers the meaning of words by looking at where they are used. For instance, because the terms "king" and "queen" are often surrounded by a similar set of words (think "castle" or "govern"), the model might guess that they refer the same concept (ie. the head of a monarchy). The model also learns that they differ in gender by observing that "queen" is usually used together with female pronouns while "king" is used with male pronouns. 

To learn semantic meanings, word2vec tries to predict a word given its surrounding words by training a two-layer neural network. However, the predictive task is tangential to the model and we are interested only in the side product – how much each word contributes to the predictive task (ie. the word vectors). By comparing word vectors, we can then examine the relations between words.

We use a [paragraph vector](https://cs.stanford.edu/~quocle/paragraph_vector.pdf) model that is similar in spirit to word2vec but examines language at the document level. The [gensim](https://radimrehurek.com/gensim/models/doc2vec.html) implementation of the paragraph vector is used and returns a 200-dimensional vector for each department.

**Clustering**

The document vectors allow for comparisons between departments, but we also want to group departments based on how close together they are to one another. The K-means clustering algorithm is used to return 7 groups, each of which contain departments that are closest to each other in terms of Euclidean distance.

