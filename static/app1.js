console.log("test")
function myFunc(confirmed) {
    var data = JSON.parse(confirmed);
    var dates = Object.keys(data.Total);
    var dailyConfirmed = Object.values(data.Total)
    var totalConfirmed = [];
    confirmedAdd = 0

// Create the Trace
var trace1 = {
    x: dates,
    y: dailyConfirmed,
    type: "scatter"
  };

var data = [trace1];

// Define the plot layout
var layout = {
title: "Arizona",
xaxis: { title: "Date" },
yaxis: { title: "Confirmed Cases" }
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("plot", data, layout);

};