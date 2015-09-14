(function(){

var START_YEAR = 1982;

var FEES = {
  "Membership Fee": "The membership fee pays for USAC’s basic administrative and programming costs. Until 2002, the fee was $7 per person per quarter and was increased to $10 per person per quarter after the USAC Programming Referendum passed that year. ",
  "Entertainment Fee": "The Entertainment fee helps fund the programming activities managed by the Cultural Affairs Commission and Campus Events Commission.",
  "Academic Affairs Commission Fee": "Supports the advocacy and programming efforts of the Academic Affairs Commission, including student-initiated courses and academic support resources. ",
  "Community Service Commission Fee": "The Community Service Commission fee goes toward funding the 45-membered CSC staff and the 33 student-run service organizations that fall under CSC. The service organizations, which focus on education, health, special needs or poverty issues, do not directly receive the fees, but CSC provides the resources for each organization with the fee. ",
  "Student Welfare Commission Fee": "The Student Wellness Commission, formerly known as the Student Welfare Commission, advocates for student health issues. The fee funds the staff and the programs of 12 committees underneath the SWC, which focus on specific issues including body image, sexual assault and mental health.	",
  "External Vice President Fee": "The External Vice President’s office focuses on student advocacy at the local, state and national level. The fee funds the staff of the office and the programs the External Vice President’s office organizes to educate the student body on political issues affecting the UC.",
  "USA Programming Fund": "The USA Programming Fund provides programming resources for student organizations, USAC offices and commissions. ",
  "Community Service Mini Fund": "The Community Service Mini Fund provides funding for community service programs organized by students. Each student organization can apply and receive a maximum of $3,500 each quarter. Each student organization must go through a hearing process conducted by the Community Service Mini Fund Committee before receiving any funding.",
  "Campus Retention Committee Fee": "The Campus Retention Committee is a committee under the Community Programs Office which focuses on increasing retention on campus. The committee’s Student Retention Center supports six projects, targeted toward specific communities, which assist students struggling in academics or their college transition. The Campus Retention Committee also manages the Test Bank, the CPO Computer Lab, the Commuter Van Ride Service and the CPO Food Closet with its funding. ",
  "Community Activities Committee Fee": "The Community Activities Committee is under Student Organizations, Leadership, and Engagement – an organization that advises and provides support to student organizations on campus. The Community Activities Committee provides funding to programs which aim to provide services to underserved communities. Each student group can receive a maximum allocation of $10,000 from the committee.",
  "Community Programs Office Fee": "The Community Programs Office manages a variety of student-initiated projects that address health, access to education and other issues faced by marginalized communities in the Los Angeles area. The fee supports the administration of the CPO.",
  "Student Intiated Outreach Committee Fee": "The Student Initiated Outreach Committee is under the Community Programs Office, supporting seven projects which provide educational programs to students from low-income backgrounds and underserved communities. The SIOC fee funds these seven projects.",
  "UCSA Contribution Fee": "The UCSA Contribution fee funds the membership fee to be part of the University of California Student Association, an association focused on representing the interests of students and student governments in the UC system. UCSA has lobbied extensively at the state level to increase funding to the UC system.",
  "UCSA and USSA Travel Fee": "The fee funds UCSA members’ costs associated with travelling between campuses, the UCSA office and Sacramento. In addition, it funds the travel fees for staff from the External Vice President’s office travelling to Washington, D.C. through the United States Student Association.",
  "The Green Initiative Fund": "The Green Initiative Fund funds student-initiated sustainability projects on campus and can provide around $200,000 in total annually to fund these projects. ",
  "Bruin Bash Referendum": "The Bruin Bash fee funds the annual concert, organized by the Cultural Affairs Commission and the Campus Events Commission, which has featured musicians such as Chance the Rapper.",
  "Cultural Affairs Commission Arts Restoring Community Fee": "The Arts Restoring Community fee, which is distributed by a committee organized by the Cultural Affairs commissioner, provides funding to culturally significant programs. Each student group can apply for funds twice each quarter for a total of six times in an academic year. Student groups can receive a maximum of $1,000 per quarter. However, student groups part of a membership organization created by the CAC, known as the Collective, can receive a maximum of $2,000 per quarter. "
}

var feeNames = [];
for (var key in FEES) {
  if (FEES.hasOwnProperty(key)) {
    feeNames.push(key);
  }
}

var breakdownChart = c3.generate({
  bindto: '#breakdown',
  data: {
    url: '/datasets/usac-fee-trend/usac-fees-historical.csv',
    type: 'bar',
    groups: [
      feeNames
    ],
    order: 'desc'
  },
  bar: {
    width: {
      ratio: 0.8
    }
  },
  size: {
    height: 640
  },
  grid: {
    y: {
      show: true
    }
  },
  axis: {
    x: {
      label: {
        text: 'Year',
        position: 'outer-center'
      },
      tick: {
        culling: window.innerWidth < 960, // only display every x axis label if the window is sufficiently wide
        format: function(v) {
          return START_YEAR + v;
        }
      }
    },
    y: {
      label: {
        text: 'Cost',
        position: 'outer-middle'
      },
      tick: {
        format: function(v) {
          var perYear = v * 3; // data is per quarter, multiply by 3 to get per year
          var formatCurrency = d3.format("$,.2f");
          return formatCurrency(perYear);
        }
      }
    }
  },
  onrendered: function() {
    // add events so that when labels are hovered, they will show the
    // associated fee's description in an aside
    var labels = document.querySelectorAll('#breakdown g.c3-legend-item');
    var explainer = document.getElementById('fee-explainer');

    for (var i = 0; i < labels.length; i++) {

      labels[i].addEventListener('mouseenter', function(event){
        var className = event.target.className.baseVal; // because this is an svg element, it has .baseVal and .animVal attributes
        // INVARIANT: we expect label class names to always follow the format:
        // class=" c3-legend-item c3-legend-item-Academic-Affairs-Commission-Fee"
        var feeClassName = className.split(' ')[2];
        var feeName = feeClassName.slice("c3-legend-item-".length).split('-').join(' ');
        explainer.innerHTML = FEES[feeName];
        explainer.style.display = "block";
      });

      labels[i].addEventListener('mouseleave', function(event){
        explainer.style.display = "none";
        explainer.innerHTML = "";
      });
    }
  }
});

var comparisonChart = c3.generate({
  bindto: '#comparison',
  data: {
    url: '/datasets/usac-fee-trend/historical-increase-ratio.csv',
    type: 'area'
  },
  axis: {
    x: {
      label: {
        text: 'Year',
        position: 'outer-center'
      },
      tick: {
        culling: window.innerWidth < 960, // only display every x axis label if the window is sufficiently wide
        format: function(v) {
          return START_YEAR + v;
        }
      }
    },
    y: {
      label: {
        text: 'Fee increase relative to 1982',
        position: 'outer-middle'
      },
      tick: {
        format: function(v) {
          return Math.round(v*10)/10 + "x"; // round to one decimal place
        }
      }
    }
  }
});

})();
