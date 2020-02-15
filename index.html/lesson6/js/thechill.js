const temp = document.getElementById('tem').textContent;
const wind = document.getElementById('ws').textContent;

var t = parseFloat(temp);
var w = parseFloat(wind);
if (t <= 50 && w >= 3){
  const chilly = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  document.getElementById('wic').textContent = chilly;
}
else{
    const chilly = ('N/A');
    document.getElementById('wic').textContent = chilly;
}