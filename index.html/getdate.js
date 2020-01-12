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
let fulldate = dayNames + "," + monthsName + " " + d.getDate() +", " + year;


document.getElementById("getdate").textContent = fulldate;


try {
    let options = {
        weekday: "numeric",
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };
    document.getElementById(
        "getdate2"
    ).textContent = new Date().modifed("en-US",options);
} catch (e){
    alert("Error with the browser with the browser");
}