<<<<<<< HEAD
// include <canvas id="bubble-chart" width="800" height="800"></canvas> in .md file
// include script: https://cdn.jsdelivr.net/npm/chart.js@2.8.0
// Written section: The individual routes from residence halls to lecture halls show a general pattern in the relationship between the total elevation change and the total distance. The role a specific residence hall has is in shifting the general pattern in total distance and/or total elevation change. For example, routes starting from De Neve tend to have the shortest total distances and the least total elevation change. Routes from Sproul tend to have greater total distance and elevation change than routes from De Neve, whereas routes from Rieber tend to be comparable in distance to routes from De Neve but have higher total elevation changes. Routes from Hedrick were generally the longest and had the greatest elevation change.

new Chart(document.getElementById("bubble-chart"), {
=======
let start_keys = {
  "hedrick" : "Hedrick", 
  "rieber" : "Rieber",
  "sproul" : "Sproul",
  "deneve" : "De Neve"
}

let end_keys = {
  "powell" : "Powell",
  "anderson" : "Anderson", 
  "public" : "Public Affairs",
  "court" : "Court of Sciences",
  "yrl" : "Young Research Library",
  "target" : "Target"
}


function loadCSVData() {
  return new Promise(resolve => {
    d3.csv("/datasets/walking-to-class/route_stats.csv", function(bubble) {
      bubble.forEach(function(d) {
        d.label = start_keys[d.start] + " to " + end_keys[d.stop] + ", Route " + d.route,
        d.x = +d.distance,
        d.y = +d.elevation_gain,
        d.r = +d.number_stairs / 10 + 5
      });
        resolve(bubble);
      });
      
  });
}

async function getData(){
  let b_data = await loadCSVData();
  let hedrick_data = b_data.slice(0, 12);
  let rieber_data = b_data.slice(12, 24);
  let sproul_data = b_data.slice(24, 36);
  let deneve_data = b_data.slice(36, 48);

  new Chart(document.getElementById("bubble-chart"), {
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
    type: 'bubble',
    data: {
      datasets: [
        {
          label: ["Hedrick"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
<<<<<<< HEAD
          data: [{
            x: 0.791838310607822,
            y: 59.7,
            r: 7
          }, {
            x: 0.81538895824599,
            y: 54.1,
            r: 7
          }, {
            x: 0.672599093096227,
            y: 53.5,
            r: 7
          }, {
            x: 0.856028295909025,
            y: 46.9,
            r: 7
          }, {
            x: 0.960634203442468,
            y: 79.9,
            r: 7
          }, {
            x: 1.11229173719381,
            y: 67,
            r: 7
          }, {
            x: 0.979894540880791,
            y: 69.2,
            r: 7
          }, {
            x: 0.903579968588249,
            y: 60,
            r: 7
          }, {
            x: 0.841319825852457,
            y: 64.6,
            r: 7
          }, {
            x: 1.0247265642082,
            y: 57.2,
            r: 7
          }, {
            x: 1.2226242459184,
            y: 72,
            r: 7
          }, {
            x: 1.29089638205394,
            y: 73.4,
            r: 7
          }]
=======
          data: hedrick_data
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
        }, {
          label: ["Rieber"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
<<<<<<< HEAD
          data: [{
            x: 0.700778591729189,
            y: 57.1,
            r: 7
          }, {
            x: 0.714357328276551,
            y: 52.3,
            r: 7
          }, {
            x: 0.571589902298294,
            y: 50.9,
            r: 7
          }, {
            x: 0.763493465897743,
            y: 45.1,
            r: 7
          }, {
            x: 0.85971482110312,
            y: 77.1,
            r: 7
          }, {
            x: 1.01127779554824,
            y: 65.2,
            r: 7
          }, {
            x: 0.879128984109508,
            y: 67,
            r: 7
          }, {
            x: 0.802532810231971,
            y: 58.2,
            r: 7
          }, {
            x: 0.740310635054525,
            y: 62,
            r: 7
          }, {
            x: 0.932195242201259,
            y: 55.4,
            r: 7
          }, {
            x: 1.11637703772763,
            y: 68.6,
            r: 7
          }, {
            x: 1.18987584483928,
            y: 71.6,
            r: 7
          }]
=======
          data: rieber_data
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
        }, {
          label: ["Sproul"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
<<<<<<< HEAD
          data: [{
            x: 0.6197779733,
            y: 46.1,
            r: 7
          }, {
            x: 0.6916109435,
            y: 40.5,
            r: 7
          }, {
            x: 0.5005387558,
            y: 39.9,
            r: 7
          }, {
            x: 0.7449322191,
            y: 33.5,
            r: 7
          }, {
            x: 0.7885738661,
            y: 66.3,
            r: 7
          }, {
            x: 0.9885314107,
            y: 53.4,
            r: 7
          }, {
            x: 0.8079195755,
            y: 56,
            r: 7
          }, {
            x: 0.7797961231,
            y: 46.4,
            r: 7
          }, {
            x: 0.6692594886,
            y: 51,
            r: 7
          }, {
            x: 0.9136339954,
            y: 43.8,
            r: 7
          }, {
            x: 1.095156755,
            y: 56.8,
            r: 7
          }, {
            x: 1.167129794,
            y: 59.8,
            r: 7
          }]
=======
          data: sproul_data
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
        }, {
          label: ["De Neve"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
<<<<<<< HEAD
          data: [{
            x: 0.7231116289,
            y: 48.9,
            r: 7
          }, {
            x: 0.5110309167,
            y: 20.3,
            r: 7
          }, {
            x: 0.5982551559,
            y: 42.7,
            r: 7
          }, {
            x: 0.551649291,
            y: 13.1,
            r: 7
          }, {
            x: 0.8829286578,
            y: 68.9,
            r: 7
          }, {
            x: 0.8079419013,
            y: 33,
            r: 7
          }, {
            x: 0.9044123114,
            y: 58.8,
            r: 7
          }, {
            x: 0.5992050035,
            y: 26.2,
            r: 7
          }, {
            x: 0.7642445269,
            y: 53.8,
            r: 7
          }, {
            x: 0.7203510673,
            y: 23.4,
            r: 7
          }, {
            x: 0.9026849085,
            y: 36.6,
            r: 7
          }, {
            x: 0.9865383405,
            y: 39.6,
            r: 7
          }]
=======
          data: deneve_data
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
        }
      ]
    },
    options: {
<<<<<<< HEAD
      title: {
        display: true,
        text: 'Comparing Routes from Residence Halls'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Total Elevation Change (ft)"
=======
        maintainAspectRatio: false,
        aspectRatio: 1,
      title: {
        display: true,
        text: 'Distance, Elevation, and Stair Count Across Walking Routes'
      }, 
      scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Total Elevation Gain (ft)"
>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Total Distance (mi)"
          }
        }]
<<<<<<< HEAD
      }
    }
});
=======
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let l = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].label;
            let s = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].number_stairs;
            return l + " | " + s + " stairs";
          }
        }
      } 
    }
  });

}

getData();



>>>>>>> 6c3f2ee3fd74c618b2036adf52bfb7adb7124328
