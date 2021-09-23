# Opinion Seismic Ratings, September 2021

Article: [https://dailybruin.com/2021/09/22/editorial-ucla-must-strengthen-building-protocols-prepare-for-earthquake-possibility](https://dailybruin.com/2021/09/22/editorial-ucla-must-strengthen-building-protocols-prepare-for-earthquake-possibility)

Leaflet map with markers that display each researched building and a pop up with their name, address, retrofit year (if applicable), and date of construction. Buildings are organized by seismic ratings.

## Notes

For uploading to the server, the width and height of the map MUST be set to 100vw and 100vh respectively. The actual size on mainsite will be ~700px wide by ~500px tall. Make sure the map looks okay at this size while developing.

For copy edits, include a byline below the map but REMOVE it before uploading to the server. Format: "Graphic reporting by < whoever gathered data >, title. Interactive by < you! >, title.

## JavaScript libraries

* leaflet

  * used an overlapping marker spidifier plugin to space out markers

NOTE: had issues using leaflet version 1.7.1, it was causing bugs on mobile where 2 click events fired so popups would close immediately. solved by using version 1.6.0

## Tools used

* Geocoding
  * data provided by opinion as a google sheet—locations as street addresses. geocoded using this:
  * see: [https://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html](https://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html)
  * sanity check for locations: make sure they're in the approx westwood area
* Converting CSV to GeoJson
  * used this site: [https://www.convertcsv.com/csv-to-geojson.htm](https://www.convertcsv.com/csv-to-geojson.htm)
