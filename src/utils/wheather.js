const request=require('request');


let wheather = function (latitude,longitude,callback) {

    

    let url = `http://api.weatherstack.com/current?access_key=86b068c1b268c9f53edc433944a59d2f&query=${latitude},${longitude}`
    console.log(url)
    request({ url: url, json: true }, function (error, response) {
        callback(undefined,response.body.current);
       // return 'Current Temperature is ', currentTemp.temperature, 'and its', currentTemp.weather_descriptions[0], 'today';
    })

 

}

module.exports=wheather;