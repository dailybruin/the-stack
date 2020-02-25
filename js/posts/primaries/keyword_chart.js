let keywordChart = new Chart(document.getElementById("keyword-chart"), {
  type: 'horizontalBar',
  data: {
      labels: candidates,
    datasets: [
      {
        label: "College Related Mentions",
        backgroundColor: bg_color,
        data: [81,133,7,207,51,59] 
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
    return [81, 133, 7, 207, 51, 59];
  }
  if (keyword.localeCompare("immigration") === 0) {
    return [19, 20, 3, 12, 17, 10];
  }
  if (keyword.localeCompare("mental-health") === 0) {
    return [8, 4, 0, 2, 0, 1];
  }
  if (keyword.localeCompare("discrimination-and-equality") === 0) {
    return [46, 42, 8, 65, 36, 22];
  }
  if (keyword.localeCompare("healthcare") === 0) {
    return [6, 102, 4, 3, 45, 3];
  }
  if (keyword.localeCompare("environment") === 0) {
    return [32, 72, 1, 54, 66, 13];
  }
  if (keyword.localeCompare("women-health") === 0) {
    return [29, 18, 2, 51, 18, 17];
  }
  if (keyword.localeCompare("marijuana") === 0) {
    return [0, 6, 0, 10, 2, 0];
  }
  if (keyword.localeCompare("gun-rights") === 0) {
    return [24, 5, 2, 10, 37, 8];
  }
} 