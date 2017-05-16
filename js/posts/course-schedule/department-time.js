d3.json('/datasets/course-schedule/department-name-map.json', function(data){
    const subjects = Object.keys(data).sort(), defaultDepartment = 'Computer Science';

    d3.select('#pick-department-time')
        .on('change', e => pickDepartmentTime(data))
    .selectAll('option')
        .data(subjects)
        .enter()
        .append('option')
        .property('selected', d => d == defaultDepartment)
    .text(d => d)
    .attr('value', (d, i) => i);

    pickDepartmentTime(data);
});

function pickDepartmentTime(data){
    var dept = $('#pick-department-time option:selected').text();
    $('#department-time-graph').attr("src", "/img/posts/course-schedule/departments-time/" + data[dept][0] + ".png");
}