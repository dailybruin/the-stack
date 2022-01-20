// simple pie chart code imported from chart js
let ctxPie = document.getElementById('SwipesPieChart')

let pieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: [
    'The Study',
    'Rendezvous',
    'Bruin Cafe',
    'Bruin Bowl',
    'The Drey',
    'De Neve',
    'Epicuria',
    'B-Plate'],
    datasets: [
      {
        label: 'Swipes',
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
            ],
        data: [117463, 104091, 34326, 14579, 11108, 119835, 91102, 11026],
      },
    ],
  }
