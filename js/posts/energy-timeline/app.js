var timeline_json;
$.getJSON('/datasets/energy-timeline/timeline-data.json', function(data) {
    window.timeline = new TL.Timeline('timeline-embed', data);
});
