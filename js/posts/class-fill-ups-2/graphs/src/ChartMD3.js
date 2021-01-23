$(document).ready(function() {
  $('.group').hide();
  $('#chartMD_winter').show();
  $('#selectMe').change(function() {
    $('.group').hide();
    $('#' + $(this).val()).show();
  })
});
