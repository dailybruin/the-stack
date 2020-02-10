// default chart
//default scale = 50 (TODO: fix for media queries)
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
		  label: ["Joe Biden"],
		  backgroundColor: color_code('joe-biden', 0.8),
		  data: [{
			x: 'Joe Biden',
			//y: 2,
			y: 43.85,
			r: joe_biden_traits['Openness'] * 40,
		  }]
		}, {
		  label: ["Amy Klobuchar"],
		  backgroundColor: color_code('amy-klobuchar', 0.8),
		  data: [{
			x: 'Amy Klobuchar',
			y: 39,
			//y: 4,
			r: amy_klobuchar_traits['Openness'] * 40,
		  }]
		}, {
		  label: ["Bernie Sanders"],
		  backgroundColor: color_code('bernie-sanders', 0.8),
		  data: [{
			x: 'Bernie Sanders',
			//y: 2,
			y: 41.45,
			r: bernie_sanders_traits['Openness'] * 40,
		  }]
		},  {
		  label: ["Pete Buttigieg"],
		  backgroundColor: color_code('pete-buttigieg', 0.8),
		  data: [{
			x: 'Pete Buttigieg',
			//y: 4,
			y: 40.65,
			r: pete_buttigieg_traits['Openness'] * 40,
		  }]
		},  {
		  label: ["Elizabeth Warren"],
		  backgroundColor: color_code('elizabeth-warren', 0.8),
		  data: [{
			x: 'Elizabeth Warren',
			//y: 2,
			y: 40,
			r: elizabeth_warren_traits['Openness'] * 40,
		  }]
		},  {
		  label: ["Donald Trump"],
		  backgroundColor: color_code('donald-trump', 0.8),
		  data: [{
			x: 'Donald Trump',
			//y: 4,
			y: 47,
			r: donald_trump_traits['Openness'] * 40,
		  }]
		}, {
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
		  scaleLabel: {
			display: true,
			labelString: "Openness"
		  }
		}],
		xAxes: [{ 
			type: 'category',
			labels: ['Amy Klobuchar', 'Bernie Sanders', 'Donald Trump', 'Elizabeth Warren', 'Joe Biden', 'Pete Buttigieg'],
		  	scaleLabel: {
				display: true,
				labelString: "Candidates"
		  	}
		}]
	  }
	}
});
	
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
bubble_chart.canvas.parentNode.style.width = '800px';


function bubble_func(trait, scale) {
	trait_str = trait.toString()
	console.log(trait_str)
		// TODO: Clean this up
		bubble_chart.data.datasets = [
			{
				label: [""],
				data: [{
					x: 0,
					y: 0,
					r: 0
				}]
			},
			{
			  label: ["Joe Biden"],
			  backgroundColor: color_code('joe-biden', 0.8),
			  data: [{
				y: 1,
				//y: 2,
				x: 'Joe Biden',
				r: eval('joe_biden_traits[\'' + trait_str + '\'] * scale')
			  }]
			}, {
			  label: ["Amy Klobuchar"],
			  backgroundColor: color_code('amy-klobuchar', 0.8),
			  data: [{
				y: 2,
				x: 'Amy Klobuchar',
				//y: 4,
				r: eval('amy_klobuchar_traits[\'' + trait_str + '\'] * scale'),
			  }]
			}, {
			  label: ["Bernie Sanders"],
			  backgroundColor: color_code('bernie-sanders', 0.8),
			  data: [{
				y: 3,
				//y: 2,
				x: 'Bernie Sanders',
				r: eval('bernie_sanders_traits[\'' + trait_str + '\'] * scale'),
			  }]
			},  {
			  label: ["Pete Buttigieg"],
			  backgroundColor: color_code('pete-buttigieg', 0.8),
			  data: [{
				y: 4,
				//y: 4,
				x: 'Pete Buttigieg',
				r: eval('pete_buttigieg_traits[\'' + trait_str + '\'] * scale'),
			  }]
			},  {
			  label: ["Elizabeth Warren"],
			  backgroundColor: color_code('elizabeth-warren', 0.8),
			  data: [{
				y: 5,
				//y: 2,
				x: 'Elizabeth Warren',
				r: eval('elizabeth_warren_traits[\'' + trait_str + '\'] * scale')
			  }]
			},  {
			  label: ["Donald Trump"],
			  backgroundColor: color_code('donald-trump', 0.8),
			  data: [{
				y: 6,
				//y: 4,
				x: 'Donald Trump',
				r: eval('donald_trump_traits[\'' + trait_str + '\'] * scale'),
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