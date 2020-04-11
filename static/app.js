function myFunc(covid) {
    var myData = JSON.parse(covid);
    var myDataArray = Object.values(myData)
    // console.log(covid.march_26.Apache);
    //console.log(myData)
    console.log(myDataArray)

}


console.log('test')

// Creating map object
// var map = L.map("map", {
//     center: [34.0489, -111.0937],
//     zoom: 7
// });

// Adding tile layer
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: "pk.eyJ1IjoiYmlsbHdwYXJrZXIiLCJhIjoiY2p3dHZhbGdmMG5iZDN5bXFjZjc2dDRjNSJ9.MwvYTJlKb7BRfaZQXW2PBA"
// }).addTo(map);



// var county_data = [
//     {
//         FIPS: 4001,
//         County: "Apache",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [35.39465006, -109.4892383],
//         Confirmed: 39,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Apache,Arizona,US"
//     },
//     {
//         FIPS: 4003,
//         County: "Cochise",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [31.87934684, -109.7516088],
//         Confirmed: 5,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Cochise, Arizona, US"
//     },
//     {
//         FIPS: 4005,
//         County: "Coconino",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [35.83883429, -111.7707178],
//         Confirmed: 175,
//         Deaths: 5,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Coconino,Arizona,US"
//     },
//     {
//         FIPS: 4007,
//         County: "Gila",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [33.80190085, -110.8132779],
//         Confirmed: 2,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Gila, Arizona, US"
//     },
//     {
//         FIPS: 4009,
//         County: "Graham",
//         State: "Arizona",
//         Countr: "US",
//         Date: "4/3/20 22:46",
//         Location: [32.93166885, -109.8882178],
//         Confirmed: 2,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Graham, Arizona, US"
//     },
//     {
//         FIPS: 4011,
//         County: "Greenlee",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [33.21498827, -109.2405279],
//         Confirmed: 1,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Greenlee, Arizona, US"
//     },
//     {
//         FIPS: 4012,
//         County: "La Paz",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [33.72854224, -113.9810029],
//         Confirmed: 2,
//         Death: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "La Paz, Arizona, US"
//     },
//     {
//         FIPS: 4013,
//         County: "Maricopa",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [33.34835867, -112.4918154],
//         Confirmed: 1049,
//         Deaths: 12,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Maricopa, Arizona, US"
//     },
//     {
//         FIPS: 4015,
//         County: "Mohave",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [35.70471703, 113.7577902],
//         Confirmed: 9,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Mohave, Arizona, US"
//     },
//     {
//         FIPS: 4017,
//         County: "Navajo",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [35.3997715, -110.3218983],
//         Confirmed: 245,
//         Deaths: 1,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Navajo,Arizona,US"
//     },
//     {
//         FIPS: 4019,
//         County: "Pima",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [32.0971334, -111.7890033],
//         Confirmed: 280,
//         Deaths: 11,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Pima, Arizona, US"
//     },
//     {
//         FIPS: 4021,
//         County: "Pinal",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [32.90525627, -111.3449483],
//         Confirmed: 77,
//         Deaths: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Pinal, Arizona, US"
//     },
//     {
//         FIPS: 4023,
//         County: "Santa Cruz",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [31.52508998, -110.8479088],
//         Confirmed: 3,
//         Deaths: 0,
//         Recovered: 0,
//         Activ: 0,
//         Combined_Key: "Santa Cruz, Arizona, US"
//     },
//     {
//         FIPS: 90004,
//         County: "Unassigned",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [34.0489, -111.0937],
//         Confirmed: 0,
//         Deaths: 12,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Unassigned, Arizona, US"
//     },
//     {
//         FIPS: 4025,
//         County: "Yavapai",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [34.59933926, -112.5538588],
//         Confirmed: 35,
//         Death: 0,
//         Recovered: 0,
//         Active: 0,
//         Combined_Key: "Yavapai, Arizona, US"
//     },
//     {
//         FIPS: 4027,
//         County: "Yuma",
//         State: "Arizona",
//         Country: "US",
//         Date: "4/3/20 22:46",
//         Location: [32.76895712, -113.9066674],
//         Confirmed: 13,
//         Deaths: 0,
//         Recovere: 0,
//         Active: 0,
//         Combined_Key: "Yuma, Arizona, US"
//     }
// ]

// //console.log(county_data)

// var caseMarkers = []

// // d3.json(county_data, function (data) {
// //     console.log(data)


// // Loop through the county data array
// for (var i = 0; i < county_data.length; i++) {
//     var color = "";
//     // loop through the cities array, create a new marker, push it to the cityMarkers array
//     // caseMarkers.push(
//     //     L.marker(county_data[i].Location)

//     // );

//     // Conditionals for countries cases
//     if (county_data[i].Confirmed > 150) {
//         color = "red";
//     } else if (county_data[i].Confirmed > 100) {
//         color = "orange ";
//     } else if (county_data[i].Confirmed > 50) {
//         color = "yellow";
//     } else {
//         color = "green";
//     }

//     L.circle(county_data[i].Location, {
//         fillOpactiy: 0.9,
//         color: "white",
//         fillColor: color,
//         // Adjust radius
//         radius: county_data[i].Confirmed * 100

//     })
//         .bindPopup(
//             "<h1>" +
//             county_data[i].County + " County" +
//             "</h1><hr><h3> Confirmed Cases: " +
//             county_data[i].Confirmed +
//             "</h3>" + "<h3> Deaths: " + county_data[i].Deaths + "</h3>" +
//             "</h3>" + "<h3> Recovered: " + county_data[i].Recovered + "</h3>"

//         )

//         // .onEachFeature(function (feature, layer) {
//         //     layer.bindPopup(feature.properties.type);
//         // })
//         .addTo(map);
// }






// // Uncomment this link local geojson for when data.beta.nyc is down
var link = "static/az.geojson";

var mapStyle = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.5,
    weight: 1.5
};



// Grabbing our GeoJSON data..
d3.json(link, function (data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
        // Passing in our style object
        style: mapStyle
    }).addTo(map);
});




