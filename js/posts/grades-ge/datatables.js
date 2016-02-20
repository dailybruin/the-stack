
$(document).ready(function() {
    $("table#physics").DataTable( {
        "ajax": "/datasets/grades-ge/physics.JSON",
        columns: [
          { "data": "Subject" },
          { "data": "CatalogNo" },
          { "data": "Name" },
          { "data": "MedianA" },
          { "data": "ClassSize" }
        ],
        "order": [[3, "asc"]],
        "scrollY":        "300px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );

$("tbody tr:eq(0)").css("background-color", "green")
