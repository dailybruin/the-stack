d3.json('/datasets/course-schedule/department-name-map.json', function(data){
    const subjects = Object.keys(data).sort(), defaultDepartment = 'Anthropology';

    d3.select('#pick-department-time')
        .on('change', function(e) {pickDepartmentTime(data);})
    .selectAll('option')
        .data(subjects)
        .enter()
        .append('option')
        .property('selected', function(d) {return d == defaultDepartment;})
    .text(function(d) {return d;})
    .attr('value', function(d, i) {return i;});

    pickDepartmentTime(data);
});

function pickDepartmentTime(data){
    var dept = $('#pick-department-time option:selected').text();
    $('#department-time-graph').attr("src", "/img/posts/course-schedule/departments-time/" + data[dept][0] + ".png");
}