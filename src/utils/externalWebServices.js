const request = require('request'); //This npm package is used to call any API


//Using the weatherStack.com API ---APi Key 86b068c1b268c9f53edc433944a59d2f   Base URL: http://api.weatherstack.com/
//using the Positionstack api to get the lattitude and longitudes --API key 1769883795cfde5ab544d60685be94a8   Base URL:http://api.positionstack.com/v1/

const URL = 'http://api.weatherstack.com/current?access_key=86b068c1b268c9f53edc433944a59d2f&query=37.8267,-122.4233'
const positionstackURL = 'http://api.positionstack.com/v1/forward?access_key=1769883795cfde5ab544d60685be94a8&query=Nashik'


// request({url:URL,json:true},function(error,response){
// let currentTemp = response.body.current;
// //console.log('Current Temperature is ',currentTemp.temperature, 'and its',currentTemp.weather_descriptions[0],'today');
// })


let getWheather = function (address, callback) {

    request({ url: `http://api.positionstack.com/v1/forward?access_key=1769883795cfde5ab544d60685be94a8&query=${address}`, json: true }, function (error, response) {
        
    console.log(`http://api.positionstack.com/v1/forward?access_key=1769883795cfde5ab544d60685be94a8&query=${address}`);
    console.log(error);
        if (error) {

            callback('Unable to connect to service! Please check your network connectivity', undefined)
        }
        else {

            console.log("Response Successfully")
            console.log(response.body)
            callback(undefined, response.body)
          
        }




    })

}

module.exports = getWheather;





