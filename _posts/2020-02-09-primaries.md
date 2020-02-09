---
title: US Primaries
teaser: US Primaries!!
authors:
    - radhika_ahuja
    - sydney_kovach
    - mattie_sanseverino
    - kelly_chen
key_takeaways:
    - US is a mess right now
featured_image:
    url: walking-to-class/featured_image.png
og_image: walking-to-class/featured_image.png
stylesheets:
    - https://fonts.googleapis.com/css?family=Lato&display=swap
    - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css
scripts:
    - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js

---

<canvas id="bubble-chart" width="800" height="800"></canvas>

<script>
new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Openness",
      datasets: [
        {
          label: ["Andrew Yang"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 15.245,
            r: 15
          }]
        }, {
          label: ["Joe Biden"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 17.526,
            r: 10
          }]
        }, {
          label: ["Amy Klobuchar"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Bernie Sanders"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 25.921,
            r: 15
          }]
        },  {
          label: ["Pete Buttigieg"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 36.994,
            r: 15
          }]
        },  {
          label: ["Tom Steyer"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 46.994,
            r: 15
          }]
        },  {
          label: ["Elizabeth Warren"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 56.994,
            r: 15
          }]
        },  {
          label: ["Donald Trump"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 66.994,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});
</script>