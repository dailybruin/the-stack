let radius = big_radius;

let bubble_chart = new Chart(document.getElementById("bubble-chart"), {
	type: 'bubble',
	data: {
	  labels: 'Openness',
	  datasets: [
		{
			label: "Amy Klobuchar",
			backgroundColor: color_codes['amy-klobuchar'],
			data: [{
			  x: 'Klobuchar',
			  y: (amy_klobuchar_traits['Openness'] * default_scale),			  
              r: radius,
			}]
		  }, {
			label: "Bernie Sanders",
			backgroundColor: color_codes['bernie-sanders'],
			data: [{
			  x: 'Sanders',
			  y: (bernie_sanders_traits['Openness'] * default_scale),			  	  
              r: radius,
			}]
		  },
		  {
			label: "Donald Trump",
			backgroundColor: color_codes['donald-trump'],
			data: [{
			  x: 'Trump',
			  y: (donald_trump_traits['Openness'] * default_scale),
              r: radius,
			}]
		  },
		  {
			label: "Elizabeth Warren",
			backgroundColor: color_codes['elizabeth-warren'],
			data: [{
			  x: 'Warren',
			  y: (elizabeth_warren_traits['Openness'] * default_scale),			  
              r: radius,
			}]
		  }, 
		{
		  label: "Joe Biden",
		  backgroundColor: color_codes['joe-biden'],
		  data: [{
			x: 'Biden',
			y: (joe_biden_traits['Openness'] * default_scale),			  
            r: radius,
		  }]
		}, 
		// {
		// 	label: "Michael Bloomberg",
		// 	backgroundColor: color_codes['michael-bloomberg'],
		// 	data: [{
		// 	  x: 'Bloomberg',
		// 	  y: (michael_bloomberg_traits['Openness'] * default_scale),			  
		// 	  r: radius,
		// 	}]
		//   },  
		//   {
		// 	label: "Tulsi Gabbard",
		// 	backgroundColor: color_codes['tulsi-gabbard'],
		// 	data: [{
		// 	  x: 'Gabbard',
		// 	  y: (tulsi_gabbard_traits['Openness'] * default_scale),			  
		// 	  r: radius,
		// 	}]
		//   },  	
	  ]
	},
	options: {
	tooltips: {
		enabled: true,
		mode: 'single',
		callbacks: {
			 label: function(tooltipItems) { 
				label = candidates[tooltipItems.datasetIndex] + ": " + tooltipItems.yLabel.toFixed(2).toString() + "%";
				return label;
			 }  
		},
	},
	title: {
		display: true,
		text: 'Comparison of Personality Traits'
	  }, scales: {
		yAxes: [{ 
			ticks: {
				min: 0,
				max: 100
			},
			display: true,
		  scaleLabel: {
			display: true,
			labelString: "Trait (percentile)"
		  }
		}],
		xAxes: [{ 
			type: 'category',
			labels: candidates,
		  	scaleLabel: {
				display: false,
				labelString: "Candidates"
			  },
			display: true,
		}]
	  },
	  legend: {
		  display: false,
	  }
	}
});
	
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
bubble_chart.canvas.parentNode.style.width = '700px';

function update_bubble_chart(trait, x) {

	if (x.matches) {
		labels = candidate_initials;
		radius = small_radius;
		bubble_chart.canvas.parentNode.style.width = "340px";
	} else {
		labels = candidates;
		radius = big_radius;
	}

	bubble_chart.options.scales.xAxes = [{ 
		type: 'category',
		labels: labels,
          scaleLabel: {
          display: false,
          labelString: "Candidates"
          },
        display: true,
	  }];

	trait_str = trait.toString()
		// TODO: Clean this up

		bubble_chart.data.datasets = [
			{
			  label: 'Amy Klobuchar',
			  backgroundColor: color_codes['amy-klobuchar'],
			  data: [{
				x: labels[0],			  
				y: eval('(amy_klobuchar_traits[\'' + trait_str + '\'] * default_scale)'),
                r: radius,
			  }]
			}, {
			  label: 'Bernie Sanders', 
			  backgroundColor: color_codes['bernie-sanders'],
			  data: [{
				x: labels[1],			  
			  	y: eval('(bernie_sanders_traits[\'' + trait_str + '\'] * default_scale)'),
                r: radius,
			  }]
			},  {
				label: 'Donald Trump',
				backgroundColor: color_codes['donald-trump'],
				data: [{
				  x: labels[2],		  
				  y: eval('(donald_trump_traits[\'' + trait_str + '\'] * default_scale)'),
                  r: radius,
				}]
			  },  {
				label: 'Elizabeth Warren',
				backgroundColor: color_codes['elizabeth-warren'],
				data: [{
				  x: labels[3],		  
				  y: eval('(elizabeth_warren_traits[\'' + trait_str + '\'] * default_scale)'),
                  r: radius,
				}]
			  }, {
				label: 'Joe Biden',
				backgroundColor: color_codes['joe-biden'],
				data: [{
				  x: labels[4],			  
				  y: eval('(joe_biden_traits[\'' + trait_str + '\'] * default_scale)'),
                  r: radius,
				}]
			  },  
			//   {
			// 	label: 'Michael Bloomberg',
			// 	backgroundColor: color_codes['michael-bloomberg'],
			// 	data: [{
			// 	  x: labels[5],			  
			// 	  y: eval('(michael_bloomberg_traits[\'' + trait_str + '\'] * default_scale)'),
            //       r: radius,
			// 	}]
			//   },  
			//   {
			// 	label: 'Tulsi Gabbard',
			// 	backgroundColor: color_codes['tulsi-gabbard'],
			// 	data: [{
			// 	  x: labels[6],			  
			// 	  y: eval('(tulsi_gabbard_traits[\'' + trait_str + '\'] * default_scale)'),
            //       r: radius,
			// 	}]
			//   },  
		  ];

	bubble_chart.update();
}
