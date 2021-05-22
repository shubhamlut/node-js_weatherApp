 



console.log("Client side javaScript file")





let location1 = document.getElementById("location");
let searchBtn = document.getElementById("searchBtn");
let resultSection = document.getElementById("result")

console.log(resultSection);
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

searchBtn.addEventListener('click', function (e) {
    console.log('I clicked')
    resultSection.innerHTML ="";
    address=location1.value;
    e.preventDefault

    let spinnerStr=`<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`

  let spinnerElement = getElementFromString(spinnerStr)

    resultSection.appendChild(spinnerElement);
    

    fetch(`http://localhost:3000/bWheather?address=${address}`).then(function (response) {
    return response.text();
}).then(function (data) {
    retrievedData = JSON.parse(data);
    console.log(retrievedData)
    let string = `<div class="container" id="resultSection">
    <h5> ⦾ Today's temperature in ${retrievedData.location} is ${retrievedData.data.temperature} Degree Celsius</h5>
    <p><b>Its ${retrievedData.data.weather_descriptions[0]} outside today</b></p>
    <h6>More Details:</h6>
    <ul>
      <li>Humidity: ${retrievedData.data.humidity}</li>
      <li>Pressure: ${retrievedData.data.pressure}</li>
      <li>Cloudcover: ${retrievedData.data.cloudcover}</li>
    </ul>

  </div>`

    let resultHtml = getElementFromString(string);
    console.log(resultHtml);
    resultSection.innerHTML ="";
    resultSection.appendChild(resultHtml);
    
})
    
    

    




})

{/* <h5>Today's temperature in Nashik is 32 Degree Celsius</h5>
        <p><b>Its sunny outside</b></p>
        <h6>More Details</h6>
        <ul>
          <li>Humidity</li>
          <li>Wind Speed</li>
        </ul> */}