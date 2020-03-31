ethnicity = ["americanIndian", "asian", "black", "latino", "twoPlus", "unknown", "white"]
years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
color_codes = {
  "americanIndian": ["#006147", "#01825f", "#009e73", "#8fd4c1", "#ffffff"],
  "asian": ["#703507", "#944202", "#d55e00", "#db8e50", "#ffffff"], 
  "black": ["#aba120", "#d6c913", "#f0e442", "#f9f4b6", "#ffffff"], 
  "latino": [],
  "twoPlus": [], 
  "unknown": [],
  "white": [],
}

function getLabels(year, ethnicity) {
  departments = [];

  for (let i = 0; i < 5; i++) {
    departments.push(eval(ethnicity)[year]['deptNames'][i]);
  }
  return departments;
} 

function getProps(year, ethnicity) {
  proportions = [];

  for (let i = 0; i < 5; i++) {
    proportions.push(eval(ethnicity)[year]['proportions'][i]);
  }
  return proportions;
}


let proportionsChart = new Chart(document.getElementById("proportions_chart"), {
    type: 'horizontalBar',
    data: {
      labels: getLabels(years[0], ethnicity[0]),
      datasets: [{
        label: "Department Frequency",
        backgroundColor: color_codes[ethnicity[0]],
        data: getProps(years[0], ethnicity[0])
      }]
                                 
    }, 
    options: {
      title: {
        text: 'Proportions'
      }
    }
});

function update_chart(year, ethnicity) {
  proportionsChart.data.datasets = {
    label: getLabels(year, ethnicity),
    backgroundColor: color_codes[ethnicity],
    data: getProps(year, ethnicity)
  }
}
