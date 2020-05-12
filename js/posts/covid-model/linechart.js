const numWeeks = 12;

function loadCSVData(r) {
	return new Promise(resolve => {
		d3.csv("/datasets/covid-model/curve_data.csv").then(function(csv) {
            resolve(csv);
	    });
	});
}

async function initChart() {
    let r0_vals = [1, 2.5, 4, 5.7, 7];
    let csv = await loadCSVData();

    let data = {
        labels: [],
        datasets : []
    }

    for (let i = 0; i < numWeeks - 1; i++) {
        data.labels.push(i);
    }
    data.labels.push("Finals");

    for (let i = 0; i < r0_vals.length; i++) {
        // data.labels.push("R0 =  " + r0_vals[i]);
        let ds = [];
        for (let j = i * numWeeks; j < numWeeks * (i + 1); j++) {
            ds.push(csv[j].total_cases);
        }
        data.datasets.push({
            label: "R0 = " + r0_vals[i],
            data: ds,
            fill: false
        })
    }
    console.log(data);

    let options = {
        title: {
          display: true,
          text: 'Total Projected COVID-19 Cases Over Fall Quarter',
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Week of Fall Quarter',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Total COVID-19 Cases',
              },
            },
          ],
        },
      };
      
      let ctx = document.getElementById('linechart');
      var linechart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
    
}

initChart();

