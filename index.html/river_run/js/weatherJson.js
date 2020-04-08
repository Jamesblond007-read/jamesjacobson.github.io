const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.4200&lon=-116.3095&appid=d3b3f6545ed7b253aa0fe4bce7104889"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
document.getElementById('currenttemp').textContent = Math.round(((jsObject.main.temp-273.15)*1.8)+32);
document.getElementById('Temp').textContent = Math.round(((jsObject.main.temp_max-273.15)*1.8)+32);
const temp = document.getElementById('currenttemp').textContent;
    });