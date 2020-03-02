// Make charts responsive
let x = window.matchMedia("(max-width: 480px)");
make_responsive(x);

// Default search terms - College
display_keywords('college', 'College');

// Default trait - Openness
display_trait_meaning('Openness');

// JQuery for buttons
$('input[type=button]').click(function() {
    $('input[type=button]').removeClass('active');
    $(this).addClass('active');
    update_keyword_chart(this.name, this.value);
    display_keywords(this.name, this.value);
});