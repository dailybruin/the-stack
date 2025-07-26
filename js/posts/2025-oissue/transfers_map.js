document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("transfer-enrollment-map");
    if (!mapContainer) {
        console.error("Map container not found: #transfer-enrollment-map");
        return;
    }

    const enrollmentData = {
        "Alameda County": 3.34,
        "Butte County": 0.1,
        "Contra Costa County": 2.24,
        "El Dorado County": 0.08,
        "Fresno County": 0.37,
        "Humboldt County": 0.05,
        "Imperial County": 0.08,
        "Kern County": 0.29,
        "Kings County": 0.05,
        "Los Angeles County": 45.73,
        "Madera County": 0.03,
        "Marin County": 0.34,
        "Mendocino County": 0.03,
        "Merced County": 0.13,
        "Monterey County": 0.31,
        "Napa County": 0.05,
        "Orange County": 12.34,
        "Placer County": 0.57,
        "Riverside County": 2.22,
        "Sacramento County": 1.64,
        "San Bernardino County": 1.51,
        "San Diego County": 3.6,
        "San Francisco County": 0.7,
        "San Joaquin County": 0.21,
        "San Luis Obispo County": 0.21,
        "San Mateo County": 1.2,
        "Santa Barbara County": 2.4,
        "Santa Clara County": 6.5,
        "Santa Cruz County": 0.55,
        "Shasta County": 0.1,
        "Solano County": 0.18,
        "Sonoma County": 0.34,
        "Stanislaus County": 0.1,
        "Tulare County": 0.21,
        "Tuolumne County": 0,
        "Ventura County": 4.36,
        "Yolo County": 0,
        "Yuba County": 0.03
    };

    const populationData = {
        "Alameda County": 1649060,
        "Alpine County": 1099,
        "Amador County": 42026,
        "Butte County": 208334,
        "Calaveras County": 46505,
        "Colusa County": 22074,
        "Contra Costa County": 1172607,
        "Del Norte County": 27009,
        "El Dorado County": 192823,
        "Fresno County": 1024125,
        "Glenn County": 28304,
        "Humboldt County": 132380,
        "Imperial County": 181724,
        "Inyo County": 18485,
        "Kern County": 922529,
        "Kings County": 154913,
        "Lake County": 67764,
        "Lassen County": 28340,
        "Los Angeles County": 9757179,
        "Madera County": 165432,
        "Marin County": 256400,
        "Mariposa County": 17048,
        "Mendocino County": 89175,
        "Merced County": 296774,
        "Modoc County": 8491,
        "Mono County": 12991,
        "Monterey County": 436251,
        "Napa County": 132727,
        "Nevada County": 102195,
        "Orange County": 3170435,
        "Placer County": 433822,
        "Plumas County": 18834,
        "Riverside County": 2529933,
        "Sacramento County": 1611231,
        "San Benito County": 69159,
        "San Bernardino County": 2214281,
        "San Diego County": 3298799,
        "San Francisco County": 827526,
        "San Joaquin County": 816108,
        "San Luis Obispo County": 281843,
        "San Mateo County": 742893,
        "Santa Barbara County": 444500,
        "Santa Clara County": 1926325,
        "Santa Cruz County": 262406,
        "Shasta County": 181121,
        "Sierra County": 3113,
        "Siskiyou County": 42498,
        "Solano County": 455101,
        "Sonoma County": 485375,
        "Stanislaus County": 556972,
        "Sutter County": 98545,
        "Tehama County": 64451,
        "Trinity County": 15642,
        "Tulare County": 483546,
        "Tuolumne County": 53893,
        "Ventura County": 835427,
        "Yolo County": 225251,
        "Yuba County": 87469
    };

    const colorScale = chroma.scale(['#FED976', '#FC4E2A']).domain([0, 50]);
    function getColor(d) {
        if (d === 0) return null;
        return colorScale(d).hex();
    }

    function style(feature) {
        const countyName = feature.properties.NAME;
        const percent = enrollmentData[countyName] || 0;
        return {
            fillColor: getColor(percent),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    const map = L.map(mapContainer, { attributionControl: false }).setView([37.5, -119.5], 6);

    const myAttrControl = L.control.attribution().addTo(map);
    myAttrControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    fetch("California_Counties.geojson")
        .then(response => response.json())
        .then(geojson => {
            L.geoJson(geojson, {
                style: style,
                onEachFeature: function (feature, layer) {
                    const countyName = feature.properties.NAME;
                    const percent = enrollmentData[countyName] || 0;
                    const population = populationData[countyName] || "?";
                    const popupContent = `Public school students from <strong>${countyName}</strong><br> made up <strong>${percent}%</strong> of incoming transfer students in 2024.<br><br>The total population of ${countyName} is<br><strong>${population?.toLocaleString()}</strong>.`;

                    layer.bindPopup(popupContent, {
                        closeButton: false,
                        autoClose: false,
                        closeOnClick: false
                    });

                    layer.on({
                        mouseover: function (e) {
                            this.openPopup(e.latlng);
                        },
                        mouseout: function () {
                            this.closePopup();
                        }
                    });
                }
            }).addTo(map);
        })
        .catch(error => {
            console.error("Error loading GeoJSON:", error);
        });

    const legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'legend');
        const width = 300;
        const height = 20;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        for (let i = 0; i < width; i++) {
            const t = i / (width - 1);
            const color = chroma.scale(['#FED976', '#FC4E2A'])(t).hex();
            ctx.fillStyle = color;
            ctx.fillRect(i, 0, 1, height);
        }

        const title = document.createElement('div');
        title.innerHTML = `% of transfer students at UCLA`;
        title.style.marginBottom = "5px";

        const labels = document.createElement('div');
        labels.style.display = "flex";
        labels.style.justifyContent = "space-between";
        labels.innerHTML = `<span>> 0%</span><span>50%</span>`;

        div.appendChild(title);
        div.appendChild(canvas);
        div.appendChild(labels);

        return div;
    };

    legend.addTo(map);
});