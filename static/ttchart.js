//json2 Data Object
let json2 = [
    {  
    "denominator": 40753,
    "id": "450822",
    "name": "MEDICAL CITY LAS COLINAS",
    "numerator": 1,
    "pct_infections": 0.002454
    },
    {
    "denominator": 40045,
    "id": "450747",
    "name": "PALESTINE REGIONAL MEDICAL CENTER",
    "numerator": 1,
    "pct_infections": 0.002497
    },
    {
    "denominator": 67862,
    "id": "450688",
    "name": "DALLAS REGIONAL MEDICAL CENTER",
    "numerator": 0,
    "pct_infections": 0.00
    },
    {
    "denominator": 42620,
    "id": "450678",
    "name": "BAYLOR SCOTT & WHITE MEDICAL CENTER-WHITE ROCK",
    "numerator": 2,
    "pct_infections": 0.004693
    },
    {
    "denominator": 37334,
    "id": "450272",
    "name": "CHRISTUS SANTA ROSA HOSPITAL-SAN MARCOS",
    "numerator": 0,
    "pct_infections": 0.00
    },
    {
    "denominator": 25269,
    "id": "450072",
    "name": "CHI ST. LUKES' BRAZOSPORT HOSPITAL",
    "numerator": 0,
    "pct_infections": 0.00
    },
    {
    "denominator": 100254,
    "id": "670122",
    "name": "HOUSTON METHODIST THE WOODLANDS HOSPITAL",
    "numerator": 6,
    "pct_infections": 0.005985
    },
    {
    "denominator": 59665,
    "id": "670085",
    "name": "TEXAS HEALTH HARRIS METHODIST HOSPITAL ALLIANCE",
    "numerator": 5,
    "pct_infections": 0.00838
    },
    {
    "denominator": 30404,
    "id": "670080",
    "name": "SETON MEDICAL CENTER HARKER HEIGHTS",
    "numerator": 4,
    "pct_infections": 0.013156
    },
    {
    "denominator": 47803,
    "id": "670060",
    "name": "BAYLOR SCOTT AND WHITE MEDICAL CENTER SUNNYVALE",
    "numerator": 3,
    "pct_infections": 0.006276
    }
]

/////////////////////////////////////
// Assign values for x and y axis

d3.json("/api/hospitaltopten").then(function(json) {
    

var chartLabels = [];
for (var i=0; i<json.length; i++) {
    chartLabels.push(json[i].id);
}

var chartData = [];
for (var i=0; i<json.length; i++) {
    chartData.push(json[i].pct_infections);
}

// Bar Chart Config
const myData2 = {
    labels: chartLabels,
    datasets: [{
        label: 'Infection Percent',
        minbarlength: .0001,
        data: chartData,
        backgroundColor: [
            'rgba(13, 196, 44, 0.20)',
            'rgba(13, 196, 44, 0.25)',
            'rgba(13, 196, 44, 0.30)',
            'rgba(13, 196, 44, 0.35)',
            'rgba(13, 196, 44, 0.40)',
            'rgba(13, 196, 44, 0.45)',
            'rgba(13, 196, 44, 0.50)',
            'rgba(13, 196, 44, 0.55)',
            'rgba(13, 196, 44, 0.60)',
            'rgba(13, 196, 44, 0.65)'
        ],
        borderColor: [
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)',
            'rgba(13, 196, 44, 1)'
        ],
        borderWidth: 1
    }]
}


const tooltipTitle = (tooltipItems) => {
    let hospitalName = '';  
    tooltipItems.forEach(function(tooltipItem) {
        if(tooltipItem.parsed.x == '0')
            hospitalName = 'Medical City Las Colinas'
        if(tooltipItem.parsed.x == '1')
            hospitalName = 'Palestine Regional Medical Center'
        if(tooltipItem.parsed.x == '2')
            hospitalName = 'Dallas Regional Medical Center'
        if(tooltipItem.parsed.x == '3')
            hospitalName = 'Baylor Scott & White Medical Center-White Rock'
        if(tooltipItem.parsed.x == '4')
            hospitalName = 'Christus Santa Rosa Hospital-San Marcos'
        if(tooltipItem.parsed.x == '5')
            hospitalName = "Chi St. Lukes' Brazosport Hospital"
        if(tooltipItem.parsed.x == '6')
            hospitalName = 'Houston Methodist The Woodlands Hospital'
        if(tooltipItem.parsed.x == '7')
            hospitalName = 'Texas Health Harris Methodist Hospital Alliance'
        if(tooltipItem.parsed.x == '8')
            hospitalName = 'Seton Medical Center Harker Heights'
        if(tooltipItem.parsed.x == '9')
            hospitalName = 'Baylor Scott And White Medical Center Sunnyvale'
    });
    return hospitalName;
};

const tooltipBeforeBody = (tooltipItems) => {
    let hospitalDenominator = '';  
    tooltipItems.forEach(function(tooltipItem) {
        if(tooltipItem.parsed.x == '0')
            hospitalDenominator = '40,753'
        if(tooltipItem.parsed.x == '1')
            hospitalDenominator = '40,045'
        if(tooltipItem.parsed.x == '2')
            hospitalDenominator = '67,862'
        if(tooltipItem.parsed.x == '3')
            hospitalDenominator = '42,620'
        if(tooltipItem.parsed.x == '4')
            hospitalDenominator = '37,334'
        if(tooltipItem.parsed.x == '5')
            hospitalDenominator = '25,269'
        if(tooltipItem.parsed.x == '6')
            hospitalDenominator = '100,254'
        if(tooltipItem.parsed.x == '7')
            hospitalDenominator = '59,665'
        if(tooltipItem.parsed.x == '8')
            hospitalDenominator = '30,404'
        if(tooltipItem.parsed.x == '9')
            hospitalDenominator = '47,803'
    });
    return 'Denominator: ' + hospitalDenominator;
};

const ctx = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx, {
    type: 'bar',
    data: myData2,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'Infection Percent (%)'
                }   
            },
            x: {
                grid: {
                    display: true
                }  ,
                title: {
                    display: true,
                    text: 'Hospital ID'
                } 
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Lowest Rates of Infection',
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitle,
                    beforeBody: tooltipBeforeBody,
                    // afterBody, beforeFooter, footer, afterFooter -- options for other tooltips
                }
            }
        },
    }
})
});