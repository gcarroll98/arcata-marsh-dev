/* var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	zoom: 18,
	center: {lat: 40.858550, lng: -124.090055 } 
	});
} */

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.856164, lng: -124.095262 },
    zoom: 16,
  });

  // The following four lines are how you creat a marker for a point of interest in the map.
  var Janes = { lat: 40.862950, lng: -124.096684 };
  var marker = new google.maps.Marker({ position: Janes, map, map, title: "Janes Creek Watershed"});
  var info = new google.maps.InfoWindow({ content: '<p>Janes Creek Watershed <img src="https://abbottjord94.github.io/arcata-marsh-dev/images/JanesCreekWatershed.png" alt="Janes Creek Watershed trail sign"></p>'})
  marker.addListener('click', function() {info.open(map, marker);});
  
  var Grass = { lat: 40.8568738, lng: -124.0902325 };
  var marker1 = new google.maps.Marker({ position: Grass, map, map, title: "Grassland Grocery"});
  var info1 = new google.maps.InfoWindow({ content: '<p>Grassland Grocery <img src="https://github.com/abbottjord94/arcata-marsh-dev/blob/main/images/GrasslandGrocery.jpeg" alt="Grassland Grocery trail sign"></p>'})
  marker1.addListener('click', function() {info1.open(map, marker1);});

  var Otters = { lat: 40.8579984, lng: -124.0944966 };
  var marker2 = new google.maps.Marker({ position: Otters, map, map, title: "Look for Signs of River Otters"});
  var info2 = new google.maps.InfoWindow({ content: '<p>Look for Signs of River Otters<img src="https://github.com/abbottjord94/arcata-marsh-dev/blob/main/images/RiverOtters.jpeg" alt="River Otters trail sign"></p>'})
  marker2.addListener('click', function() {info2.open(map, marker2);});
  
  var Home = { lat: 40.8573072, lng: -124.0939142 };
  var marker3 = new google.maps.Marker({ position: Home, map, map, title: "Where's My Home?"});
  var info3 = new google.maps.InfoWindow({ content: '<p>Where is my Home?<img src="https://github.com/abbottjord94/arcata-marsh-dev/blob/main/images/HomeMarker.jpeg" alt="My home trail sign"></p>'})
  marker3.addListener('click', function() {info3.open(map, marker3);});

  var Herons = { lat: 40.8560547, lng: -124.0930230 };
  var marker4 = new google.maps.Marker({ position: Herons, map, map, title: "Do you see Black-Crowned Night-Herons?"});
  var info4 = new google.maps.InfoWindow({ content: '<p>Black-crowned Night-Herons<img src="https://github.com/abbottjord94/arcata-marsh-dev/blob/main/images/Herons.jpeg" alt="Night-Herons trail sign"></p>'})
  marker4.addListener('click', function() {info4.open(map, marker4);});

  var Face = { lat: 40.8553200, lng: -124.0982000 };
  var marker5 = new google.maps.Marker({ position: Face, map, map, title: "The Changing Face of a Place"});
  var info5 = new google.maps.InfoWindow({ content: '<p>The Changing Face of a Place<img src="https://github.com/abbottjord94/arcata-marsh-dev/blob/main/images/ChangingFace.jpeg" alt="Changing Face trail sign"></p>'})
  marker5.addListener('click', function() {info5.open(map, marker5);});
  
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Your Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

