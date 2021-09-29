(function() {
  var asciiLogo =
    '████████╗██╗  ██╗███████╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗\n' +
    '╚══██╔══╝██║  ██║██╔════╝    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝\n' +
    '   ██║   ███████║█████╗      ███████╗   ██║   ███████║██║     █████╔╝ \n' +
    '   ██║   ██╔══██║██╔══╝      ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ \n' +
    '   ██║   ██║  ██║███████╗    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗\n' +
    '   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝';

  window.Stack = {
    apply: function() {
      console.log('Good luck!');
      window.open(
        'https://apply.uclastudentmedia.com/applications/daily-bruin/data-and-graphics-intern/'
      );
    },
  };

  function onLoad() {
    console.log(asciiLogo);
    console.log(
      'Welcome to The Stack! Want to develop for us? Type Stack.apply();'
    );

    // show a "jump to visualization" button if this page is a post that has
    // a visualization
    var visualization = document.querySelector('.post-content #visualization');
    if (visualization) {
      var jumpToVisualization = document.getElementById(
        'jump-to-visualization'
      );
      jumpToVisualization.style.display = 'block';
      // track click events on "jump to visualization" button
      jumpToVisualization.addEventListener('click', function() {
        ga('send', 'event', 'button', 'click', 'jump to visualization');
      });
    }
  }

  onLoad();
})();
