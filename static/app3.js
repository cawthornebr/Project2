// d3.json("http://127.0.0.1:5000/toast", function(variables) {
//     console.log(variables);

function myFunc(confirmed, deaths) {
    console.log(deaths);
    console.log(confirmed);
    var data = JSON.parse(confirmed);
    var dData = JSON.parse(deaths);
    var dates = Object.keys(data.Total);
    var dailyConfirmed = Object.values(data.Total);
    var dailyDeaths = Object.values(dData.Total);


    var chart = tui.chart;
    var container = document.getElementById('chart-area');
    var data = {
        categories: dates,
        series: [
            {
                name: 'Confirmed',
                data: dailyConfirmed
            },
            {
                name: 'Deaths',
                data: dailyDeaths
            }
        ]
    };
    var options = {
        chart: {
            width: 1160,
            height: 650,
            title: '',
        },
        yAxis: {
            title: 'Day'
        },
        xAxis: {
            title: 'Amount',
            max: dailyConfirmed.max
        },
        series: {
            stack: 'normal'
        },
        legend: {
            align: 'bottom'
        }
    };
    var theme = {
        series: {
            colors: [
                '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
                '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
            ]
        }
    };

    // For apply theme

    // tui.chart.registerTheme('myTheme', theme);
    // options.theme = 'myTheme';

    tui.chart.barChart(container, data, options);
};