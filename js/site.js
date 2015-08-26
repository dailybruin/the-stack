(function(){
  function onLoad() {
    // show a "jump to visualization" button if this page is a post that has
    // a visualization
    var visualization = document.querySelector('.post-content #visualization');
    if (visualization) {
      document.getElementById('jump-to-visualization').style.display = "block";
    }
  }

  onLoad();
})();
