// default chart
//default scale = 50 (TODO: fix for media queries)
let default_scale = 40;

let bubble_chart = new Chart(document.getElementById("bubble-chart"), {
	type: 'bubble',
	data: {
	  labels: 'Openness',
	  datasets: [
		{
			label: [""],
			data: [{
				x: 0,
				y: 0,
				r: 0
			}]
		},
		{
			label: ["Amy Klobuchar"],
			backgroundColor: color_code('amy-klobuchar', 0.8),
			data: [{
			  x: 'Amy Klobuchar',
			  y: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),			  
			  r: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),
			}]
		  }, {
			label: ["Bernie Sanders"],
			backgroundColor: color_code('bernie-sanders', 0.8),
			data: [{
			  x: 'Bernie Sanders',
			  y: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),			  
			  r: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),
			}]
		  },
		  {
			label: ["Donald Trump"],
			backgroundColor: color_code('donald-trump', 0.8),
			data: [{
			  x: 'Donald Trump',
			  y: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
			  r: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
			}]
		  },
		  {
			label: ["Elizabeth Warren"],
			backgroundColor: color_code('elizabeth-warren', 0.8),
			data: [{
			  x: 'Elizabeth Warren',
			  y: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),
			  r: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),
			}]
		  }, 
		{
		  label: ["Joe Biden"],
		  backgroundColor: color_code('joe-biden', 0.8),
		  data: [{
			x: 'Joe Biden',
			y: (joe_biden_traits['Openness'] * default_scale).toFixed(2),
			r: (joe_biden_traits['Openness'] * default_scale).toFixed(2),
		  }]
		}, {
		  label: ["Pete Buttigieg"],
		  backgroundColor: color_code('pete-buttigieg', 0.8),
		  data: [{
			x: 'Pete Buttigieg',
			y: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),
			r: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),
		  }]
		},  {
			label: [""],
			data: [{
				x: 7,
				y: 6,
				r: 0
			}]
		},
	  ]
	},
	options: {
	  title: {
		display: true,
		text: 'Comparison of Personality Traits'
	  }, scales: {
		yAxes: [{ 
			ticks: {
				min: 0,
				max: 50
			},
			display: false,
		  scaleLabel: {
			display: true,
			labelString: "Openness"
		  }
		}],
		xAxes: [{ 
			type: 'category',
			labels: ['Amy Klobuchar', 'Bernie Sanders', 'Donald Trump', 'Elizabeth Warren', 'Joe Biden', 'Pete Buttigieg'],
		  	scaleLabel: {
				display: false,
				labelString: "Candidates"
		  	}
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
bubble_chart.canvas.parentNode.style.width = '800px';


function bubble_func(trait, scale) {
	trait_str = trait.toString()
		// TODO: Clean this up

		default_scale = scale;

		bubble_chart.data.datasets = [
			{
				label: [""],
				data: [{
					x: 0,
					y: 0,
					r: 0
				}]
			}, {
			  label: ["Amy Klobuchar"],
			  backgroundColor: color_code('amy-klobuchar', 0.8),
			  data: [{
				x: 'Amy Klobuchar',
				y: eval('(amy_klobuchar_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				r: eval('(amy_klobuchar_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
			  }]
			}, {
			  label: ["Bernie Sanders"],
			  backgroundColor: color_code('bernie-sanders', 0.8),
			  data: [{
				x: 'Bernie Sanders',
				y: eval('(bernie_sanders_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				r: eval('(bernie_sanders_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
			  }]
			},  {
				label: ["Donald Trump"],
				backgroundColor: color_code('donald-trump', 0.8),
				data: [{
				  x: 'Donald Trump',
				  y: eval('(donald_trump_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				  r: eval('(donald_trump_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				}]
			  },  {
				label: ["Elizabeth Warren"],
				backgroundColor: color_code('elizabeth-warren', 0.8),
				data: [{
				  x: 'Elizabeth Warren',
				  y: eval('(elizabeth_warren_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				  r: eval('(elizabeth_warren_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)')
				}]
			  }, 			{
				label: ["Joe Biden"],
				backgroundColor: color_code('joe-biden', 0.8),
				data: [{
				  x: 'Joe Biden',
				  y: eval('(joe_biden_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				  r: eval('(joe_biden_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)')
				}]
			  }, {
			  label: ["Pete Buttigieg"],
			  backgroundColor: color_code('pete-buttigieg', 0.8),
			  data: [{
				x: 'Pete Buttigieg',
				y: eval('(pete_buttigieg_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
				r: eval('(pete_buttigieg_traits[\'' + trait_str + '\'] * default_scale).toFixed(2)'),
			  }]
			}, {
				label: [""],
				data: [{
					x: 7,
					y: 6,
					r: 0
				}]
			},
		  ];

	bubble_chart.update();
}