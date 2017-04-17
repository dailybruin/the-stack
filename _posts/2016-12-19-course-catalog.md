---
title: How are departments at UCLA related to each other?
teaser: Explore the relationships between 100 academic subjects as we use natural language processing algorithms to "read" course descriptions.  
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
 
From Plato to Pluto, the hundreds of subjects taught at UCLA cover much of the knowledge scholars accumulated over time, but how can we identify the relations between different fields of study? With the geography of UCLA as a guide, we could put a divider line near Powell Library and get two buckets – the North and South campuses. Yet intuition and [memes](https://www.facebook.com/photo.php?fbid=1386003851449756&set=gm.227389317732629&type=3&permPage=1) cannot provide a consistent blueprint for how to analyze the relations between subjects.

The good news is that the UCLA Registrar provides valuable information that allow us to more precisely determine what each academic department is about. Using [course descriptions](http://www.registrar.ucla.edu/Academics/Course-Descriptions) as well as [departmental objectives](http://catalog.registrar.ucla.edu/ucla-cat2016-224.html), we apply a variant of the *word2vec* algorithm – a machine learning model that can capture the semantic meaning of words – to quantify each department as a list of numbers. These numbers provide a blueprint for analyzing the links and clusters that relate departments with one another.  Technical details are described later in the article. 

## Plotting UCLA departments

We can locate each department on a map and visually summarize this analysis as a scatter plot. A few departments are labeled, but feel free to hover over any point.

  <div class='ui grid centered' id='scatterplot-wrapper'>
      <div class='twelve wide column' id='scatterplot'>
      </div>
  </div>

<br>

Our model actually computes 200 dimensions for each department, but we reduce it down to a 2D chart using a dimensionality-reduction tool called [t-SNE](http://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html). While the reduced plot preserves the clusters that form in the original, high dimensional space, the visual distances between points do not convey much information. The non-visual analyses in the subsequent sections, however, do not suffer from this issue.

<br>

## 5 Most / Least Similar Departments

Pick a subject and see which 5 other subjects are the most and least like it:

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

> Similarity Score: Cosine similarity ranges between -1 to 1. In our case, a score greater than 0.5 indicates significant similarity, whereas a score less than 0 indicates a lack of similarity.

<br>

## Grouping departments

We can group together departments that are similar. It turns out that the algorithmically-generated clusters match our intuition pretty well. In fact, they manage to reproduce the North-South campus divide that UCLA students are intimately familiar with. 

<h1 style='text-align:center;'>North Campus</h1>

**"Perform"** 

Dance; Design / Media Arts; Ethnomusicology; Film and Television; Music; Music History; Theater

**"Speak"**

Art History; Ancient Near East; Comparative Literature; Chinese; Classics; English; English Composition; French; German; Italian; Japanese; Korean; Linguistics; Philosophy; Scandinavian; Spanish

**"Society"**

Art; Anthropology; Asian American Studies; Communication Studies; Chicana and Chicano Studies; Environment; Education; Gender Studies; General Education Clusters; Geography; History; Political Science; Society and Genetics; Sociology

<br>

<h1 style='text-align:center;'>South Campus</h1>

**"Capital"**

Economics; Management

**"Life"** 

Ecology and Evolutionary Biology; Life Sciences; Molecular, Cell, and Developmental Biology; Microbiology, Immunology, and Molecular Genetics; Neuroscience; Psychology; Physiological Science

**"Compute"** 

Computer Science; Electrical Engineering; Mathematics; Program in Computing; Statistics

**"Physics"** 

Astronomy; Atmospheric and Oceanic Sciences; Chemical Engineering; Chemistry and Biochemistry; Civil and Environmental Engineering; Earth, Planetary, and Space Sciences; Mechanical and Aerospace Engineering; Physics

<br>

## Compare any 2 departments

Pick and compare any two subjects. 

(Which two? Your old major and your current major; what you and your significant other study; double majors ...)

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

We want texts that represent the essence of academic subjects. For every department, we use the course descriptions of all the classes offered by that department. Many departments also publish a "Scope and Objectives" statement, which we incorporate as well.

**Course Catalog**

The course catalog reflects the breadth and depth of subjects in the broader academic world, and how they are taught at UCLA. Crucially, keywords of topics that are taught in classes can capture the differences between disciplines. Course descriptions also sometimes refer to pre-requisites in other departments or include classes that are cross-listed in multiple departments. These links provide clues into the linkages between subjects at UCLA. 

However, course descriptions are sparsely worded and usually contain a listing of keywords rather than fully expressive sentences. They can limit the model from fully capturing the semantics.

<figure>
  <img src="/img/posts/department-similarity/math-course-description.png" height="100px" width="630px" />
  <figcaption>A succinctly worded course description</figcaption>
</figure>

**Departmental Objectives**

In contrast to course descriptions, departmental objectives are written in full sentences and paragraphs that better express how each department positions itself, thereby providing contextual information that are missing from the less expressive course descriptions.

<figure>
  <img src="/img/posts/department-similarity/linguistic-objective.png" height="250px" width="400px" />
  <figcaption>The Linguistics departmental objective</figcaption>
</figure>


## Model

**Department <-> Document**

For each department, we create a document that combines the course descriptions of all the classes under that department, and if applicable, its objective statement. Quantifying the relations between departments is then a matter of modeling the relations between these text documents.

**A Language Model**

A landmark achievement in natural language processing is the [word2vec](https://www.tensorflow.org/tutorials/word2vec) model, which infers the meaning of words by looking at where they are used. For example, by observing how "king" and "queen" are often surrounded by similar words (think "castle" or "govern"), the model guesses that they refer the same concept (ie. the head of a monarchy). The model also learns that they differ in gender by observing how "queen" is used with female pronouns while "king" is used with male pronouns. 

To learn semantic meanings, word2vec trains a two-layer neural network to predict which word is used given its surrounding words. However, the predictive task is tangential, and researchers are instead interested in the by-product – how each word contributes to the predictive task (ie. the word vectors). By comparing word vectors, we can then examine the relations between words.

We use a [paragraph vector](https://cs.stanford.edu/~quocle/paragraph_vector.pdf) model that is similar to word2vec in spirit but examines language at the document level. The [gensim](https://radimrehurek.com/gensim/models/doc2vec.html) implementation is used and it returns a 200-dimensional vector for each department's texts.

**Similarity**

We define the similarity between any pair of departments as the cosine of the angle between the corresponding document vectors. Like Pearson correlation, cosine similarity ranges between -1 and 1.

**Clustering**

We also apply the K-means algorithm to form 7 groups that have document vectors which are close together in Euclidean distance. 

