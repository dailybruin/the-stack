//TODO: Method to show 2 at a time

// chart default display
let radarChart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Openness", "Agreeableness", "Conscientiousness", "Introversion/Extraversion", "Emotional Range"],
      datasets: [
      {
        label: "Amy Klobuchar",
        fill: true,
        backgroundColor: color_code('amy-klobuchar', 0.2),
        borderColor: color_code('amy-klobuchar', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('amy-klobuchar', 1),
        data: trait_data('amy-klobuchar').toFixed(2)
      }, {
        label: "Bernie Sanders",
        fill: true,
        backgroundColor: color_code('bernie-sanders', 0.2),
        borderColor: color_code('bernie-sanders', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('bernie-sanders', 1),
        pointBorderColor: "#fff",
        data: trait_data('bernie-sanders').toFixed(2)
      }, {
        label: "Donald Trump",
        fill: true,
        backgroundColor: color_code('donald-trump', 0.2),
        borderColor: color_code('donald-trump', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('donald-trump', 1),
        pointBorderColor: "#fff",
        data: trait_data('donald-trump').toFixed(2)
      }, {
        label: "Elizabeth Warren",
        fill: true,
        backgroundColor: color_code('elizabeth-warren', 0.2),
        borderColor: color_code('elizabeth-warren', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('elizabeth-warren', 1),
        pointBorderColor: "#fff",
        data: trait_data('elizabeth-warren').toFixed(2)
      }, {
        label: "Joe Biden",
        fill: true,
        backgroundColor: color_code('joe-biden', 0.2),
        borderColor: color_code('joe-biden', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('joe-biden', 1),
        pointBorderColor: "#fff",
        data: trait_data('joe-biden').toFixed(2)
      }, {
        label: "Pete Buttigieg",
        fill: true,
        backgroundColor: color_code('pete-buttigieg', 0.2),
        borderColor: color_code('pete-buttigieg', 1),
        pointBorderColor: "#fff",
        pointBackgroundColor: color_code('pete-buttigieg', 1),
        pointBorderColor: "#fff",
        data: trait_data('pete-buttigieg').toFixed(2)
      },
      ]
    },
    options: {
      title: {
      display: true,
      text: 'Personality Traits of Primary Candidates'
      }
    }
  });

  Chart.defaults.global.defaultFontFamily = 'Roboto';
  Chart.defaults.global.defaultFontSize = 15;
  Chart.defaults.global.defaultFontColor = '#777';
  radarChart.canvas.parentNode.style.width = '800px'; 

// update dataset to show all candidates
function show_all() { 
    radarChart.data.datasets = [
        {
          label: "Amy Klobuchar",
          fill: true,
          backgroundColor: color_code('amy-klobuchar', 0.2),
          borderColor: color_code('amy-klobuchar', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('amy-klobuchar', 1),
          data: trait_data('amy-klobuchar').toFixed(2)
        }, {
          label: "Bernie Sanders",
          fill: true,
          backgroundColor: color_code('bernie-sanders', 0.2),
          borderColor: color_code('bernie-sanders', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('bernie-sanders', 1),
          pointBorderColor: "#fff",
          data: trait_data('bernie-sanders').toFixed(2)
        }, {
          label: "Donald Trump",
          fill: true,
          backgroundColor: color_code('donald-trump', 0.2),
          borderColor: color_code('donald-trump', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('donald-trump', 1),
          pointBorderColor: "#fff",
          data: trait_data('donald-trump').toFixed(2)
        }, {
          label: "Elizabeth Warren",
          fill: true,
          backgroundColor: color_code('elizabeth-warren', 0.2),
          borderColor: color_code('elizabeth-warren', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('elizabeth-warren', 1),
          pointBorderColor: "#fff",
          data: trait_data('elizabeth-warren').toFixed(2)
        }, {
          label: "Joe Biden",
          fill: true,
          backgroundColor: color_code('joe-biden', 0.2),
          borderColor: color_code('joe-biden', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('joe-biden', 1),
          pointBorderColor: "#fff",
          data: trait_data('joe-biden').toFixed(2)
        }, {
          label: "Pete Buttigieg",
          fill: true,
          backgroundColor: color_code('pete-buttigieg', 0.2),
          borderColor: color_code('pete-buttigieg', 1),
          pointBorderColor: "#fff",
          pointBackgroundColor: color_code('pete-buttigieg', 1),
          pointBorderColor: "#fff",
          data: trait_data('pete-buttigieg').toFixed(2)
        },
        ];

    radarChart.update();
}

//TODO: Create a system of candidate IDs - AK, BS, DT, etc.

// shows only single candidate
function radar_func(candidate_name, candidate_id) {
    radarChart.data.datasets = [
        {
            label: candidate_name,
            fill: true,
            backgroundColor: color_code(candidate_id, 0.5),
            borderColor: color_code(candidate_id, 1),
            pointBorderColor: "#fff",
            pointBackgroundColor: color_code(candidate_id, 1),
            data: trait_data(candidate_id)
        }];
    radarChart.update();
}