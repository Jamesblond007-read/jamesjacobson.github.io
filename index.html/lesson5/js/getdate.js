try {
    const options = {month: 'long', weekday: 'long', day: 'numeric',  year: 'numeric'};
    document.getElementById('getdate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
  var pancake = new Date();
if(pancake.getDay() == 6) 
{
    document.getElementById("banner").style.display = "block";
}