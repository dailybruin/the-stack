function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDepartment(d) {

  return d.split(' ').map(function(w) {
    if (w.match((/^and$|^of$|^of\)$/i))) { return w.toLowerCase(); }
    if (w.charAt(0) == '(') {
      return '(' + capitalizeFirstLetter(w.slice(1));
    } else {
      return capitalizeFirstLetter(w);
    }
  }).join(' ');
}
