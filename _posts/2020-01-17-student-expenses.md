---
title: Hidden Costs of Being a Student
teaser: Analysis of the various costs of being a student at UCLA as well as a cost calculator to help you evaluate your personalized cost. 
authors:
  - radhika_ahuja
  - annie_zhang
  - madeline_blasingame
key_takeaways:
  - College is, on average, two times more expensive for out-of-state and international students as it is for in-state students.
  - Additionally, out-of-state students bear higher travel costs and international students also bear costs unique to them like higher standardized testing fees and visa costs
featured_image:
  url: student-expenses/us_price_distribution.png
og_image: student-expenses/us_price_distribution.png
stylesheets:
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css 
  - https://fonts.googleapis.com/css?family=Lato&display=swap 
  - https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  - https://fonts.googleapis.com/css?family=Playfair+Display+SC|Roboto
  - /css/posts/student-expenses/quiz.css

scripts:
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js 
  - https://unpkg.com/leaflet@1.6.0/dist/leaflet.js
  - /js/posts/student-expenses/quiz.js
  - /js/posts/student-expenses/global-map.js
  - /js/posts/student-expenses/us-map.js
  - /js/posts/student-expenses/global-geojson.js
  - /js/posts/student-expenses/us-geojson.js

---

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css" />
<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">

<script src="/js/posts/student-expenses/us-geojson.js"></script>
<script src="/js/posts/student-expenses/global-geojson.js"></script>


## Introduction
UCLA is the #1 public university in the United States. However, this title does not come at an insignificant price to students and their families. There are certain costs that every student can expect to pay like tuition or textbook fees. But, there are many costs students don’t consider when making their college decisions, such as the price of living in the second-largest city in the nation. The price of UCLA can also vary dramatically based on where you come from, whether it be down the block or across the ocean. Using data from UCLA and outside sources, we've computed the average annual cost of attendance for in-state, out-of-state, and international students, to give a sense of the true cost of college. All sources have been linked.

### Comparing Totals
The total cost of attendance for students varies depending on whether those students are in-state, out-of-state, or international. While the price of living on the Hill or in Westwood is high no matter where your original residence, non-resident students are responsible for the cost of supplemental tuition and can incur higher travel costs, higher application costs, higher prices for standardized tests, and visa fees, all of which will be discussed in later sections.

<div style="display:flex;">
	<div style="margin-right: 20px;">
	<canvas id="simpleTotals"></canvas>
	</div>
	<div>
	<canvas id="totalChart"></canvas>
	</div>
</div>

<script>
			let simpleTotals = document.getElementById('simpleTotals').getContext('2d');

			Chart.defaults.global.defaultFontFamily = 'Lato';
			Chart.defaults.global.defaultFontSize = 18;
			Chart.defaults.global.defaultFontColor = '#777';

			let simpleTotalsDraw = new Chart(simpleTotals, {
				type: 'horizontalBar', //bar, pie, horizontalbar, etc
				data: {
					labels:['In-State', 'Out-of-State','International'],
					datasets:[{
						label: 'Total Cost',
						data: [
							29262,
							59546,
							61056,
							0
						],
						//backgroundColor: 'green'
						backgroundColor: [
						'#fdecc2',
            			'#f8c646',
       				    '#f5b209',
						],
						hoverBorderWidth: 3,
						hoverBorderColor: '#777'
					}]
				},
				options: {
					maintainApectRatio: false,
					title: {
						display: true,
						text: "Cost of Attendance",
						fontSize: 20
					},
					legend: {
						display: false
					},
					scales: {
						yAxes: [{
						gridLines: {
						offsetGridLines: true
							}
        				}]
    				}
				}
			})
			
			simpleTotals.canvas.parentNode.style.height = '500px';
			simpleTotals.canvas.parentNode.style.width = '550px';
</script>

