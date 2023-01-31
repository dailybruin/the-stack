const ctxt = document.getElementById('FAlocations');
const FAlocations = new Chart(ctxt, {
    type: 'bar',
    data: {
        labels: ['Ronald Reagan Medical Center', 'Center for Health Sciences', 'Medical Plaza 200 Building', 'Boelter Hall', 'Hedrick Hall', 'Young Hall', 'Franz Hall', 'School of Dentistry', 'Biomedical Science Building', 'School of Public Health'],
        datasets: [{
            label: '# of Fire Alarms',
            data: [165, 109, 104, 74, 62, 55, 55, 48, 47, 42],
            backgroundColor: [
                'rgba(227, 52, 47, 0.2)',
                'rgba(246, 153, 63, 0.2)',
                'rgba(255, 237, 74, 0.2)',
                'rgba(56, 193, 114, 0.2)',
                'rgba(77, 192, 181, 0.2)',
                'rgba(52, 144, 220, 0.2)',
                'rgba(101, 116, 205, 0.2)',
                'rgba(84, 71, 255, 0.2)',
                'rgba(139, 71, 216, 0.2)',
                'rgba(106, 0, 205, 0.2)'
            ],
            borderColor: [
                'rgba(227, 52, 47, 0.8)',
                'rgba(246, 153, 63, 0.8)',
                'rgba(255, 237, 74, 0.8)',
                'rgba(56, 193, 114, 0.8)',
                'rgba(77, 192, 181, 0.8)',
                'rgba(52, 144, 220, 0.8)',
                'rgba(101, 116, 205, 0.8)',
                'rgba(84, 71, 255, 0.8)',
                'rgba(139, 71, 216, 0.8)',
                'rgba(106, 0, 205, 0.8)'
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
