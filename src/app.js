const path = require('path')

const express = require('express')
const hbs = require('hbs')
const wheatherApi = require('./utils/externalWebServices');
const wheather = require('./utils/wheather');
const request = require('request');


const partialsPath = path.join(__dirname, '../templates/partials');
const viewsPath = path.join(__dirname, '../templates/views');



app = express();
app.use(express.static('public'));
app.use(express.static('images'));

app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath);
app.set('views', viewsPath)

app.get('', function (req, res) {
    res.render('homePage')
})

app.get('/bWheather', function (req, res) {
console.log(req.query.address)
    if (req.query.address == undefined) {
    return    res.send({
            error: 'No address is entered'
        })
    }
    wheatherApi(req.query.address, function (error, response) {
        if (error) {
            res.send(error)
        }

        const latitude = response.data[0].latitude;
        const longitude = response.data[0].longitude;
        wheather(latitude, longitude, function (error, responseData) {
            res.send({ data:responseData,
            location:req.query.address });
        })


    })

})





app.get('/about', function (req, res) {

    res.render('about', {
        title: 'This is About me page'
    })
})

app.get('/help', function (req, res) {

    res.render('help', {
        title: 'This is Help page'
    })
})

app.listen(3000, function () {

    console.log('Server is up on port 3000')
})
