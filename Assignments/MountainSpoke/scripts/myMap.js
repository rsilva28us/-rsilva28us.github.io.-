
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(45.679611, -111.029169),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

