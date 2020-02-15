const temp = parseFloat(document.getElementById('tem').textContent);
const wind = parseFloat(document.getElementById('ws').textContent);


if (t <= 50 && w >= 3){
  const chilly = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16))).toFixed(2);
  document.getElementById('wic').textContent = chilly;
}
else{
    const chilly = ('N/A');
    document.getElementById('wic').textContent = chilly;
}