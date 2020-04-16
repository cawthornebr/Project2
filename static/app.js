function coordinateData(covid, coordinates) {
    var myCovidData = JSON.parse(covid);
    var dates = Object.keys(myCovidData)
    var myCovidArray = Object.values(myCovidData)
    var myCoordinateData = JSON.stringify(coordinates);

    var latitude = myCovidData[0]
    var longitude = myCovidData[1]
    //console.log(myCovidArray)

    // for (var i = 0; i < myCovidArray.length; i++) {
    //     var dateData = myCovidArray[i]
    //     //console.log(dateData)
    //     if (dateData.keys === "Apache") {
    //         console.log(dateData)
    //     }

    var county_data = [
        {
            County: "Apache",
            Location: [35.39465006, -109.4892383],
        },
        {

            County: "Cochise",
            Location: [31.87934684, -109.7516088],

        },
        {

            County: "Coconino",
            Location: [35.83883429, -111.7707178],

        },
        {

            County: "Gila",
            Location: [33.80190085, -110.8132779],

        },
        {

            County: "Graham",
            Location: [32.93166885, -109.8882178],

        },
        {

            County: "Greenlee",
            Location: [33.21498827, -109.2405279],

        },
        {

            County: "La Paz",
            Location: [33.72854224, -113.9810029],

        },
        {

            County: "Maricopa",
            Location: [33.34835867, -112.4918154],

        },
        {

            County: "Mohave",
            Location: [35.70471703, 113.7577902],

        },
        {

            County: "Navajo",
            Location: [35.3997715, -110.3218983],

        },
        {

            County: "Pima",
            Location: [32.0971334, -111.7890033],

        },
        {

            County: "Pinal",
            Location: [32.90525627, -111.3449483],

        },
        {

            County: "Santa Cruz",
            Location: [31.52508998, -110.8479088],

        },
        {

            County: "Unassigned",
            Location: [34.0489, -111.0937],

        },
        {

            County: "Yavapai",
            Location: [34.59933926, -112.5538588],

        },
        {

            County: "Yuma",
            Location: [32.76895712, -113.9066674],

        }
    ]

    var cases = []

    for (var i = 0; i < county_data.length; i++) {
        var mappingData = county_data.concat(myCovidArray[i])
        var county = mappingData[i].County
        //console.log(county)
        var location = mappingData[i].Location

        //console.log(location)
        var confirmedCases = mappingData[16]
        //console.log(confirmedCases)

        cases.push(county, location, confirmedCases)

        L.circle(location, {
            fillOpactiy: 0.9,
            color: "white",
            fillColor: "red",
            // Adjust radius
            radius: 1000

        })

    }

    //console.log(cases)
    var hello = Object.assign({}, cases)
    // console.log(hello)


    var myMapData = JSON.stringify(hello)
    //console.log(myMapData)


    myMapData = myMapData.replace("0", "County")
    myMapData = myMapData.replace("1", "Coordinates")
    myMapData = myMapData.replace(`,"2"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"3"`, `,"County"`)
    myMapData = myMapData.replace(`,"4"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"5"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"6"`, `,"County"`)
    myMapData = myMapData.replace(`,"7"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"8"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"9"`, `,"County"`)
    myMapData = myMapData.replace(`,"10"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"11"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"12"`, `,"County"`)
    myMapData = myMapData.replace(`,"13"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"14"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"15"`, `,"County"`)
    myMapData = myMapData.replace(`,"16"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"17"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"18"`, `,"County"`)
    myMapData = myMapData.replace(`,"19"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"20"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"21"`, `,"County"`)
    myMapData = myMapData.replace(`,"22"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"23"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"24"`, `,"County"`)
    myMapData = myMapData.replace(`,"25"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"26"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"27"`, `,"County"`)
    myMapData = myMapData.replace(`,"28"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"29"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"30"`, `,"County"`)
    myMapData = myMapData.replace(`,"31"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"32"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"33"`, `,"County"`)
    myMapData = myMapData.replace(`,"34"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"35"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"36"`, `,"County"`)
    myMapData = myMapData.replace(`,"37"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"38"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"39"`, `,"County"`)
    myMapData = myMapData.replace(`,"40"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"41"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"42"`, `,"County"`)
    myMapData = myMapData.replace(`,"43"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"44"`, `,"Dates"`)
    myMapData = myMapData.replace(`,"45"`, `,"County"`)
    myMapData = myMapData.replace(`,"46"`, `,"Coordinates"`)
    myMapData = myMapData.replace(`,"47"`, `,"Dates"`)

    //console.log(myMapData)

    var dataToMap = [
        {
            County: "Apache",
            Coordinates: [
                35.39465006,
                -109.4892383
            ],
            Dates: {
                "March_24": "4",
                "March_25": "7",
                "March_26": "9",
                "March_27": "11",
                "March_28": "13",
                "March_29": "13",
                "March_30": "17",
                "March_31": "16",
                "April_1": "33",
                "April_2": "35",
                "April_3": "39",
                "April_4": "42",
                "April_5": "45",
                "April_6": "58",
                "April_7": "65",
                "April_8": "78"
            }
        },
        {
            County: "Cochise",
            Coordinates: [
                31.87934684,
                -109.7516088
            ],
            Dates: {
                "March_24": "1",
                "March_25": "1",
                "March_26": "2",
                "March_27": "2",
                "March_28": "3",
                "March_29": "3",
                "March_30": "4",
                "March_31": "4",
                "April_1": "4",
                "April_2": "4",
                "April_3": "5",
                "April_4": "7",
                "April_5": "8",
                "April_6": "9",
                "April_7": "9",
                "April_8": "9"
            }
        },
        {
            County: "Coconino",
            Coordinates: [
                35.83883429,
                -111.7707178
            ],
            Dates: {
                "March_24": "18",
                "March_25": "23",
                "March_26": "28",
                "March_27": "41",
                "March_28": "56",
                "March_29": "62",
                "March_30": "71",
                "March_31": "81",
                "April_1": "117",
                "April_2": "146",
                "April_3": "175",
                "April_4": "196",
                "April_5": "238",
                "April_6": "257",
                "April_7": "281",
                "April_8": "288"
            }
        },
        {
            County: "Gila",
            Coordinates: [
                33.80190085,
                -110.8132779
            ],
            Dates: {
                "March_24": "0",
                "March_25": "0",
                "March_26": "0",
                "March_27": "0",
                "March_28": "1",
                "March_29": "1",
                "March_30": "1",
                "March_31": "1",
                "April_1": "1",
                "April_2": "2",
                "April_3": "2",
                "April_4": "3",
                "April_5": "3",
                "April_6": "3",
                "April_7": "3",
                "April_8": "3"
            }
        },
        {
            County: "Graham",
            Coordinates: [
                32.93166885,
                -109.8882178
            ],
            Dates: {
                "March_24": "2",
                "March_25": "2",
                "March_26": "2",
                "March_27": "4",
                "March_28": "2",
                "March_29": "2",
                "March_30": "2",
                "March_31": "2",
                "April_1": "2",
                "April_2": "2",
                "April_3": "2",
                "April_4": "3",
                "April_5": "2",
                "April_6": "2",
                "April_7": "2",
                "April_8": "2"
            }
        },
        {
            County: "Greenlee",
            Coordinates: [
                33.21498827,
                -109.2405279
            ],
            Dates: {
                "March_24": "0",
                "March_25": "0",
                "March_26": "0",
                "March_27": "0",
                "March_28": "0",
                "March_29": "0",
                "March_30": "1",
                "March_31": "1",
                "April_1": "1",
                "April_2": "1",
                "April_3": "1",
                "April_4": "1",
                "April_5": "1",
                "April_6": "1",
                "April_7": "1",
                "April_8": "1"
            }
        },
        {
            County: "La Paz",
            Coordinates: [
                33.72854224,
                -113.9810029
            ],
            Dates: {
                "March_24": "0",
                "March_25": "0",
                "March_26": "2",
                "March_27": "2",
                "March_28": "2",
                "March_29": "2",
                "March_30": "2",
                "March_31": "2",
                "April_1": "2",
                "April_2": "2",
                "April_3": "2",
                "April_4": "2",
                "April_5": "3",
                "April_6": "3",
                "April_7": "3",
                "April_8": "3"
            }
        },
        {
            County: "Maricopa",
            Coordinates: [
                33.34835867,
                -112.4918154
            ],
            Dates: {
                "March_24": "199",
                "March_25": "251",
                "March_26": "299",
                "March_27": "399",
                "March_28": "454",
                "March_29": "545",
                "March_30": "690",
                "March_31": "788",
                "April_1": "871",
                "April_2": "961",
                "April_3": "1049",
                "April_4": "1171",
                "April_5": "1326",
                "April_6": "1433",
                "April_7": "1495",
                "April_8": "1559"
            }
        },
        {
            County: "Mohave",
            Coordinates: [
                35.70471703,
                113.7577902
            ],
            Dates: {
                "March_24": "0",
                "March_25": "0",
                "March_26": "2",
                "March_27": "4",
                "March_28": "5",
                "March_29": "6",
                "March_30": "7",
                "March_31": "7",
                "April_1": "7",
                "April_2": "8",
                "April_3": "9",
                "April_4": "12",
                "April_5": "16",
                "April_6": "20",
                "April_7": "23",
                "April_8": "23"
            }
        },
        {
            County: "Navajo",
            Coordinates: [
                35.3997715,
                -110.3218983
            ],
            Dates: {
                "March_24": "32",
                "March_25": "37",
                "March_26": "43",
                "March_27": "49",
                "March_28": "57",
                "March_29": "62",
                "March_30": "88",
                "March_31": "91",
                "April_1": "171",
                "April_2": "198",
                "April_3": "245",
                "April_4": "274",
                "April_5": "307",
                "April_6": "359",
                "April_7": "378",
                "April_8": "404"
            }
        },
        {
            County: "Pima",
            Coordinates: [
                32.0971334,
                -111.7890033
            ],
            Dates: {
                "March_24": "42",
                "March_25": "49",
                "March_26": "75",
                "March_27": "102",
                "March_28": "120",
                "March_29": "153",
                "March_30": "187",
                "March_31": "202",
                "April_1": "217",
                "April_2": "237",
                "April_3": "280",
                "April_4": "326",
                "April_5": "372",
                "April_6": "415",
                "April_7": "415",
                "April_8": "464"
            }
        },
        {
            County: "Pinal",
            Coordinates: [
                32.90525627,
                -111.3449483
            ],
            Dates: {
                "March_24": "22",
                "March_25": "23",
                "March_26": "35",
                "March_27": "36",
                "March_28": "41",
                "March_29": "51",
                "March_30": "64",
                "March_31": "62",
                "April_1": "65",
                "April_2": "69",
                "April_3": "77",
                "April_4": "89",
                "April_5": "103",
                "April_6": "106",
                "April_7": "120",
                "April_8": "124"
            }
        },
        {
            County: "Santa Cruz",
            Coordinates: [
                31.52508998,
                -110.8479088
            ],
            Dates: {
                "March_24": "1",
                "March_25": "1",
                "March_26": "2",
                "March_27": "2",
                "March_28": "2",
                "March_29": "2",
                "March_30": "2",
                "March_31": "2",
                "April_1": "3",
                "April_2": "3",
                "April_3": "3",
                "April_4": "4",
                "April_5": "4",
                "April_6": "4",
                "April_7": "5",
                "April_8": "6"
            }
        },
        {
            County: "Yavapai",
            Coordinates: [
                34.59933926,
                -112.5538588
            ],
            Dates: {
                "March_24": "2",
                "March_25": "3",
                "March_26": "4",
                "March_27": "4",
                "March_28": "4",
                "March_29": "5",
                "March_30": "6",
                "March_31": "9",
                "April_1": "12",
                "April_2": "13",
                "April_3": "13",
                "April_4": "14",
                "April_5": "13",
                "April_6": "13",
                "April_7": "13",
                "April_8": "14"
            }
        },
        {
            County: "Yuma",
            Coordinates: [
                32.76895712,
                -113.9066674
            ],
            Dates: {
                "March_24": "3",
                "March_25": "4",
                "March_26": "5",
                "March_27": "9",
                "March_28": "13",
                "March_29": "12",
                "March_30": "15",
                "March_31": "21",
                "April_1": "24",
                "April_2": "34",
                "April_3": "35",
                "April_4": "43",
                "April_5": "45",
                "April_6": "49",
                "April_7": "57",
                "April_8": "58"
            }
        }
    ]



    // var caseMarkers = []

    // for (var i = 0; i < dataToMap.length; i++) {
    //     var color = "";

    //     if (dataToMap[i].Dates === "March_24") {
    //         color = "red"
    //     }
    // }
    // L.circle(dataToMap.Coordinates, {
    //     fillOpacity: 0.9,
    //     color: "green",
    //     fillColor: "orange",
    //     radius: 50
    // }).bindPopup(
    //     "<h1>" + dataToMap.County + "County" + "</h1>"
    //     // + "<h3>" + "Confirmed Cases" + dataToMap[i].Dates.March_24[i] + "</h3>"
    // ).addTo(map)



    // // Uncomment this link local geojson for when data.beta.nyc is down
    // var link = "static/az.geojson";


    // var mapStyle = {
    //     color: "white",
    //     fillColor: "white",
    //     fillOpacity: 0.2,
    //     weight: 1.5
    // };



    // // Grabbing our GeoJSON data..
    // d3.json(link, function (dataToMap) {
    //     // Creating a geoJSON layer with the retrieved data
    //     L.geoJson(dataToMap, {
    //         // Passing in our style object
    //         style: mapStyle
    //     }).addTo(map);
    // });


}



