var densityCanvas = document.getElementById('densityChart');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Average Bail Amount by Charge',
  data: [
    1000000,
    250000,
    250000,
    237500,
    190000,
    170000,
    150000,
    150000,
    130000,
    128571.43,
  ],
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: {
    labels: [
      'Attempt Murder - Hands/Feet/Fists',
      'Arson:Inhabited Structure/Property',
      'Arson:Inhabited Structure/Property - Other Residential',
      'Rape By Force/Fear/Etc',
      'Send/Sell/Etc Obscene Matter Depicting Minor',
      'Robbery:First Degree:Cab/Etc/Inhabited Dwelling',
      'Carjacking - Firearm',
      'Stalking:Temporary Restraining Order/Etc',
      'Willful Cruelty To Child:Possble Inj/Death',
      'Stalking',
    ],
    datasets: [densityData],
  },
});
