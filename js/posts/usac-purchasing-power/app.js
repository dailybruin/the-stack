(function(){

var FEES = {
  membership: {
    data: ["Membership Fee", 1203984,1156701,1092621,1068714,1038633,1028169,1000566,980700,924267,897768,841743,788085,799998,779919,760899,749889,744357,740040,729489,1026810,995961,1001883,947316,907719,908286,894069,884532,889566,862485,868053,873156,877776,897969],
    startYear: 1982,
    annotations: {
      2002: '$7→$10'
    },
    lines: []
  },
  entertainment: {
    data: ["Entertainment Fee", 293763,285876,280200,264076,256505,240498,225167,228571,222834,217400,214254,212674,211440,208425,205362,398384,400753,378927,363088,363314,357628,353813,355827,344993,347221,349263,351110,359188],
    startYear: 1987,
    annotations: {
      2002: '$2→$4'
    },
    lines: []
  },
  academic_affairs: {
    data: ["Academic Affairs Commission Fee", 56292,57143,55709,54350,53563,53168,52860,52106,51341,49798,50094,47366,45386,45414,44703,44227,44478,43124,43403,43658,43889,44898],
    startYear: 1993,
    annotations: {
    },
    lines: []
  },
  community_service: {
  data: ["Community Service Commission Fee", 66019,64126,60125,56292,57143,55709,54350,53563,53168,52860,52106,51341,99596,100188,94732,158851,158950,156462,160101,161012,156110,158854,159788,160633,167920],
    startYear: 1990,
    annotations: {
      2002: '$0.50→$1',
      2005: '$1→$1.75'
    },
    lines: [
      {value: 15}
    ]
  },
  student_welfare: {
    data: ["Student Welfare Commission Fee", 66019,64126,60125,56292,57143,55709,54350,53563,53168,52860,52106,51341,124495,125235,118415,113465,113536,111759,110567,111196,107810,108507,109145,109722,112246],
    startYear: 1990,
    annotations: {
      2002: '$0.50→$1.25'
    },
    lines: []
  },
  evp: {
    data: ["External Vice President Fee", 99596,100188,94732,90772,90829,89407,88453,88957,103498,105034,106525,107089,109552],
    startYear: 2002,
    annotations: {
      2010: '$1→$1.22'
    },
    lines: []
  },
  usa: {
    data: ["USA Programming Fee", 112584,114285,111417,108700,107127,106337,105720,104213,102681,199192,200377,189463,181544,181657,178814,176907,177913,172497,173611,174631,175555,179594],
    startYear: 1993,
    annotations: {
      2002: '$1→$2'
    },
    lines: []
  },
  community_service_mini: {
    data: ["Community Service Mini Fund", 56292,57143,55709,54350,53563,53168,105720,104213,102681,99596,100188,94732,90772,90829,89407,88453,88957,86248,86805,87316,87778,89797],
    startYear: 1993,
    annotations: {
      1999: '$0.50→$1'
    },
    lines: []
  },
  campus_retention: {
    data: ["Campus Retention Committee Fee", 171998,165243,156089,152673,148376,146881,142938,140100,264076,256505,240498,562918,571427,557086,543500,535634,531684,740040,729488,718768,697172,701318,663122,748869,749336,737607,739470,743678,833159,846352,854820,861098,888990],
    startYear: 1982,
    annotations: {
      1990: '$1→$2',
      1993: '$2→$5',
      1999: '$5→$7',
      2005: '$7→$8.25',
      2010: '$8.36→$9.66'
    },
    lines: [
      {value: 23}
    ]
  },
  community_activites: {
    data: ["Community Activities Committee Fee", 132038,128253,120249,112584,114285,111417,108700,107127,106337,211440,208425,205362,298788,300565,284195,340395,340607,335276,337007,338925,328606,332464,334419,336188,347514],
    startYear: 1990,
    annotations: {
      1999: '$1→$2',
      2002: '$2→$3',
      2005: '$3→$3.75'
    },
    lines: [
      {value: 15}
    ]
  },
  outreach: {
    data: ["Student Initiated Outreach Committee Fee", 158580,156319,154022,149394,150282,142097,476553,476850,469386,492685,495489,627026,646700,654867,660965,697722],
    startYear: 1999,
    annotations: {
      2005: '$1.50→$5.25',
      2010: '$5.57→$7.27'
    },
    lines: [
      {value: 6}
    ]
  },
  ucsa: {
    data: ["UCSA Contribution Fee", 93791,92413,89636,90169,91890,88049,88104,86725,85800,86288,83661,84201,84696,85144,87103],
    startYear: 2000,
    annotations: {
      2004: '$0.90→$0.97'
    },
    lines: []
  },
  travel: {
    data: ["UCSA and USSA Travel Fee", 19800,19509,18923,19036,17999,17247,17257,16987,16806,16902,16387,16493,16590,16678,17061],
    startYear: 2000,
    annotations: {
    },
    lines: []
  },
};

for (var key in FEES) {
  if (FEES.hasOwnProperty(key)) {
    var fee = FEES[key];
    c3.generate({
      bindto: '#'+key,
      size: {
        height: 200
      },
      data: {
        columns: [fee.data],
        type: 'spline',
        labels: {
          format: function(v, id, i) {
            return fee.annotations[fee.startYear + i];
          }
        }
      },
      axis: {
        x: {
          tick: {
            format: function(v){
              return fee.startYear + v;
            },
          },
        },
        y: {
          label: {
            text: 'Purchasing power in 2015 dollars',
            position: 'outer-top'
          },
          tick: {
            format: function(v){
              var formatCurrency = d3.format("$,");
              return formatCurrency(v);
            }
          }
        }
      },
      grid: {
        x: {
          lines: fee.lines
        }
      },
      legend: {
        show: false
      },
      point: {
        show: false
      },
      tooltip: {
        show: false
      }
    });
  }
}

})();
