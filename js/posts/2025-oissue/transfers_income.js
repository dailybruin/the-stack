Chart.defaults.font.family = 'PT Sans';

const dataPoints2 = [
    { x: 126240, y: 23.48, school: 'BERKELEY CITY COLLEGE', county: 'Alameda' },
    { x: 126240, y: 23.08, school: 'CHABOT COLLEGE', county: 'Alameda' },
    { x: 126240, y: 21.78, school: 'COLLEGE OF ALAMEDA', county: 'Alameda' },
    { x: 126240, y: 25.84, school: 'LANEY COLLEGE', county: 'Alameda' },
    { x: 126240, y: 21.99, school: 'LAS POSITAS COLLEGE', county: 'Alameda' },
    { x: 126240, y: 22.22, school: 'MERRITT COLLEGE', county: 'Alameda' },
    { x: 126240, y: 21.89, school: 'OHLONE COLLEGE', county: 'Alameda' },
    { x: 68574, y: 30.77, school: 'BUTTE COLLEGE', county: 'Butte' },
    { x: 125727, y: 14.55, school: 'CONTRA COSTA COLLEGE', county: 'Contra Costa' },
    { x: 125727, y: 23.04, school: 'DIABLO VALLEY COLLEGE', county: 'Contra Costa' },
    { x: 125727, y: 26.97, school: 'LOS MEDANOS COLLEGE', county: 'Contra Costa' },
    { x: 106190, y: 25, school: 'LAKE TAHOE COMMUNITY COLLEGE', county: 'El Dorado' },
    { x: 71434, y: 24.64, school: 'CLOVIS COMMUNITY COLLEGE', county: 'Fresno' },
    { x: 71434, y: 29.03, school: 'FRESNO CITY COLLEGE', county: 'Fresno' },
    { x: 71434, y: 22.22, school: 'REEDLEY COLLEGE', county: 'Fresno' },
    { x: 61135, y: 36.36, school: 'COLLEGE OF THE REDWOODS', county: 'Humboldt' },
    { x: 56393, y: 26.47, school: 'IMPERIAL VALLEY COLLEGE', county: 'Imperial' },
    { x: 67660, y: 16.54, school: 'BAKERSFIELD COLLEGE', county: 'Kern' },
    { x: 67660, y: 12.5, school: 'CERRO COSO COMMUNITY COLLEGE', county: 'Kern' },
    { x: 67660, y: 16.67, school: 'TAFT COLLEGE', county: 'Kern' },
    { x: 68750, y: 22.22, school: 'WEST HILLS COLLEGE LEMOORE', county: 'Kings' },
    { x: 87760, y: 32.18, school: 'ANTELOPE VALLEY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 23.56, school: 'CERRITOS COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 25.93, school: 'CITRUS COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 24.57, school: 'COLLEGE OF THE CANYONS', county: 'Los Angeles' },
    { x: 87760, y: 15.38, school: 'COMPTON COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 26.37, school: 'EAST LOS ANGELES COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 34.8, school: 'EL CAMINO COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 31.61, school: 'GLENDALE COMMUNITY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 25, school: 'LONG BEACH CITY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 27.71, school: 'LOS ANGELES CITY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 32.81, school: 'LOS ANGELES HARBOR COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 18.67, school: 'LOS ANGELES MISSION COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 35.88, school: 'LOS ANGELES PIERCE COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 28.57, school: 'LOS ANGELES SOUTHWEST COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 26.67, school: 'LOS ANGELES TRADE TECHNICAL COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 28.47, school: 'LOS ANGELES VALLEY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 29.03, school: 'MOUNT SAN ANTONIO COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 32.79, school: 'PASADENA CITY COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 22.95, school: 'RIO HONDO COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 31.8, school: 'SANTA MONICA COLLEGE', county: 'Los Angeles' },
    { x: 87760, y: 18.18, school: 'WEST LOS ANGELES COLLEGE', county: 'Los Angeles' },
    { x: 75496, y: 11.11, school: 'MADERA COMMUNITY COLLEGE', county: 'Madera' },
    { x: 142785, y: 24.14, school: 'COLLEGE OF MARIN', county: 'Marin' },
    { x: 64688, y: 33.33, school: 'MENDOCINO COLLEGE', county: 'Mendocino' },
    { x: 65044, y: 22.45, school: 'MERCED COLLEGE', county: 'Merced' },
    { x: 94486, y: 19.12, school: 'HARTNELL COLLEGE', county: 'Monterey' },
    { x: 94486, y: 29.23, school: 'MONTEREY PENINSULA COLLEGE', county: 'Monterey' },
    { x: 108970, y: 27.78, school: 'NAPA VALLEY COLLEGE', county: 'Napa' },
    { x: 113702, y: 20, school: 'COASTLINE COMMUNITY COLLEGE', county: 'Orange' },
    { x: 113702, y: 24.26, school: 'CYPRESS COLLEGE', county: 'Orange' },
    { x: 113702, y: 31.54, school: 'FULLERTON COLLEGE', county: 'Orange' },
    { x: 113702, y: 19.38, school: 'GOLDEN WEST COLLEGE', county: 'Orange' },
    { x: 113702, y: 27.66, school: 'IRVINE VALLEY COLLEGE', county: 'Orange' },
    { x: 113702, y: 23.25, school: 'ORANGE COAST COLLEGE', county: 'Orange' },
    { x: 113702, y: 26.41, school: 'SADDLEBACK COLLEGE', county: 'Orange' },
    { x: 113702, y: 20.14, school: 'SANTA ANA COLLEGE', county: 'Orange' },
    { x: 113702, y: 32.91, school: 'SANTIAGO CANYON COLLEGE', county: 'Orange' },
    { x: 114678, y: 26.86, school: 'SIERRA COLLEGE', county: 'Placer' },
    { x: 89672, y: 27.27, school: 'COLLEGE OF THE DESERT', county: 'Riverside' },
    { x: 89672, y: 15, school: 'MORENO VALLEY COLLEGE', county: 'Riverside' },
    { x: 89672, y: 26.02, school: 'MOUNT SAN JACINTO COLLEGE', county: 'Riverside' },
    { x: 89672, y: 20.47, school: 'NORCO COLLEGE', county: 'Riverside' },
    { x: 89672, y: 14.84, school: 'RIVERSIDE CITY COLLEGE', county: 'Riverside' },
    { x: 88724, y: 14.29, school: 'AMERICAN RIVER COLLEGE', county: 'Sacramento' },
    { x: 88724, y: 24.24, school: 'COSUMNES RIVER COLLEGE', county: 'Sacramento' },
    { x: 88724, y: 24.37, school: 'FOLSOM LAKE COLLEGE', county: 'Sacramento' },
    { x: 88724, y: 22.81, school: 'SACRAMENTO CITY COLLEGE', county: 'Sacramento' },
    { x: 82184, y: 11.76, school: 'BARSTOW COMMUNITY COLLEGE', county: 'San Bernardino' },
    { x: 82184, y: 24.88, school: 'CHAFFEY COLLEGE', county: 'San Bernardino' },
    { x: 82184, y: 0, school: 'COPPER MOUNTAIN COLLEGE', county: 'San Bernardino' },
    { x: 82184, y: 37.74, school: 'CRAFTON HILLS COLLEGE', county: 'San Bernardino' },
    { x: 82184, y: 16.67, school: 'SAN BERNARDINO VALLEY COLLEGE', county: 'San Bernardino' },
    { x: 82184, y: 14.77, school: 'VICTOR VALLEY COLLEGE', county: 'San Bernardino' },
    { x: 102285, y: 27.27, school: 'CUYAMACA COLLEGE', county: 'San Diego' },
    { x: 102285, y: 14.42, school: 'GROSSMONT COLLEGE', county: 'San Diego' },
    { x: 102285, y: 30.6, school: 'MIRACOSTA COLLEGE', county: 'San Diego' },
    { x: 102285, y: 21.23, school: 'PALOMAR COLLEGE', county: 'San Diego' },
    { x: 102285, y: 25.49, school: 'SAN DIEGO CITY COLLEGE', county: 'San Diego' },
    { x: 102285, y: 21.68, school: 'SAN DIEGO MESA COLLEGE', county: 'San Diego' },
    { x: 102285, y: 26.03, school: 'SAN DIEGO MIRAMAR COLLEGE', county: 'San Diego' },
    { x: 102285, y: 23.15, school: 'SOUTHWESTERN COLLEGE', county: 'San Diego' },
    { x: 141446, y: 24, school: 'CITY COLLEGE OF SAN FRANCISCO', county: 'San Francisco' },
    { x: 88531, y: 22.22, school: 'SAN JOAQUIN DELTA COLLEGE', county: 'San Joaquin' },
    { x: 93398, y: 17.14, school: 'CUESTA COLLEGE', county: 'San Luis Obispo' },
    { x: 156000, y: 28.33, school: 'CANADA COLLEGE', county: 'San Mateo' },
    { x: 156000, y: 18.29, school: 'COLLEGE OF SAN MATEO', county: 'San Mateo' },
    { x: 156000, y: 26.32, school: 'SKYLINE COLLEGE', county: 'San Mateo' },
    { x: 95977, y: 26.19, school: 'ALLAN HANCOCK COLLEGE', county: 'Santa Barbara' },
    { x: 95977, y: 24.21, school: 'SANTA BARBARA CITY COLLEGE', county: 'Santa Barbara' },
    { x: 159674, y: 21.34, school: 'DE ANZA COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 19.42, school: 'EVERGREEN VALLEY COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 29.77, school: 'FOOTHILL COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 4.76, school: 'GAVILAN COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 30.51, school: 'MISSION COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 24.19, school: 'SAN JOSE CITY COLLEGE', county: 'Santa Clara' },
    { x: 159674, y: 26.09, school: 'WEST VALLEY COLLEGE', county: 'Santa Clara' },
    { x: 109266, y: 30.43, school: 'CABRILLO COLLEGE', county: 'Santa Cruz' },
    { x: 71931, y: 33.33, school: 'SHASTA COLLEGE', county: 'Shasta' },
    { x: 99994, y: 18.37, school: 'SOLANO COMMUNITY COLLEGE', county: 'Solano' },
    { x: 102840, y: 27.27, school: 'SANTA ROSA JUNIOR COLLEGE', county: 'Sonoma' },
    { x: 79661, y: 30.95, school: 'MODESTO JUNIOR COLLEGE', county: 'Stanislaus' },
    { x: 69489, y: 33.87, school: 'COLLEGE OF THE SEQUOIAS', county: 'Tulare' },
    { x: 69489, y: 18.18, school: 'PORTERVILLE COLLEGE', county: 'Tulare' },
    { x: 72259, y: 36.36, school: 'COLUMBIA COLLEGE', county: 'Tuolumne' },
    { x: 107327, y: 32.66, school: 'MOORPARK COLLEGE', county: 'Ventura' },
    { x: 107327, y: 28.85, school: 'OXNARD COLLEGE', county: 'Ventura' },
    { x: 107327, y: 35.42, school: 'VENTURA COLLEGE', county: 'Ventura' },
    { x: 88818, y: 25, school: 'WOODLAND COMMUNITY COLLEGE', county: 'Yolo' },
    { x: 73313, y: 11.76, school: 'YUBA COLLEGE', county: 'Yuba' } 
];

let hoveredCounty2 = null;

document.addEventListener('DOMContentLoaded', () => {
    const ctx_admissions_income_scatter = document.getElementById('transfers-income');
    const chart = new Chart(ctx_admissions_income_scatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Schools',
                data: dataPoints2,
                parsing: false,
                backgroundColor: context => {
                    const point = context.raw;
                    if (!point) return '#2774AE';
                    return (hoveredCounty2 && point.county === hoveredCounty2) ? '#FFD100' : '#2774AE';
                },
                radius: context => {
                    const point = context.raw;
                    if (!point) return 6;
                    return (!hoveredCounty2 || point.county === hoveredCounty2) ? 6 : 3;
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: true
            },
            onHover: (event, elements) => {
                if (elements.length > 0) {
                    const { datasetIndex, index } = elements[0];
                    const point = chart.data.datasets[datasetIndex].data[index];
                    hoveredCounty2 = point.county;
                } else {
                    hoveredCounty2 = null;
                }
                chart.update();
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: context => {
                            const point = context.raw;
                            const dataset = context.chart.data.datasets[context.datasetIndex].data;
                            const matchingPoints = dataset.filter(p => p.x === point.x && p.y === point.y);

                            const firstMatch = dataset.findIndex(p => p.x === point.x && p.y === point.y);
                            if (context.dataIndex !== firstMatch) {
                                return null;
                            }

                            const schoolNames = matchingPoints.map(p => p.school);
                            return [
                                ...schoolNames,
                                `Admission Rate: ${point.y}%`
                            ];
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Transfer Students',
                    font: {
                        size: 16,
                    },
                },
                hoveredCountyLabel: {
                    display: true
                },
                legend: { display: false }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'County Income'
                    },
                    min: 50000,
                    max: 165000,
                    ticks: {
                        callback: val => '$' + val
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Acceptance Rate'
                    },
                    min: 0,
                    max: 40,
                    ticks: {
                        callback: val => val + '%'
                    }
                }
            }
        },
        plugins: [
        {
            id: 'hoveredCountyLabel',
            afterDraw(chart, args, options) {
                const { ctx, chartArea } = chart;
                if (!hoveredCounty2) return;

                const allPoints = chart.data.datasets[0].data;
                const countyPoint = allPoints.find(p => p.county === hoveredCounty2);
                if (!countyPoint) return;

                ctx.save();
                ctx.font = '20px PT Sans';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'right';
                ctx.textBaseline = 'top';
                ctx.fillText(`County: ${hoveredCounty2}`, chartArea.right - 10, chartArea.top + 10);

                const income = countyPoint.x;
                ctx.font = '18px PT Sans';
                ctx.fillStyle = '#333'
                ctx.fillText(`Income: $${income.toLocaleString()}`, chartArea.right - 10, chartArea.top + 35);
                ctx.restore();
            }
        }
        ]
    });
})