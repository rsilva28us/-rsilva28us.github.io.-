var stateRequest = new XMLHttpRequest();


stateRequest.open('GET', rsilva28us.github.io/Assignments/MountainSpoke/states.json', true);

stateRequest.send();

stateRequest.onload = function() {
   var stateInfo = JSON.parse(stateRequest.responseText);
    console.log(stateInfo);
    
     document.getElementById('state').innerHTML = stateInfo.name;
     
}