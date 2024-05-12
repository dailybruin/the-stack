anychart.onDocumentReady(function() {
  // load a json data file
  // anychart.data.loadJsonFile('test.json',
  anychart.data.loadJsonFile(
    '/datasets/course-selling/reddit.json',

    function(data) {
      // add the data
      var treeData = anychart.data.tree(data, 'as-table');

      // create a circle packing chart instance
      var chart = anychart.circlePacking(treeData);

      // customize the tooltip
      chart
        .tooltip()
        .useHtml(true)
        .format(function() {
          var src = this.item.get('industry');
          if (src) {
            return (
              '<div>' +
              // + '<span>Name: ' + this.name + '</span> <br/>'
              '<span>Impacted: ' +
              (src == 'Impacted Course' ? 'Yes' : 'No') +
              '</span>  <br/>' +
              '<span>Number of posts: ' +
              this.value +
              '</span> <br/>' +
              // + '<span>Source: ' + this.item.get('source') + '</span>'
              // If 'industry' is 'Impacted', then print "Impacted: Yes". Else print "Impacted: No"
              // + '<span>Impacted: ' + src + '</span>'
              '</div>'
            );
          }
          return '<span>Total number of posts: ' + this.value + ' </span>';
        });

      // add a chart title
      chart
        .title()
        .enabled(true)
        .useHtml(true)
        .text(
          '<span style = "color: #112B3C;font-weight:600;font-size:18px;">Number of Reddit Posts Per Subject Area</span>'
        );

      // customize the appearance
      chart.background('#ffffff');
      chart.hovered().stroke(function() {
        return {
          thickness: 2,
        };
      });
      chart.stroke(function() {
        return {
          thickness: 1,
        };
      });

      // customize the labels (country names)
      chart
        .labels()
        .fontSize('16')
        .fontColor('#696969')
        .textShadow('none')
        .anchor('center-top')
        .offsetY('-0%');

      chart
        .labels()
        .background()
        .enabled(true)
        .fill('#f6f6f6 0.8')
        .stroke('#888888')
        .corners(5);

      // chart.labels().format(function() {
      //   // This function is called for each circle. `this` refers to the data of the current circle.

      //   // Check the level of the current circle.
      //   if (this.level === 1) {
      //     // This is an outer circle.
      //     // Apply formatting for outer circles here.
      //     return this.getData('name');
      //   } else if (this.level === 2) {
      //     // This is an inner circle.
      //     // Apply formatting for inner circles here.
      //     if (['Physics 5C', 'Physics 5A', 'Chemistry 14C', 'Physics 5B'].includes(this.getData('name'))) {
      //       return this.getData('name');
      //     } else {
      //       return '';
      //     }
      //   } else {
      //     // This is a circle at another level.
      //     // Apply formatting for other circles here, or return an empty string to hide the label.
      //     return '';
      //   }
      // });

      // specify the container element id
      chart.container('container');

      // initiate the drawing of the chart
      chart.draw();
    }
  );
});
