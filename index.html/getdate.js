let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayNames = daynames[d.getDate()];
let monthsName = months[d.getMonth()];
let year = d.getFullYear();
let options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    document.getElementById(
        "getdate2"
    ).textContent = new Date().toLocaleDateString(options);
    try {
        document.getElementById('currentYear').innerHTML = new Date().getFullYear();
    }
    catch (e) {
        alert ["Your browser does not support this function"]
    }
    
    try {
        document.getElementById('lastUpdated').innerHTML = new Date().toLocaleDateString("en-US") + " " + new Date().toLocaleTimeString("en-US");
    }
    catch (e) {
        alert ["Your browser does not support this function"]
    }
    
