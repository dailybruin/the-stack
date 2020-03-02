let keywordChart = new Chart(document.getElementById("keyword-chart"), {
  type: 'horizontalBar',
  data: {
      labels: candidates,
    datasets: [
      {
        label: "College Related Mentions",
        backgroundColor: bg_color,
        data: [87, 150, 7, 233 ,55 ,59] 
      }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Frequency of Issue Discussed on Twitter'
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 250, 
        }
      }],
      yAxes: [{
        stacked: true,
      }]
    }
  }
});

Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
keywordChart.canvas.parentNode.style.width = '700px';

// Update Keyword Chart on Button Click
function update_keyword_chart(keyword, name) {
  keywordChart.data.datasets = [{
      label: name.toString() + " Related Mentions", 
      backgroundColor: bg_color,
      data: get_data_from_keyword(keyword)
                                      
  }];
  keywordChart.update();
}

//return the correct array
function get_data_from_keyword(keyword) {
  if (keyword.localeCompare("college") === 0) {
    return [87, 150, 7, 233, 55, 59];
  }
  if (keyword.localeCompare("employment") === 0) {
    return [20, 60, 58, 44, 46, 24];
  }
  if (keyword.localeCompare("immigration") === 0) {
    return [114, 129, 35, 150, 111, 98];
  }
  if (keyword.localeCompare("mental-health") === 0) {
    return [19, 7, 0, 5, 2, 2];
  }
  if (keyword.localeCompare("discrimination-and-equality") === 0) {
    return [104, 159, 77, 239, 167, 131];
  }
  if (keyword.localeCompare("healthcare") === 0) {
    return [28, 212, 9, 62, 103, 24];
  }
  if (keyword.localeCompare("environment") === 0) {
    return [47, 144, 6, 91, 73, 17];
  }
  if (keyword.localeCompare("women-health") === 0) {
    return [37, 21, 7, 55, 20, 19];
  }
  if (keyword.localeCompare("marijuana") === 0) {
    return [0, 7, 0, 14, 2, 0];
  }
  if (keyword.localeCompare("gun-rights") === 0) {
    return [31, 11, 5, 21, 64, 18];
  }
} 