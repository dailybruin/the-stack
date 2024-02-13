document.addEventListener("DOMContentLoaded", function() {
    // Create root element
    var root = am5.Root.new("tree-map");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create wrapper container
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );

    // Create series
    var series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        nodePaddingOuter: 0,
        nodePaddingInner: 0
      })
    );

    series.rectangles.template.setAll({
      strokeWidth: 2
    });

    // Create container for text
    var textContainer = container.children.push(am5.Container.new(root, {
      position: "absolute",
      isMeasured: true,
      layer: 30
    }));

    // Create text element
    var textElement = textContainer.children.push(am5.Label.new(root, {
      fontSize: 14,
      fill: am5.color("#000"),
      wrap: true,
      align: "middle",
      maxWidth: 100
    }));

    // Show text upon hover
    series.nodes.template.events.on("pointerover", function(event) {
      var node = event.target;
      var dataItem = node.dataItem;
      if (dataItem) {
        var dataContext = dataItem.dataContext;
        textElement.text = dataContext.tooltipText;
        textElement.x = node.x() + node.pixelWidth() / 2;
        textElement.y = node.y() + node.pixelHeight() / 2;
        textElement.appear();
      }
    });

    // Hide text when pointer moves out
    series.nodes.template.events.on("pointerout", function(event) {
      textElement.hide();
    });

    // Generate and set data
    var data = {
      name: "Root",
      children: [
        {
          name: "Student Services Fee",
          tooltipText: "The Student Services Fee covers services that benefit the student and that are complementary to, but not part of, instructional programs. The fee supports operating and capital expenses for services related to the physical and psychological health and well-being of students, social and cultural activities and programs, services related to campus life and campus community, and educational and career support services. Income generated from this fee paid by UCLA students funds UCLA programs.\nThe amount of the Student Services Fee is set by the Regents and is the same for all campuses in the UC system.",
          value: 392
        },
        {
          name: "Tuition",
          tooltipText: "Tuition is used to help fund various academic and nonacademic programs as determined by the Office of the President. These programs include financial aid, instructional equipment, faculty salaries, operation and maintenance of plant, admissions, and registration.\nThe Tuition amount is set by the Regents.",
          value: 3976
        },
        {
          name: "Undergraduate Student Association Fee",
          tooltipText: "The fee supports the undergraduate student government organization. It is collected by the University and passed on to Associated Students of UCLA (ASUCLA) for use by the undergraduate student government. Funds are used primarily to support student government and for programming such as community service, films, cultural events, and concerts.\nIt can be increased only by a vote of the students in a student referendum.",
          value: 96.62
        },
        {
          name: "Ackerman Student Union Fee",
          tooltipText: "The Ackerman Student Union Fee covers payment of the capital construction loans for various projects in facilities operated by ASUCLA.\nThe original fee was instituted after a student referendum in the mid-1950s.",
          value: 23
        },
        {
          name: "Wooden Center Fee",
          tooltipText: "The fee covers repayment of the construction bond, plus ongoing maintenance and utilities costs, for the John Wooden Recreation Center.\nIt was approved by student referendum. The fee is increased periodically based on the Consumer Price Index.",
          value: 12
        },
        {
          name: "Undergraduate Health Insurance",
          tooltipText: "Medical insurance is a condition of registration for both graduate and undergraduate students at the University of California. The UCSHIP fee is waivable if a waiver is submitted online by the fee-payment deadline for each term.\nUCSHIP fulfills all of the requirements mandated for qualified medical/health insurance as defined by the University. The Arthur Ashe Student Health and Wellness Center is the primary health care provider for UCSHIP, and is where all nonemergency medical care must be initiated for UCSHIP claim payment consideration.",
          value: 1067.49
        },
        {
          name: "Green Initiative Fee",
          tooltipText: "The fee is assessed to undergraduates to raise funds for projects focused on environmental sustainability at UCLA. The funded projects focus on minimizing the UCLA contribution to global climate change; conserving water, energy, and other resources; increasing use of renewable energy at UCLA; promoting local and organic food; educating the campus community about environmental sustainability; and providing paid student internships. Twenty-five percent of the revenue collected is used for student financial aid.",
          value: 4.8
        },
        {
          name: "PLEDGE Fee",
          tooltipText: "The Practicing Leadership and Empowerment to Develop Growth through Education (PLEDGE) Fee supports Undergraduate Student Association efforts in student-initiated outreach, community, retention, and media programs that increase student access to university resources and services at UCLA and in the surrounding community. The fee provides supplemental funding to the Community Programs Office, Student-Initiated Access Committee, and the Campus Retention Committee to support more than 30 projects and activities. The fee also provides supplemental funding to the UCLA Marching Band, the Communications Board and its student-run media, and the USAC External Vice President's office for advocacy on behalf of undergraduate students.\nThe fee was passed by student referendum in Spring 2009 and approved in July 2009.",
          value: 22.88
        },
        {
          name: "Student Seismic Fee",
          tooltipText: "The Student Seismic Fee is assessed, to fund debt service related to the seismic and life safety renovations for Ackerman Union and Kerckhoff Hall.\nIn September 1992, the Regents approved the assessment of a Student Seismic Fee, formerly listed as Ackerman/Kerckoff Seismic fee.",
          value: 38
        },
        {
          name: "S.P.A.R.C. Fee",
          tooltipText: "The Student Programs, Activities, and Resource Center (SPARC) Fee is assessed to all students for the construction of nonseismic renovations in the Men's Gymnasium building; for the construction and expansion of the John Wooden Recreation Center; and for the building maintenance, utilities costs, and future repair and improvement needs of these two projects as well as similar needs of other student-fee supported activity and recreational facilities on campus.\nThe fee is increased periodically based on the Consumer Price Index.",
          value: 45
        },
        {
          name: "UCSA Fee",
          tooltipText: "The “UCSA Fee” is a UC-wide optional fee that undergraduate students at every UC campus can choose to pay for the purpose of funding the University of California Student Association, the student-run and state-recognized organization that advocates on behalf of all 230,000+ UC undergraduate students’ by pushing policies at the University, state, and federal levels that benefit current and prospective students.\nThe UCSA Fee costs $7 annually per undergraduate student, which will be prorated by academic term.",
          value: 2
        },
        {
          name: "Bruin Bash Fee",
          tooltipText: "The Bruin Bash Fee funds the cost of the annual Fall student event that welcomes new and returning students. The event includes activities such as concerts, film screenings, a lounge, dance, and the Enormous Activities Fair. Twenty-five percent of revenue collected is returned to support financial aid.\nThis fee has been effective since Fall 2013.",
          value: 1.75
        },
        {
          name: "IEI Fee",
          tooltipText: "The Instructional Enhancement Fee supports the use of technology in teaching undergraduates. The fee funds online learning support including course websites and syllabi, computer labs and wireless access, course software, and staffing of computer labs for student use.",
          value: 108
        },
        {
          name: "Arts Restoring Community Fee",
          tooltipText: "The fee helps fund the cost of student-group cultural and arts-related programs through the student Cultural Arts Commission. Twenty-five percent of the revenue collected is used for student financial aid.\nApproved by student referendum in May 2014.",
          value: 2.01
        },
        {
          name: "Universal Transit Pass",
          tooltipText: "Effective fall 2023 through spring 2026, the Universal Access Transit Pass fee gives undergraduate students unlimited access to Los Angeles County public transportation. Twenty-five percent of revenue collected is used for undergraduate student financial aid.\nPassed by student referendum May 2023 and approved July 2023. The fee is assessed to undergraduate students in fall, winter, and spring terms; and is subject to annual adjustment based on the Consumer Price Index.",
          value: 3.3
        },
        {
          name: "GCGP Basic Needs Fee",
          tooltipText: "Effective fall 2020, the Good Clothes Good People Basic Needs Fee funds school supplies and hygiene products, to be distributed to students in need at no charge, through the USAC-GCGP redistribution center. Twenty-five percent of revenue collected is used for undergraduate financial aid.\nPassed by student referendum May 2020 and approved July 2020. The fee is assessed to undergraduate students in fall, winter, and spring terms; and is subject to annual adjustment based on the Consumer Price Index.",
          value: 0.37
        }
      ]
    };

    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);
});