try {
    const options = {month: 'long', weekday: 'long', day: 'numeric',  year: 'numeric'};
    document.getElementById('getdate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
  var date = new Date();
if (date.getDay() == 5) {
    document.getElementById("banner").style.display = "block";
}