<script>
let totalChart = document.getElementById('totalChart').getContext('2d');

			Chart.defaults.global.defaultFontFamily = 'Lato';
			Chart.defaults.global.defaultFontSize = 18;
			Chart.defaults.global.defaultFontColor = '#777';

			let totalChartDraw = new Chart(totalChart, {
				type: 'horizontalBar', //bar, pie, horizontalbar, etc
				data: {
					labels:['In-State', 'Out-of-State', 'International'],
					datasets:[
						{
							label: 'Tuition',
							data: [13239, 43093, 43093],
							backgroundColor: '#f7c23a' // red
						},
						{
							label: 'Living',
							data: [15824, 15824, 15824],
							backgroundColor: '#fbe19d' // green
						},
						{
							label: 'Travel',
							data: [63, 494, 1511],
							backgroundColor: '#f9d16b' // yellow
						},
						{
							label: 'Application',
							data: [136, 136, 629],
							backgroundColor: '#f5b209',
						}],
						//backgroundColor: 'green'
						// backgroundColor: [
						// '#f8c646',
						// '#f5b209',
						// ],
						hoverBorderWidth: 3,
						hoverBorderColor: '#777',
					},
				options: {
					maintainAspectRatio: false,
					title: {
						display: true,
						text: "Breakdown",
						fontSize: 20
					},
					legend: {
						display: false
					},
					scales: {
                        yAxes: [{
                        gridLines: {
                        offsetGridLines: true
                        }
                    }],
                    xAxes: [{
                        type: 'logarithmic',
                        ticks: {
                            min: 0,
                            max: 1000000,
                            callback: function (value, index, values) {
                                if (value === 100000) return "100K";
                                if (value === 10000) return "10K";
                                if (value === 1000) return "1K";
                                if (value === 100) return "100";
                                if (value === 10) return "10";
                                if (value === 0) return "0";
                                return null;
                            }
                    }
					}]
					}
				}
			})

			totalChart.canvas.parentNode.style.height = '500px';
			totalChart.canvas.parentNode.style.width = '500px';
</script>


## Geographic Distribution

The maps below show the distribution of the cost of attending UCLA across the United States and worldwide, for the most represented states and countries. Outside of California, states with higher populations (or large cities) as well as the East coast are well represented and most international students come from Asia.

### US Cost of Attendance Distribution

<div class="wrapper" style="text-align: center">
<div id="mapid" style="height: 85vh; width: 70vw; margin-bottom: 5vh; display:inline-block"></div>
<script src="/js/posts/student-expenses/us-map.js"></script>
</div>

### Global Cost of Attendance Distribution

<div class="wrapper" style="text-align: center">
<div id="g-mapid" style="height: 85vh; width: 70vw; margin-bottom: 5vh; display: inline-block"></div>
<script src="/js/posts/student-expenses/global-map.js"></script>
</div>


## Cost Calculator

You can use this cost calculator to estimate your cost of college by filling out your background and lifestyle preferences:

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css" />
<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
<link href="/css/posts/student-expenses/quiz.css " rel="stylesheet">

