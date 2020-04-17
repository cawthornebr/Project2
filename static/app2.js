function myFunc(confirmed) {
    var data = JSON.parse(confirmed);
    var dates = Object.keys(data.Total);
    var totalConfirmed = Object.values(data.Total)
    var dailyConfirmed = [];
    confirmedAdd = 0
    
    for (i=0; i<totalConfirmed.length; i++) {
        var confirmedAdd = totalConfirmed[i] - totalConfirmed[i-1];
        dailyConfirmed.push(confirmedAdd);
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