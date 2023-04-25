
const labels = [['Health Care and', 'Social Assistance'], 
                ['Transportation and', 'Warehousing'], 
                'Manufacturing', 
                ['Accommodation and', 'Food Services'], 
                'Construction', 
                'Not Provided', 
                'Retail Trade', 
                ['Arts, Entertainment', 'and Recreation'], 
                ['Personal Serv &', 'Private', 'Organizations'],
                ['Professional,', 'Scientific &Tech Serv'],
                'Educational Services',
                'Wholesale Trade'];
const test_labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l'];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Strikes per Industry", 
            data: [92, 17, 15, 13, 5, 4, 4, 3, 2, 2, 1, 1],
            backgroundColor: 'rgb(50,85,150)', 
            borderWidth: 1
        },
    ]
};

const options = {
    scales: {
        y: {
            beginAtZero: true,
            
            title: {
                display: true,
                text: 'Number of Strikes',
                padding: 15
            }
        },
        x: {
            title: {
                display: true,
                text: 'Industry Type', 
                padding: 15
            },
            ticks: {
                maxRotation: 0,
                minRotation: 0
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Total Number of Strikes across Industries from 2012-2022'
          },
        tooltip: {
            callbacks: {
                title: function(context) {
                console.log(context[0].label);
                let text = context[0].label;
                text = text.replaceAll(", ", "1").replaceAll(",", " ").replaceAll("1", ", ")
                return text;
                }
            }
        }
    },
};

const industry_bar= document.getElementById('Industry_Strikes_Chart');

const chart = new Chart(industry_bar, {
    type: 'bar',
    data: data,
    options: options
});