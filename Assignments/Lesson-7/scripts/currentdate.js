var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day = [d.getDay()];
var year = [d.getFullYear()];
var daysnames = days[d.getDay()];
var monthsnames = months[d.getMonth()];

document.getElementById("currentdate").innerHTML = daysnames + ", " + day + " " + monthsnames + " " + year;