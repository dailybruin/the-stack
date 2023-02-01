const config = {
    type: 'pie',
    data: data,
  };

  const data = {
    labels: [
      'Football', // labels will be the sports
      'Basketball',
      'Volleyball'
    ],
    datasets: [{
      label: '% of NIL Deals at UCLA',
      data: [300, 50, 100], // replace with % out of 100
      backgroundColor: [
        'rgb(255, 99, 132)', // choose colors relevant to sports
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
    