<div class="quiz">  
<form>
		<h2 class="quiz-question">Q1. Where are you from?</h2>
		<label class="container"> In-State
			<input class="option" type="radio" name="student-type" value="IN_STATE" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> Out-of-State
			<input class="option" type="radio" name="student-type" value="OUT_OF_STATE" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> International
			<input class="option" type="radio" name="student-type" value="INTERNATIONAL" required>
			<span class="checkmark"></span>
		</label>          
		<h2 class="quiz-question">Q2. Where do you prefer to live?</h2>
		<label class="container"> On the Hill
			<input class="option" type="radio" name="housing" value="HILL" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> UCLA University Apartments
			<input class="option" type="radio" name="housing" value="UCLA_OFFCAMPUS" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> Off-Campus
			<input class="option" type="radio" name="housing" value="OFFCAMPUS" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> With a relative (I don't pay for housing)
			<input class="option" type="radio" name="housing" value="RELATIVE" required>
			<span class="checkmark"></span>
		</label>
		<h2 class="quiz-question">Q3. How many roommates do you prefer to have?</h2>
		<label class="container"> Single (No roommates)
			<input class="option" type="radio" name="roommates" value="1" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> Double
			<input class="option" type="radio" name="roommates" value="2" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> Triple
			<input class="option" type="radio" name="roommates" value="3" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> More than 3
			<input class="option" type="radio" name="roommates" value="4" required>
			<span class="checkmark"></span>
		</label>       
		<h2 class="quiz-question">Q4. How many times a year do you go home?</h2>
		<input class="option" type="text" name="visits" required>
		<h2 class="quiz-question">Q5. Do you commute to school?</h2>
		<label class="container"> Yes, with my own car
			<input class="option" type="radio" name="commute" value="YES-CAR" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> Yes, by public transport
			<input class="option" type="radio" name="commute" value="YES-PT" required>
			<span class="checkmark"></span>
		</label>
		<label class="container"> No 
			<input class="option" type="radio" name="commute" value="NO" required>
			<span class="checkmark"></span>
		</label>
		<div class="quiz-result">
			<button type="submit"> Submit </button>
		</div>
		<div>
			<canvas id="summaryChart"></canvas>
		</div>
    </form>
</div>

<br>
<pre id="log">
</pre>

<script src="/js/posts/student-expenses/quiz.js"></script>


## Breakdown of Costs

### Tuition

According to UCLA, annual tuition for the 2019-2020 school year is as follows. Additionally, the UC Board of Regents voted last spring to increase nonresident tuition by $762 per year and allocate 10% of the revenue generated by this increase to financial aid.

Tuition for out-of-state and international students is almost three times that of in-state students, and it continues to rise every year. Many students don’t expect there to be such an inflated price for nonresident students. 

“When I first saw the general out-of-state tuition, I thought it was crazy,” said Matt Chen, a second-year out-of-state computer science student.

Although Chen eventually decided on UCLA in order to gain independence and for the opportunities found here, it wasn’t always a given. Chen asserted that if his in-state school and UCLA had been the same price, he would choose UCLA without any doubt, and the only reason he had to consider other schools was due to cost. For some students, however, the price can make attending UCLA quite prohibitive. UCLA thrives on its diversity, but many students who could bring important perspectives to our campus are driven away by the sticker price. 


<div style="position: relative; height: 340px; margin: 0px; padding: 0px">
	<canvas id="tuitionChart"></canvas>
</div>

<script>
			let tuitionChart = document.getElementById('tuitionChart').getContext('2d');

			Chart.defaults.global.defaultFontFamily = 'Lato';
			Chart.defaults.global.defaultFontSize = 18;
			Chart.defaults.global.defaultFontColor = '#777';

			let tuitionChartDraw = new Chart(tuitionChart, {
				type: 'horizontalBar', //bar, pie, horizontalbar, etc
				data: {
					labels:['In-State', 'Out-of-State','International'],
					datasets:[{
						label: 'Tuition',
						data: [
							13239,
							43093,
							43093,
							0
						],
						//backgroundColor: 'green'
						backgroundColor: [
						'#fdecc2',
            '#f8c646',
            '#f5b209',
						],
						hoverBorderWidth: 1,
						hoverBorderColor: '#777'
					}]
				},
				options: {
					title: {
						display: true,
						text: "Average Cost of Tuition",
						fontSize: 20
					},
					legend: {
						display: false
					},
					scales: {
        		yAxes: [{
            	gridLines: {
                offsetGridLines: true
            		}
        		}]
    			}
				}
			})
			tuitionChart.canvas.parentNode.style.width = '650px'; 
  </script>          

### Cost of Living

For most students who choose to live near campus, there are three options: living on the hill, living in university-owned apartments, or living in nonuniversity owned apartments. We calculated the average annual cost for each option. Note that when we computed the cost of living on the Hill, we assumed a meal plan of 14P because it’s the most common.

Students who live off campus must additionally cover the costs of food, utilities and WiFi, transportation and health insurance. Below is the average cost of living for students living on the Hill, in university apartments and in nonuniversity apartments.

(Note: The transportation cost is the average cost for one adult to have a car in Los Angeles. It includes gas and insurance but not parking. The cost of insurance is the 2019-2020 cost of the UC Student Health Insurance Plan.)


<div style="position: relative; height: 340px; margin: 0px; padding: 0px">
	<canvas id="costOfLivingChart"></canvas>
</div>

<script>
		let costOfLivingChart = document.getElementById('costOfLivingChart').getContext('2d');

		Chart.defaults.global.defaultFontFamily = 'Lato';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		let costOfLivingChartDraw = new Chart(costOfLivingChart, {
			type: 'horizontalBar', //bar, pie, horizontalbar, etc
			data: {
				labels:['Hill', 'Off Campus', 'University Apts.'],
				datasets:[
					{
						label: 'Housing',
						data: [11515, 8518, 9317],
						backgroundColor: '#f7c23a' // red
					},
					{
						label: 'Food',
						data: [5193, 2412, 2412],
						backgroundColor: '#fbe19d' // green
					},
					{
						label: 'Utilities',
						data: [0, 554, 0],
						backgroundColor: '#f9d16b' // yellow
					},
					{
						label: 'Insurance',
						data: [2517, 2517, 2517],
						backgroundColor: '#f5b209',
					}],
					//backgroundColor: 'green'
					// backgroundColor: [
					// '#f8c646',
					// '#f5b209',
					// ],
					hoverBorderWidth: 3,
					hoverBorderColor: '#777',
				},
			options: {
				title: {
					display: true,
					text: "Average Cost of Living",
					fontSize: 20
				},
				legend: {
					display: false
				},

			// 	scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }],
				// }
			}
		})

		costOfLivingChart.canvas.parentNode.style.width = '650px';

</script>

### Transportation

We used the results of a 2015 study to estimate the average cost of flying home once a year based on the distance a student is traveling. Students who live in California, on the other hand, may choose to take a bus or a train home during school breaks. The average cost of transportation for in-state students reflects this – we computed it by looking at the costs of bus and plane tickets.

UCLA students come from all parts of the world. Since the distance from Los Angeles International Airport to a student’s home directly impacts the price of flying, many out-of-state and international students only travel home on rare occasions or during longer breaks.

“I only go home once a year, and when I go home depends on the price of tickets,” said April Guo, a fourth-year economics and cognitive science international student from China.

Because of the cost of flying being so high, especially internationally, many out-of-state and international students can go months without seeing their families and have to track flight prices to determine when it would be cheapest to go home.


<div style="position: relative; height: 340px; margin: 0px; padding: 0px">
	<canvas id="costOfFlyingChart"></canvas>
</div>

<script>
let costOfFlyingChartDraw = new Chart(costOfFlyingChart, {
			type: 'horizontalBar', //bar, pie, horizontalbar, etc
			data: {
				labels:['In-State', 'Out-of-State','International'],
				datasets:[{
					label: 'Travel Cost',
					data: [
						100,
						494,
						1511,
						0
					],
					//backgroundColor: 'green'
					backgroundColor: [
					'#fdecc2',
					'#f8c646',
					'#f5b209',
					],
					hoverBorderWidth: 1,
					hoverBorderColor: '#777'
				}]
			},
			options: {
				title: {
					display: true,
					text: "Average Cost of Flying",
					fontSize: 20
				},
				legend: {
					display: false
				},
				scales: {
					yAxes: [{
					gridLines: {
					offsetGridLines: true
					}
				}]
			}
		}
	})

	costOfFlyingChartDraw.canvas.parentNode.style.width = '650px';

</script>


### Cost of Applying

There is also a cost associated with getting into UCLA – not only is there an application fee, but there are also mandatory standardized tests that come with their own fees. For international students, these tests are even more expensive since they come with additional fees for being administered outside of the United States. International students are also responsible for the cost of a visa and I-iSTART, an online resource to help them acclimate to living in the United States. An important note is that many international students come from China where there are no testing centers. This means that in addition to the international cost of these tests, Chinese students have to travel to nearby countries in order to take their exams. This can take many days and be incredibly expensive. Guo, for example, went to Taiwan twice and Singapore once just to take her exams. Even in countries where testing centers are available, they may not be present in your city, therefore warranting some domestic travel.


<div style="position: relative; height: 340px; margin: 0px; padding: 0px">
	<canvas id="costOfApplyingChart"></canvas>
</div>

<script>
	let costOfApplyingChart = document.getElementById('costOfApplyingChart').getContext('2d');
		Chart.defaults.global.defaultFontFamily = 'Lato';
		Chart.defaults.global.defaultFontSize = 18;
		Chart.defaults.global.defaultFontColor = '#777';

		let costOfApplyingChartDraw = new Chart(costOfApplyingChart, {
			type: 'horizontalBar', //bar, pie, horizontalbar, etc
			data: {
				labels:['In-State', 'Out-of-State', 'International'],
				datasets:[
					{
						label: 'SAT/ACT',
						data: [67, 67, 140],
						backgroundColor: '#fbe19d' // green
					},
					{
						label: 'Application Fee',
						data: [70, 70, 70],
						backgroundColor: '#f9d16b' // yellow
					},
					{
						label: 'TOEFL',
						data: [0, 0, 200],
						backgroundColor: '#f7c23a' // red
					},
					{
						label: 'Visa',
						data: [0, 0, 160],
						backgroundColor: '#f5b209',
					},
					{
						label: 'I-Start',
						data: [0, 0, 59],
						backgroundColor: '#f5b209',
					}],
					//backgroundColor: 'green'
					// backgroundColor: [
					// '#f8c646',
					// '#f5b209',
					// ],
					hoverBorderWidth: 1,
					hoverBorderColor: '#777',
				},
			options: {
				title: {
					display: true,
					text: "Average Cost of Applying",
					fontSize: 20
				},
				legend: {
					display: false
				},
			// 	scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }],
			// 	}
			}
	 	})
	costOfApplyingChart.canvas.parentNode.style.width = '650px';
</script>

## Conclusion

The price of being a UCLA student adds up, whether it is from tuition, housing, health insurance, or transportation. There are some ways students can try to bring these costs down. For example, the students we talked to discussed how they live a more “frugal” lifestyle to cut costs in any way they can. However, some fees are non-negotiable, like the supplemental tuition for non-residents, the higher travel costs for students who live farther away, the Test of English as a Foreign Language, visas, and increased standardized test fees for international students. Chen described to us thatsaid one of the reasons he was able to choose UCLA was due to the priority his parents place on education, but that doesn’t necessarily mean it’s easy. AlthoughHe said that although his parents don’t want him to worry, , he does put some pressure on himself.

Chen says, “w“Whenever it comes to academics, I do put a little bit more pressure on myself because I know how much we are paying.,”  Chen said.

Guo echoed this idea and discussed how international students like herself are more likely to choose traditional majors with higher-paying careers in order to pay back some of the costs of their education. UCLA is the #No. 1 public university in the country, and its high cost is the price students pay to be here. 



