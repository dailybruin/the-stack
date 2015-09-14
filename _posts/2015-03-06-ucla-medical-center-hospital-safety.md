---
title:  Shaping up Ronald Reagan UCLA Medical Center’s hospital safety score
teaser: See where UCLA’s Westwood hospital does well and where it performs poorly
authors:
    - neil_bedi
key_takeaways:
    - Ronald Reagan is *significantly* worse than other UC hospitals at leaving dangerous objects in patients' bodies.
    - Its patients also have more accidental cuts and tears and collapsed lungs after discharge than patients at UCLA's Medical Center in Santa Monica or UC Davis' medical center.
featured_image:
    url: ucla-medical-center-hospital-safety/visualization.svg
og_image: ucla-medical-center-hospital-safety/visualization.png
stylesheets:
    - /css/posts/ucla-medical-center-hospital-safety/radar-chart.css
scripts:
    - //ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
    - //cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js
    - /js/posts/ucla-medical-center-hospital-safety/radar-chart.js
    - /js/posts/ucla-medical-center-hospital-safety/app.js
---
The Daily Bruin [published a story today](http://dailybruin.com/2015/03/09/patient-safety-scores-low-at-ronald-reagan-ucla-medical-center/) on Ronald Reagan Medical Center’s poor history of hospital safety scores published by the non-profit [Leapfrog Group](http://www.hospitalsafetyscore.org/).

The safety score sums up a total of 28 individual scores to create an overall letter grade. Ronald Reagan received an F in 2012 and a C in 2014.

I decided to make a visualization using complex radar charts to more easily understand the scores behind the hospital’s current C rating.

Radar charts generally have less than ten fields to maintain simplicity and keep the generated shapes from getting out of hand. I took a risk and made charts by parsing the 28 fields with [import.io](https://import.io/) and using a modified version of [alangrafu’s d3 radar charts](https://github.com/alangrafu/radar-chart-d3).

My intention is that, even though at first these shapes may mean very little to you, after you work with them below and compare various shapes to each other, the shapes will mean much more than just a letter grade.

I took the various scores and put each on a scale from worst score to best score. The center of the chart represents the worst score out of 2,500 hospitals surveys and the edge of the chart represents the best score.

Hover over each point in the radar chart below to see the field associated with it and info about scores. Hovering over points also highlights the shape and hospital associated with the point.

Click on a point to see a breakdown of its specific field across several hospitals. Different colored shapes represent different hospitals as described in the legend.

The first simple point to note when you’re looking at these: the more of the circle a shape takes up, the safer the hospital.

<div id="visualization" class="viz">
    <div class="legend">
        <ul>
            <li>
                <div class="blue"></div>
                <p>UCLA Ronald Reagan Medical Center</p>
            </li>
            <li>
                <div class="orange"></div>
                <p>UCLA Medical Center of Santa Monica</p>
            </li>
            <li>
                <div class="green"></div>
                <p>University of California Davis Medical Center</p>
            </li>
        </ul>
    </div>
    <div id="chart-container"></div>
    <div id="field-desc">
        <h2 class="desc-title"></h2>
        <div class="scores"></div>
        <div class="measure-desc"></div>
    </div>
</div>

Ronald Reagan – a [C hospital according to hospitalsafetyscore.org](http://www.hospitalsafetyscore.org/h/university-of-california-ronald-reagan-ucla-medical-center) – has close to the worst score for the dangerous object left in patient’s body field and the accidental cuts and tears field. It has the worst score for the collapsed lung field out of 2,500 hospitals surveyed nationally.

UCLA Medical Center, Santa Monica – an A hospital – does have some scores that are lower than Ronald Reagan but its worst scores barely dip below the halfway point. Interestingly, Davis – also an A hospital – has a few more fields close to center but it seems like the [scoring methodology](http://www.hospitalsafetyscore.org/media/file/HospitalSafetyScore_ScoringMethodology_October2014_Final.pdf) kept them from dropping its grade.

---

## About the data

Most of our data came from the [Hospital Safety Score](http://www.hospitalsafetyscore.org/) provided by the non-profit Leapfrog Group.

Here is a [Google spreadsheet of the data we used](https://docs.google.com/spreadsheets/d/15kRHTQV7t2X7S36AdyYjpSgGeVFRzow8WMUCTfuim7E/edit?usp=sharing).

From the [about page](http://www.hospitalsafetyscore.org/your-hospitals-safety-score/about-the-score) on hospitalsafetyscore.org:

> Hospital Safety Scores are assigned to more than 2,500 hospitals across the nation twice annually. The Hospital Safety Score is becoming the gold standard measure of patient safety, cited recently in MSNBC, The New York Times, and AARP The Magazine.
>
> The Hospital Safety Score uses national performance measures from the Leapfrog Hospital Survey, the Agency for Healthcare Research and Quality (AHRQ), the Centers for Disease Control and Prevention (CDC), the Centers for Medicare and Medicaid Services (CMS), and the American Hospital Association’s Annual Survey and Health Information Technology Supplement.
>
> Taken together, those performance measures produce a single score representing a hospital’s overall performance in keeping patients safe from preventable harm and medical errors. The Hospital Safety Score includes 28 measures, all currently in use by national measurement and reporting programs. The Hospital Safety Score methodology has been peer reviewed and published in the Journal of Patient Safety.
