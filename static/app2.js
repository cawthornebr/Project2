function myFunc(confirmed) {
    var data = JSON.parse(confirmed);
    var dates = Object.keys(data.Total);
    var dailyConfirmed = Object.values(data.Total)
    var totalConfirmed = [];
    confirmedAdd = 0
    
    for (i=0; i<dailyConfirmed.length; i++) {
        var confirmedAdd = dailyConfirmed[i] + confirmedAdd;
        totalConfirmed.push(confirmedAdd);
    }

var trace1 = {
    x: dates,
    y: dailyConfirmed,
    name: 'Daily Confimed Cases',
    type: 'bar'
  };
  
  var trace2 = {
    x: dates,
    y: totalConfirmed,
    name: 'Total Confirmed Cases',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'grouped'};
  
  Plotly.newPlot('bar', data, layout);
};