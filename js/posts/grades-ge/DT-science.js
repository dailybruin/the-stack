$(document).ready(function() {
    $("table#physics").DataTable( {
        "ajax": "/datasets/grades-ge/science.JSON",
        columns: [
          { "data": "Subject" },
          { "data": "CatalogNo" },
          { "data": "Name" },
          { "data": "MedianA" }
        ],
        "order": [[3, "asc"]],
        "scrollY":        "300px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );
