var el = {};

var names = [
  {
    placeholder: '.placeholder-quarter-radial',
    list: '.list__ul1',
  },
  {
    placeholder: '.placeholder-div-radial',
    list: '.list__ul2',
  },
  {
    placeholder: '.placeholder-campus-radial',
    list: '.list__ul3',
  },
  {
    placeholder: '.placeholder-num-radial',
    list: '.list__ul4',
  },
  {
    placeholder: '.placeholder-school-radial',
    list: '.list__ul5',
  },
  {
    placeholder: '.placeholder-quarter-scatter',
    list: '.list__ul6',
  },
  {
    placeholder: '.placeholder-div-scatter',
    list: '.list__ul7',
  },
  {
    placeholder: '.placeholder-campus-scatter',
    list: '.list__ul8',
  },
  {
    placeholder: '.placeholder-school-scatter',
    list: '.list__ul9',
  },
  {
    placeholder: '.placeholder-filter1-scatter',
    list: '.list__ul10',
  },
  {
    placeholder: '.placeholder-filter2-scatter',
    list: '.list__ul11',
  },
];

function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

$(document).on('click', function(ev) {
  names.forEach(item => {
    if (
      !ev.target.className.includes('placeholder') &&
      $(item.placeholder).css('opacity') == '0'
    ) {
      $(item.placeholder).css('opacity', '1');
      $(item.list).toggle();
    }
  });
});

names.forEach(item => {
  $(item.placeholder).on('click', function(ev) {
    $(item.placeholder).css('opacity', '0');
    $(item.list).toggle();
  });

  $(`${item.list} a`).on('click', function(ev) {
    ev.preventDefault();
    var index = $(this)
      .parent()
      .index();

    $(item.placeholder)
      .text($(this).text())
      .css('opacity', '1');

    var option = $(item.list)
      .find('li')
      .eq(index)[0].attributes[0].nodeValue;

    if (item.placeholder == '.placeholder-quarter-radial') {
      onRadialChange('selected_quarter', option);
    } else if (item.placeholder == '.placeholder-div-radial') {
      onRadialChange('selected_div', option);
    } else if (item.placeholder == '.placeholder-campus-radial') {
      onRadialChange('selected_campus', option);
    } else if (item.placeholder == '.placeholder-num-radial') {
      onRadialChange('selected_filter', option);
    } else if (item.placeholder == '.placeholder-school-radial') {
      onRadialChange('selected_school', option);
    } else if (item.placeholder == '.placeholder-quarter-scatter') {
      onScatterChange('selected_quarter', option);
    } else if (item.placeholder == '.placeholder-div-scatter') {
      onScatterChange('selected_div', option);
    } else if (item.placeholder == '.placeholder-campus-scatter') {
      onScatterChange('selected_campus', option);
    } else if (item.placeholder == '.placeholder-school-scatter') {
      onScatterChange('selected_school', option);
    } else if (item.placeholder == '.placeholder-filter1-scatter') {
      onScatterChange('selected_filter1', option);
    } else if (item.placeholder == '.placeholder-filter2-scatter') {
      onScatterChange('selected_filter2', option);
    }

    $(item.list)
      .find('li')
      .eq(index)
      .prependTo(item.list);
    $(item.list).toggle();

    names.forEach(item => {
      if ($(item.placeholder).css('opacity') == '0') {
        $(item.placeholder).css('opacity', '1');
        $(item.list).toggle();
      }
    });
  });

  // $('select').on('change', function (e) {

  //   // Set text on placeholder hidden element
  //   $(item.placeholder).text(this.value);

  //   // Animate select width as placeholder
  //   $(this).animate({width: $(item.placeholder).width() + 'px' });

  // });
});
