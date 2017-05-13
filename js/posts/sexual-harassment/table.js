function initTable(csvURI) {
  d3.csv(csvURI, function(d) {
    // extract only the rows with numerical values
    d.value = +d.value;
    if (d.value) return d;

  }, function (error, data) {

      if (error) throw error;

      // format list of table headers
      var titles = []
      data.forEach(function (d) {
        var titleSegment = d.id.split('.')[1];
        var notInTitles = 1;
        for (title of titles) { if (title === titleSegment) notInTitles = 0; }
        if (notInTitles) titles.push(titleSegment);
      })
      titles.unshift('School')

      // format array of cool data
      var newData = []
      data.forEach(function (d) {
        var splitData = d.id.split('.')
        var position = splitData[1]
        var schoolName = splitData[2]
        var value = d.value
        var mapped = 0
        for (object of newData) {
          if (object.school === schoolName) {
            object.data[position] = value
            mapped = 1
          }
        }
        if (!mapped) {
          let newSchool = {school: schoolName, data: {}}
          for (title of titles) { newSchool.data[title] = 0}
          newSchool.data[position] = value
          newSchool.data.School = schoolName
          newData.push(newSchool)
        }
      })

      var sortAscending = true;
      var table = d3.select('.table-wrapper').append('table');

      // appends column headers to table
      var headers = table.append('thead')
                        .append('tr')
                        .selectAll('th')
                        .data(titles)
                        .enter()
                        .append('th')
                        .text(d => d)
                        .on('click', function (d) {
                            headers.attr('class', 'header');
                            if (sortAscending) {
                              rows.sort((a, b) => b.data[d] < a.data[d]);
                              sortAscending = false;
                              this.className = 'aes';
                            } else {
                              rows.sort((a, b) => b.data[d] > a.data[d]);
                              sortAscending = true;
                              this.className = 'des';
                            }
                        });

      // append table body and rows
      var tableBody = table.append('tbody')
      var rows = tableBody.selectAll('tr')
                           .data(newData)
                           .enter()
                           .append('tr')
                           .attr('class', d => d.School)

      // append columns
      var columns = rows.selectAll('td')
                        .data(function (d) {
                          var tdData = [];
                          for (key in d.data) {
                            tempData = {key: key}
                            tempData.value = d.data[key]
                            tdData.push(tempData)
                          }
                          return tdData
                        })
                        .enter()
                        .append('td')
                        .attr('data-th', d => d.key)
                        .text(d => d.value)
                        .style('text-align', 'center')
  });
}

function updateTable(value) {
  d3.select('table').remove()
  initTable(dataList[value])
}
