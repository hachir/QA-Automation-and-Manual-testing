var checkValidSearch = (driver, weatherData) => {
    driver
        .setValue('.enter-location__input', weatherData.search)
        .click('button')
        .getText('.current-weather__location', function (result) {
            driver
                .verify.ok(result.value === weatherData.result, 'My Result of the getText is the same as my search result')
        })
        .verify.containsText('.current-weather__location', weatherData.result)
        .click('button')
}

module.exports = {
    beforeEach: browser => {
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser
            .end()
    },
    'My Test': browser => {
        var validData = [
            { search: '84601', result: 'Provo' },
            { search: 'San Francisco', result: 'San Francisco' },
            { search: 'London', result: 'London' },
            { search: '43082', result: 'Westerville' },
            { search: '95820', result: 'Sacramento' }
        ]

        // var invalidData = [
        //     { search: ''}
        // ]

        validData.forEach(function (eachThingInMyData) {
            checkValidSearch(browser, eachThingInMyData)
        })
     


    }
}


                  ///////////////method//////////////////////(1)


   // var pepperoni = {
        //     weather: function (weatherData) {
        //         browser
        //             .setValue('.enter-location__input', weatherData.search)
        //             .click('button')
        //             .getText('.current-weather__location', function (anything){
        //             browser
        //                 .verify.ok(anything.value === weatherData.result, 'My Result of the getText is the same as my search result')
        //             })
        //             .verify.containsText('.current-weather__location', weatherData.result)
        //             .click('button')
        //     }
        // }
        // pepperoni.weather(myData[2])





                        //////////// method///////////////// (2)

//   let weather = {}
// module.exports = {
//     beforeEach: browser => {
//         browser
//             .url('https://devmountain-qa.github.io/weatherman/build/index.html')
//             .waitForElementPresent('body')
//     },
//     after: browser => {
//         browser
//             .end()

//             var myData =[
//                 browser
//                     .setValue('.enter-location_input', watherdata.search)
//                     .click('button')
//                     .verify.containsText('.current-weather_location', weatherData.result)
//                     .click('button')
//             ]
//     var pepperoni = {
//                  weather:function (weatherData){
//                     {search: '84061', result: 'Provo'}, 
//                     {search: 'San Francisco', result: 'San Francisco'},
//                     {search: 'London', result: 'London'} 

//             }
//         }

//           pepperoni.weather[2]
//         }
//   }

