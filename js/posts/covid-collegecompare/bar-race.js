var event_to_flourish_id = {
    "rescheduled": "1862264",
    "cancelled_classes": "1861595"
}

function display_bar_race(value) {
    document.getElementsByClassName('flourish-embed')["0"].dataset.src = "visualisation/" + event_to_flourish_id[value];
    document.getElementsByClassName('flourish-embed')["0"].dataset.url = "https://flo.uri.sh/visualisation/" + event_to_flourish_id[value] + "/embed";
    $('#bar-race').load(document.URL +  ' #bar-race');
    // TODO: Reload after update
}