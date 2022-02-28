import {MALE_COLOR, FEMALE_COLOR } from './globals.js'

d3.csv('/datasets/prof-reviews/top_500_.csv').then(function (frequency) {
   console.log("data loaded!", frequency);
   // const data_1 = {
   //    // labels: [],
   //    datasets: [
   //       {
   //          data: [],
   //          // label: 'Frequency 1',
   //          // borderColor: '#C433FF',
   //          // backgroundColor: '#CD8337',
   //       },
   //    ],
   // };

   const data_1 = [];
   const labels_data_1 = [];

   frequency.forEach(row => {
      // data_1.labels.push(row.word);
      data_1.push({ x: Number(row.male), y: Number(row.female) });
      labels_data_1.push(row.word);
   });


   // frequency.forEach(row => {
   //    // data_1.labels.push(row.word);
   //    data_1.datasets[0].data.push({x: Number(row.male), y: Number(row.female)});
   // });

   const data_2 = [{ 'x': 0.47593730082063207, 'y': 0.4046705054382598 },
   { x: 0.12470132906603258, y: 0.06496382695998819 },
   { 'x': 0.018786310169830338, 'y': 0.06090358777498892 },
   { 'x': 0.36002733695942263, 'y': 0.32531128500418327 },
   { 'x': 0.6756268819016141, 'y': 0.709311481864265 },
   { 'x': 0.08137245769940439, 'y': 0.11024164575028299 },
   { 'x': 0.053847111879541554, 'y': 0.030390275111964175 },
   { 'x': 0.05091665681126718, 'y': 0.03555785225650868 },
   { 'x': 0.30215084936100384, 'y': 0.31731384418524533 },
   { 'x': 0.051753929687917005, 'y': 0.03887986613514444 },
   { 'x': 0.06515029571431412, 'y': 0.052413996751808654 },
   { 'x': 0.01951892393689893, 'y': 0.03223583837787292 },
   { 'x': 0.18639787416416617, 'y': 0.1742211723017865 },
   { 'x': 0.04594534910615888, 'y': 0.057335498794232 },
   { 'x': 0.06949364876193506, 'y': 0.05844283675377726 },
   { 'x': 0.040241427633981974, 'y': 0.029775087356661255 },
   { 'x': 0.026688072943213015, 'y': 0.03641911511393277 }];
   const labels_data_2 = ['hard', 'funny', 'sweet', 'difficult', 'easy', 'workload', 'old', 'generous', 'helpful', 'impossible', 'useful', 'social', 'fair', 'specific', 'tough', 'useless', 'disorganized'];

   // const data_2 = {
   //    // labels: ['hard','funny','sweet','difficult','easy','workload','old','generous','helpful',
   //    // 'impossible','useful','social','fair','specific','tough','useless','disorganized'],   
   //    datasets: [ {
   //          data: [{'x': 0.47593730082063207, 'y': 0.4046705054382598},
   //          {'x': 0.12470132906603258, 'y': 0.06496382695998819},
   //          {'x': 0.018786310169830338, 'y': 0.06090358777498892},
   //          {'x': 0.36002733695942263, 'y': 0.32531128500418327},
   //          {'x': 0.6756268819016141, 'y': 0.709311481864265},
   //          {'x': 0.08137245769940439, 'y': 0.11024164575028299},
   //          {'x': 0.053847111879541554, 'y': 0.030390275111964175},
   //          {'x': 0.05091665681126718, 'y': 0.03555785225650868},
   //          {'x': 0.30215084936100384, 'y': 0.31731384418524533},
   //          {'x': 0.051753929687917005, 'y': 0.03887986613514444},
   //          {'x': 0.06515029571431412, 'y': 0.052413996751808654},
   //          {'x': 0.01951892393689893, 'y': 0.03223583837787292},
   //          {'x': 0.18639787416416617, 'y': 0.1742211723017865},
   //          {'x': 0.04594534910615888, 'y': 0.057335498794232},
   //          {'x': 0.06949364876193506, 'y': 0.05844283675377726},
   //          {'x': 0.040241427633981974, 'y': 0.029775087356661255},
   //          {'x': 0.026688072943213015, 'y': 0.03641911511393277}],
   //          // label: 'Frequency 2',
   //          // borderColor: '#C433FF',
   //          // backgroundColor: '#CD8337',
   //       }
   //    ],
   // };

   console.log("look here for data_1", data_1);
   console.log("look here for data_2", data_2);

   var data1 = [{ 'x': 0.47593730082063207, 'y': 0.4046705054382598 },
   { x: 0.12470132906603258, y: 0.06496382695998819 },
   { 'x': 0.018786310169830338, 'y': 0.06090358777498892 },
   { 'x': 0.36002733695942263, 'y': 0.32531128500418327 },
   { 'x': 0.6756268819016141, 'y': 0.709311481864265 },
   { 'x': 0.08137245769940439, 'y': 0.11024164575028299 },
   { 'x': 0.053847111879541554, 'y': 0.030390275111964175 },
   { 'x': 0.05091665681126718, 'y': 0.03555785225650868 },
   { 'x': 0.30215084936100384, 'y': 0.31731384418524533 },
   { 'x': 0.051753929687917005, 'y': 0.03887986613514444 },
   { 'x': 0.06515029571431412, 'y': 0.052413996751808654 },
   { 'x': 0.01951892393689893, 'y': 0.03223583837787292 },
   { 'x': 0.18639787416416617, 'y': 0.1742211723017865 },
   { 'x': 0.04594534910615888, 'y': 0.057335498794232 },
   { 'x': 0.06949364876193506, 'y': 0.05844283675377726 },
   { 'x': 0.040241427633981974, 'y': 0.029775087356661255 },
   { 'x': 0.026688072943213015, 'y': 0.03641911511393277 }];
   var data2 = [
      { 'x': 1, 'y': 30 + .1 },
      { 'x': 11, 'y': 30 - .1 },
      { 'x': 10.5 + 1.5, 'y': 30 + .2 },
      { 'x': 11.5 + .2, 'y': 30 },
      { 'x': 12 + 1.5, 'y': 30 - .2 },
      { 'x': 10.75 + 1.5, 'y': 30 + .15 },
      { 'x': 12.4 + 1.5, 'y': 30 + .1 },
      { 'x': 9.6 + 20 + 1.5, 'y': 30 - .2 },
      { 'x': 10 + 20 + 1.5, 'y': 30 },
      { 'x': 11 + 20 + 1.5, 'y': 30 },
      // {x: 10.5 + 20 + 1.5, y: 30},
      // {x: 11.5 + 20 + 1.5, y: 30},
      // {x: 12 + 20 + 1.5, y: 30},
      // {x: 10.75 + 20 + 1.5, y: 30},
      // {x: 12.4 + 20 + 1.5, y: 30},
      // {x: 9.6 + 20 + 1.5, y: 40},
   ];

   // console.log("data loaded!!!");

   // const options = {
   //    title: {
   //       display: true,
   //       text: 'Words Used for Female vs. Male Professors'
   //     },
   //     legend: {
   //       display: false //This will do the task
   //    },
   //     showLines: false,
   //     scales: {
   //       yAxes: [{
   //       }],
   //     },
   //     elements: {
   //       point: {
   //         radius: 5
   //       }
   //     },

   //       tooltips: {
   //          callbacks: {
   //             label: function(tooltipItem, data) {
   //                var label = data.labels[tooltipItem.index];
   //                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
   //             }
   //          }
   //       }

   // };

   let ctx = document.getElementById("scatter");
   var scatterChart = new Chart.Scatter(ctx, {
      // type: 'scatter',
      // data: data_1,
      // options: options,
      data: {
         datasets: [{
            label: "Frequency 1",
            // borderColor: 'rgb(255, 99, 132)',
            data: data_1,
            labels: labels_data_1,
            pointRadius: 4
         }, {
            label: "Frequency 2",
            borderColor: FEMALE_COLOR,
            backgroundColor: FEMALE_COLOR,
            data: data_2,
            labels: labels_data_2,
            pointRadius: 7,
            pointHoverRadius: 7
         }]
      },
      options: {
            title: {
            display: true,
            text: 'Words Used Most Frequently for Males vs Females'
          },

         responsive: true,
         legend: {
            display: false,
         },
         tooltips: {
            callbacks: {
               label: function (tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var index = tooltipItem.index;
                  return dataset.labels[index] + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')'
               }
            }
         }
      }

      //   options: {
      //     title: {
      //       display: true,
      //       text: 'Original Data'
      //     },
      //     showLines: false,
      //     scales: {
      //       yAxes: [{
      //         ticks: {
      //         }
      //       }],
      //     },
      //     elements: {
      //       point: {
      //         radius: 5
      //       }
      //     }
      //   }

      // data: {
      //    datasets: [{
      //      label: "Frequency 1",
      //      borderColor: 'rgb(255, 99, 132)',
      //      data: data_1
      //    }, {
      //      label: "Frequency 2",
      //      borderColor: 'rgb(54, 162, 235)',
      //      data: data_2
      //    }]
      //  },
      //   options: options,
   });

});

