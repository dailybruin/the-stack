Chart.defaults.font.family = 'Noto Serif, serif'; 
const labels = ['Fall 2022', 'Winter 2023', 'Spring 2023', 'Fall 2023', 'Winter 2024']; 
const acolors = ['#2774AE', '#AED6F1']; 
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Percentage of Posts that Mention Money',
      data: [80, 66.67, 71.19, 56.52, 69.17], 
      backgroundColor: acolors[0],
      borderColor: acolors[0],
      borderWidth: 1,
    },
    {
      label: 'Percentage of Posts that do not Mention Money',
      data: [20, 33.33, 28.81, 43.48, 30.83], 
      backgroundColor: acolors[1],
      borderColor: acolors[1],
      borderWidth: 1,
    },
  ],
};
const options = {
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Enrollment Period',
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Percentage of Posts',
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Mentions of Money in UCLA Reddit Posts',
    },
  },
  maintainAspectRatio: false,
};
const moneyGraph = document.getElementById("moneyGraph");
const chart = new Chart(moneyGraph, {
  type: 'bar',
  data: data,
  options: options,
});
