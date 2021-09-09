# News Crimewatch, August 2021

For first edition of revamped Crimewatch.
Article: [https://dailybruin.com/2021/09/07/crimewatch-august-2021](https://dailybruin.com/2021/09/07/crimewatch-august-2021)

Leaflet map of UCPD reported crimes in August 21. Displays pin for each crime, popup shows details of location, crime type, and status. Pins are color coded by crime type.

## Notes

For uploading to the server, the width and height of the map MUST be set to 100vw and 100vh respectively. The actual size on mainsite will be ~700px wide by ~500px tall. Make sure the map looks okay at this size while developing.

For copy edits, include a byline below the map but REMOVE it before uploading to the server. Format: "Graphic reporting by < whoever gathered data >, title. Interactive by < you! >, title.

## JavaScript libraries

* leaflet

  * overlapping marker spidifier plugin

NOTE: had issues using leaflet version 1.7.1, it was causing bugs on mobile where 2 click events fired so popups would close immediately. solved by using version 1.6.0

## Tools used

* Geocoding
  * data came from news in google sheet with address. did geocoding of address -> lat, long in google sheets
  * see: [https://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html](https://willgeary.github.io/data/2016/11/04/Geocoding-with-Google-Sheets.html)
  * note: make sure to check all points on map, geocoding isn't 100% accurate especially since addresses are not always formatted well. can also check that latitude should be 34.0... for most of them.
* Converting CSV to GeoJson
  * geojson files work well with leaflet
  * used online tool for this: [https://www.convertcsv.com/csv-to-geojson.htm](https://www.convertcsv.com/csv-to-geojson.htm)
  * can also be done with a python script
