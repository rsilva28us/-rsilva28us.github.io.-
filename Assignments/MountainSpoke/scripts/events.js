var weatherRequest = new XMLHttpRequest();


weatherRequest.open('GET','https://rsilva28us.github.io/Assignments/MountainSpoke/states.json', true);

weatherRequest.send();

weatherRequest.onload = function() {
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
}
   






/*
var stateRequest = new XMLHttpRequest();


stateRequest.open('GET', 'https://rsilva28us.github.io/Assignments/MountainSpoke/states.json', true);

stateRequest.send();

stateRequest.onload = function() {
   var stateInfo = JSON.parse(stateRequest.responseText);
    console.log(stateInfo);
    
     document.getElementById('state').innerHTML = stateInfo.state;
     
}*/