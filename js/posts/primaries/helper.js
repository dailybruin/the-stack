// Chart-value Constants
let candidates = ["Amy Klobuchar", "Bernie Sanders", "Donald Trump", 
"Elizabeth Warren", "Joe Biden",  
"Pete Buttigieg"];
let bg_color = [color_code('amy-klobuchar', 0.9), 
                color_code('bernie-sanders', 0.9),
                color_code('donald-trump', 0.9), 
                color_code('elizabeth-warren', 0.9),
                color_code('joe-biden', 0.9), 
                color_code('pete-buttigieg', 0.9),
];
let candidate_initials = ["A.K.", "B.S.", "D.T.", "E.W.", "J.B.", "P.B."];
let default_scale = 100; // scale percentiles to 100
let small_radius = 10;
let big_radius = 25;

//TODO: Eliminate the manual name translation from everywhere? 
// Or add color code info to json as well and create a resolve candidate method
function color_code(candidate, opacity) {
    if (candidate == 'amy-klobuchar')
        return 'rgba(52, 170, 224, ' + opacity.toString() + ')'; 
    else if (candidate == 'bernie-sanders')
        return 'rgba(28, 98, 178, ' + opacity.toString() + ')'; 
    else if (candidate == 'donald-trump')
        return 'rgba(255, 0, 0, ' + opacity.toString() + ')';
    else if (candidate == 'elizabeth-warren')
        return 'rgba(26, 149, 203, ' + opacity.toString() + ')';  
    else if (candidate == 'joe-biden')
        return "rgba(51, 51, 255, " + opacity.toString() + ")"; 
    else if (candidate == 'michael-bloomberg')
        return "rgba(52, 214, 235, " + opacity.toString() + ")";
    else if (candidate == 'pete-buttigieg')
        return 'rgba(176, 206, 255, ' + opacity.toString() + ')'; 

    console.log("Candidate not in the list, throw error");
}

function display_keywords(keyword, name) {
    output = "";
    output = output.concat("<strong>", name.toString(), "</strong> <br>");
    for (var i = 0; i <= (keyword_list[keyword].length - 2); i++)
      output = output.concat(keyword_list[keyword][i], ", ");
    output = output.concat(keyword_list[keyword][keyword_list[keyword].length - 1]);
    document.getElementById("search-terms").innerHTML = output;
} 

function display_trait_meaning(trait) {
    output = "";
    output = output.concat("<strong>", trait.toString(), "</strong>", ": ", trait_meanings[trait]);
    document.getElementById("trait_meaning").innerHTML = output;
}

function make_responsive(x) {
    if (x.matches) {
      Chart.defaults.global.responsive = false;
      Chart.defaults.global.maintainAspectRatio = false;

      keywordChart.data.labels = ["Klobuchar", "Sanders", "Trump", "Warren", "Biden", "Buttigieg"];
      keywordChart.canvas.parentNode.style.width = "340px";

      bubble_chart.options.scales.xAxes = [{ 
        type: 'category',
        labels: ['A.K.', 'B.S.', 'D.T.', 'E.W.', 'J.B.', 'P.B.'],
          scaleLabel: {
          display: false,
          labelString: "Candidates"
          },
        display: true,
      }];

      let radius = 10;
      bubble_chart.canvas.parentNode.style.width = "340px";
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
          label: "Amy Klobuchar",
          backgroundColor: color_code('amy-klobuchar', 0.8),
          data: [{
            x: 'A.K.',
            y: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),			  
                  //r: (amy_klobuchar_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
          }]
          }, {
          label: "Bernie Sanders",
          backgroundColor: color_code('bernie-sanders', 0.8),
          data: [{
            x: 'B.S.',
            y: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),			  	  
                  //r: (bernie_sanders_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
          }]
          },
          {
          label: "Donald Trump",
          backgroundColor: color_code('donald-trump', 0.8),
          data: [{
            x: 'D.T.',
            y: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
                  //r: (donald_trump_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
          }]
          },
          {
          label: "Elizabeth Warren",
          backgroundColor: color_code('elizabeth-warren', 0.8),
          data: [{
            x: 'E.W.',
            y: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),			  
                  //r: (elizabeth_warren_traits['Openness'] * default_scale).toFixed(2),
                  r: radius,
          }]
          }, 
        {
          label: "Joe Biden",
          backgroundColor: color_code('joe-biden', 0.8),
          data: [{
          x: 'J.B.',
          y: (joe_biden_traits['Openness'] * default_scale).toFixed(2),			  
                //r: (joe_biden_traits['Openness'] * default_scale).toFixed(2),
                r: radius,
          }]
        },  
        {
          label: "Pete Buttigieg",
          backgroundColor: color_code('pete-buttigieg', 0.8),
          data: [{
          x: 'P.B.',
          y: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),		  
                //r: (pete_buttigieg_traits['Openness'] * default_scale).toFixed(2),
                r: radius,
          }]
        },  {
          label: [""],
          data: [{
            x: 7,
            y: 6,
            r: 0
          }]
        },];

      bubble_chart.update();
    }
}

