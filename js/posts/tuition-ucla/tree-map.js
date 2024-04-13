anychart.onDocumentReady(function() {
  var data_tree = [
    {
      name: 'BruinBill Components',
      children: [
        {
          name: 'Universitywide Fees',
          fill: '#ff8ba0',
          desc:
            'Universitywide fees are established by the Regents of the University of California and apply to students at all ten campuses in the system. These fees are the same at all UC campuses.',
          children: [
            {
              name: 'Student Services Fee',
              value: 372,
              fill: '#ff8ba0',
              desc:
                'The Student Services Fee covers services that benefit the student and that are complementary to, but not part of, instructional programs. The fee supports operating and capital expenses for services related to the physical and psychological health and well-being of students, social and cultural activities and programs, services related to campus life and campus community, and educational and career support services. Income generated from this fee paid by UCLA students funds UCLA programs.',
            },
            {
              name: 'Tuition',
              value: 3976,
              fill: '#ff8ba0',
              desc:
                'Tuition is used to help fund various academic and nonacademic programs as determined by the Office of the President. These programs include financial aid, instructional equipment, faculty salaries, operation and maintenance of plant, admissions, and registration.',
            },
            {
              name: 'UCSA Fee',
              value: 2,
              fill: '#ff8ba0',
              desc:
                'The UCSA Fee is a UC-wide optional fee that undergraduate students at every UC campus can choose to pay for the purpose of funding the University of California Student Association, the student-run and state-recognized organization that advocates on behalf of all 230,000+ UC undergraduate students’ by pushing policies at the University, state, and federal levels that benefit current and prospective students.',
            },
          ],
        },
        {
          name: 'Referenda Fees',
          fill: '#98c0ff',
          desc:
            'Compulsory campus-based referenda fees may only be established, increased, or renewed following a referendum in which students vote in favor of the fee.',
          children: [
            {
              name: 'Undergraduate Student Association Fee',
              value: 96.62,
              fill: '#98c0ff',
              desc:
                'The fee supports the undergraduate student government organization. It is collected by the University and passed on to Associated Students of UCLA (ASUCLA) for use by the undergraduate student government. Funds are used primarily to support student government and for programming such as community service, films, cultural events, and concerts.',
            },
            {
              name: 'Ackerman Student Union Fee',
              value: 23,
              fill: '#98c0ff',
              desc:
                'The Ackerman Student Union Fee covers payment of the capital construction loans for various projects in facilities operated by ASUCLA.',
            },
            {
              name: 'Wooden Center Fee',
              value: 12,
              fill: '#98c0ff',
              desc:
                'The fee covers repayment of the construction bond, plus ongoing maintenance and utilities costs, for the John Wooden Recreation Center.',
            },
            {
              name: 'Green Initiative Fee',
              value: 4.8,
              fill: '#98c0ff',
              desc:
                'The fee is assessed to undergraduates to raise funds for projects focused on environmental sustainability at UCLA. The funded projects focus on minimizing the UCLA contribution to global climate change; conserving water, energy, and other resources; increasing use of renewable energy at UCLA; promoting local and organic food; educating the campus community about environmental sustainability; and providing paid student internships. Twenty-five percent of the revenue collected is used for student financial aid.',
            },
            {
              name: 'PLEDGE Fee',
              value: 22.88,
              fill: '#98c0ff',
              desc:
                "The Practicing Leadership and Empowerment to Develop Growth through Education (PLEDGE) Fee supports Undergraduate Student Association efforts in student-initiated outreach, community, retention, and media programs that increase student access to university resources and services at UCLA and in the surrounding community. The fee provides supplemental funding to the Community Programs Office, Student-Initiated Access Committee, and the Campus Retention Committee to support more than 30 projects and activities. The fee also provides supplemental funding to the UCLA Marching Band, the Communications Board and its student-run media, and the USAC External Vice President's office for advocacy on behalf of undergraduate students.",
            },
            {
              name: 'Student Seismic Fee',
              value: 38,
              fill: '#98c0ff',
              desc:
                'The Student Seismic Fee is assessed, to fund debt service related to the seismic and life safety renovations for Ackerman Union and Kerckhoff Hall.',
            },
            {
              name: 'S.P.A.R.C. Fee',
              value: 45,
              fill: '#98c0ff',
              desc:
                "The Student Programs, Activities, and Resource Center (SPARC) Fee is assessed to all students for the construction of nonseismic renovations in the Men's Gymnasium building; for the construction and expansion of the John Wooden Recreation Center; and for the building maintenance, utilities costs, and future repair and improvement needs of these two projects as well as similar needs of other student-fee supported activity and recreational facilities on campus.",
            },
            {
              name: 'Bruin Bash Fee',
              value: 1.75,
              fill: '#98c0ff',
              desc:
                'The Bruin Bash Fee funds the cost of the annual Fall student event that welcomes new and returning students. The event includes activities such as concerts, film screenings, a lounge, dance, and the Enormous Activities Fair. Twenty-five percent of revenue collected is returned to support financial aid.',
            },
            {
              name: 'Arts Restoring Community Fee',
              value: 2.01,
              fill: '#98c0ff',
              desc:
                'The fee helps fund the cost of student-group cultural and arts-related programs through the student Cultural Arts Commission. Twenty-five percent of the revenue collected is used for student financial aid.',
            },
            {
              name: 'Universal Transit Pass',
              value: 3.3,
              fill: '#98c0ff',
              desc:
                'The Universal Access Transit Pass fee gives undergraduate students unlimited access to Los Angeles County public transportation. Twenty-five percent of revenue collected is used for undergraduate student financial aid.',
            },
            {
              name: 'GCGP Basic Needs Fee',
              value: 0.37,
              fill: '#98c0ff',
              desc:
                'The Good Clothes Good People Basic Needs Fee funds school supplies and hygiene products, to be distributed to students in need at no charge, through the USAC-GCGP redistribution center. Twenty-five percent of revenue collected is used for undergraduate financial aid.',
            },
          ],
        },
        {
          name: 'Course Materials and Services Fees',
          fill: '#96ffbb',
          desc:
            'Campus-based course materials fees are approved by the Chancellor and reported to the Office of the President. They cover the cost of providing course materials to be consumed, retained, or used by the student.',
          children: [
            {
              name: 'IEI Fee',
              value: 108,
              fill: '#96ffbb',
              desc:
                'The Instructional Enhancement Fee supports the use of technology in teaching undergraduates. The fee funds online learning support including course websites and syllabi, computer labs and wireless access, course software, and staffing of computer labs for student use.',
            },
          ],
        },
        {
          name: 'Other Campus-based Fees',
          fill: '#ffd293',
          desc:
            'Other campus-based fees are approved at the campus level for specific services.',
          children: [
            {
              name: 'Undergraduate Health Insurance',
              value: 1067.4,
              fill: '#ffd293',
              desc:
                'Medical insurance is a condition of registration for both graduate and undergraduate students at the University of California. The UCSHIP fee is waivable if a waiver is submitted online by the fee-payment deadline for each term.',
            },
          ],
        },
      ],
    },
  ];

  // create a chart and set the data
  var chart = anychart.treeMap(data_tree, 'as-tree');

  // set the container id
  chart.container('tree-map');

  // enable HTML for labels
  chart.labels().useHtml(true);

  // configure labels
  chart.labels().format('<span>{%name}</span><br>{%value}');

  // configure tooltips
  chart.tooltip().format('Amount: {%value}\nDescription: {%desc}');

  chart.tooltip().width(800);
  chart.tooltip().wordWrap('normal');

  // initiate drawing the chart
  chart.draw();
});
