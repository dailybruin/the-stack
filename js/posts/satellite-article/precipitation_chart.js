let barChart;

const dataPath = '/datasets/satellite-article';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const years = [
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021
];

const colors = [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    'ff0066',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
];

const locations = [
    'Westwood (UCLA)',
    'Downtown Los Angeles (USC)',
    'Long Beach',
    'Pasadena',
    'San Luis Obispo',
    'Palmdale'
];


function initializeChart() {
    let data = {
      labels: years,
      datasets: [
        {
          data: [],
          label: '',
        },
      ],
    };

    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Annual Total Precipitation',
          },
          max: 50,
        },
      },
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Annual Total Precipitation in Westwood (UCLA)',
          font: {
            size: 19,
          },
        },
      },
      maintainAspectRatio: false,
      animation: false,
    };
  
    let ctx = document.getElementById('barChart');
    barChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
}

initializeChart();