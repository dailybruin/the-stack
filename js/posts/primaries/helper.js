// Chart-value Constants
let candidates = ["Klobuchar", 
                  "Sanders", 
                  "Trump", 
                  "Warren", 
                  "Biden",
                  // "Bloomberg",
                  // "Gabbard"
                ];
let bg_color = [color_codes['amy-klobuchar'], 
                color_codes['bernie-sanders'],
                color_codes['donald-trump'], 
                color_codes['elizabeth-warren'],
                color_codes['joe-biden'], 
                // color_codes['michael-bloomberg'],
                // color_codes['tulsi-gabbard'],
              ];
let candidate_initials = ["A.K.", "B.S.", "D.T.", "E.W.", "J.B.",
                          // "M.B.", "T.G",
                          ];
let default_scale = 100; // scale percentiles to 100
let small_radius = 10; // for mobile
let big_radius = 25;   // for desktop

function display_keywords(keyword, name) {
    output = "";
    output = output.concat("<strong>", name.toString(), "</strong> <br>");
    output = output.concat("<i>keywords used to find ", name.toString(), " related mentions:</i><br>");
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

      keywordChart.canvas.parentNode.style.width = "340px";

      update_bubble_chart('Openness', x);
      bubble_chart.update();
    }
}

