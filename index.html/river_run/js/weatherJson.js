const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.4200&lon=-116.3095&appid=d3b3f6545ed7b253aa0fe4bce7104889"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
document.getElementById('currenttemp').textContent = Math.round(((jsObject.main.temp-273.15)*1.8)+32);
document.getElementById('Temp').textContent = Math.round(((jsObject.main.temp_max-273.15)*1.8)+32);
const temp = document.getElementById('currenttemp').textContent;
const wind = document.getElementById('WindSpeed').textContent;
const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png';
document.getElementById('icon').setAttribute('src', imagesrc);

var t = parseFloat(temp);
var w = parseFloat(wind);

if (t <= 50 && w >= 3){
  const chilly = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))).toFixed(2);
  document.getElementById('WindChill').textContent = chilly;
}
else{
    const chilly = ('N/A');
    document.getElementById('WindChill').textContent = chilly;
}

    });