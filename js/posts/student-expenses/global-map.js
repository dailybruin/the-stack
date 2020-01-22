var ggeojson;

//Center of the Globe
var glat = 32.039111;
var glong = 18.300352; 

var globalmap = L.map('g-mapid').setView([glat, glong], 2);  

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=' + 'pk.eyJ1IjoiYWh1amFyYWRoaWthIiwiYSI6ImNrNWlzZHZmeTA2ZnMzbHBvMmljNGlybjkifQ.XLa_tcqIhbaWWg9dElzLnA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 5,
      minZoom: 1,
      id: 'mapbox.dark'
    }).addTo(globalmap);

function ggetColor(d) {
    return d > 61423 ? '#f5b209' :
        d > 61187  ? '#f8c646' :
        d > 60886  ? '#fad984' :
        d > 59975  ? '#fdecc2' : '#ffffff'
}

function style(feature) {
    return {
        fillColor: ggetColor(feature.properties.DENSITY),
        weight: 1,
        opacity: 1,
        color: 'snow',
        fillOpacity: .7
    };
}

function ghighlight(g) {
    var glayer = g.target;

    glayer.setStyle({
        weight: 3,
        color: '#ffd32a',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        glayer.bringToFront();
    }

    gdisplayInfo.update(glayer.feature.properties);
}

function greset(g) {
    ggeojson.resetStyle(g.target);
    gdisplayInfo.update();
}

function zoomToCountry(g) {
    globalmap.fitBounds(g.target.getBounds());
}

function gOnEachFeature(feature, glayer) {
    glayer.on({
        mouseover: ghighlight,
        mouseout: greset,
        //click: zoomToCountry
    });
    glayer.on({
        mousedown: ghighlight,
        mouseup: greset,
    });
}

function gnumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

ggeojson = L.geoJson(countriesData, {
    style: style,
    onEachFeature: gOnEachFeature
}).addTo(globalmap);

// On hover control that displays information about hovered upon country
var gdisplayInfo = L.control();

gdisplayInfo.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// Passes properties of hovered upon country and displays it in the control
gdisplayInfo.update = function (props) {

    this._div.innerHTML = '<div style="background: rgba(255,255,255,0.8); \
                                        padding: 0.5em; \
                                        padding-left: 1em; \
                                        padding-right: 1em; \
                                        border-radius: 5px; \
                                        font-family: \'Lato\', sans-serif; \
                                        text-align: left; \
                                        box-shadow: 0 0 15px rgba(255,255,255,0.2);"> \
        <h2>Total Cost</h2>' +  (props ?
        '<span style="font-size: 14px;"> <b>' +  'Total Cost (in USD): $' + '</b>' + gnumberWithCommas(props.DENSITY) + '<br />'
        + '<b>' + 'Country: ' + '</b>' + props.ADMIN + '<br /> </span> </div>'
        : 'Hover over a country');
};

gdisplayInfo.addTo(globalmap);

// Happens on mouse hover
function ghighlight(g) {
    var glayer = g.target;

    glayer.setStyle({
        weight: 3,
        color: '#ffd32a'
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        glayer.bringToFront();
    }

    // Updates custom legend on hover
    gdisplayInfo.update(glayer.feature.properties);
  }

  // Happens on mouse out
  function greset(g) {
    ggeojson.resetStyle(g.target);
    // Resets custom legend when user unhovers
    gdisplayInfo.update();
  }
