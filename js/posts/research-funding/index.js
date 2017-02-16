document.addEventListener('DOMContentLoaded', function() {
    d3.json("/datasets/research-funding/dummy.json", function(err, data1) {
        d3.json("/datasets/research-funding/sponsors.json", function(err, data2) {
            initBarChartDropdown(data1);
            initDonutChartDropdown(data2);

            initBarChart(data1);
            initDonutChart(data2);
        });
    });
});
