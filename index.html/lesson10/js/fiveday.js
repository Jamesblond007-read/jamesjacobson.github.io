const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&cnt=40&units=imperial&appid=14a51f776130b3a761aca5072068c8dc"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((forecastData) => {
    console.log(forecastData);
    
    var d = 1;

    var now = new Date();
    var day = now.getDate();
    var daysoftheweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    console.log(day);
for (i=1; i<6; i++) {
    var weekday = day + i;
    if (weekday >= 7) {
        weekday = weekday - 7;
    }
    document.getElementById("day" + i).textContent = daysoftheweek[weekday];
}
for (i=0; i<40; i++) {
    if (forecastData.list[i].dt_txt.includes("18:00:00")) {
        var imagesrc = 'https://openweathermap.org/img/w/' + forecastData.list[i].weather[0].icon + '.png';
        var desc = forecastData.list[i].weather[0].description;
        
        document.getElementById('icon' + d).setAttribute('src', imagesrc);
        document.getElementById('icon' + d).setAttribute('alt', desc);

        document.getElementById('temp' + d).textContent = Math.round(forecastData.list[i].main.temp); 
        d=d+1;}
}
  });