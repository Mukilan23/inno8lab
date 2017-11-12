  $(".button-collapse").sideNav();
  window.sr = ScrollReveal();
  sr.reveal('.about');
  sr.reveal('.projects');
  sr.reveal('#highlights');
  sr.reveal('.services');
  sr.reveal('#social',{ easing: 'linear(6, 0.2, 0.1, 1)'});

  function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(9.910935, 78.103539),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
