$(document).ready(function() {
  // $('#selectMe').prop('disabled', true);
  $('#chartMD_winter')
    .css({ opacity: 100 })
    .show();
  var checkExist1 = setInterval(function() {
    if (
      ($('#chartMD_winter').text() != 'Graph loading') &
      ($('#chartMD_fall').text() != 'Graph loading') &
      ($('#chartMD_spring').text() != 'Graph loading')
    ) {
      $('#selectMe').prop('disabled', false);
      clearInterval(checkExist1);
    }
  }, 50);

  $('#chartMD_fall')
    .css({ opacity: 0 })
    .show();
  var checkExist2 = setInterval(function() {
    if ($('#chartMD_fall').text() != 'Graph loading') {
      $('#chartMD_fall').hide();
      clearInterval(checkExist2);
    }
  }, 50);

  $('#chartMD_spring')
    .css({ opacity: 0 })
    .show();
  var checkExist3 = setInterval(function() {
    if ($('#chartMD_spring').text() != 'Graph loading') {
      $('#chartMD_spring').hide();
      clearInterval(checkExist3);
    }
  }, 50);

  $('#selectMe').change(function() {
    $('.group').hide();
    $('#' + $(this).val())
      .css({ opacity: 100 })
      .show();
  });
});
