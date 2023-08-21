function initMap() {
    const myLatLng = { lat: 21.027763, lng: 105.834160 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      minZoom: 3,
      maxZoom: 15,
      center: myLatLng,
      mapId: "8d193001f940fde3",
    });
  
  
  
    //create list of markers
    const locations = [
      ['Hà Nội', 21.027763, 105.834160],
      ['Hải Dương', 20.940109, 106.333076],
      ['Hải Phòng', 20.864719, 106.683830],
      ['Bắc Ninh', 21.185410, 106.075027],
      ['Hưng Yên', 20.852571, 106.016998],
      ['Bắc Giang', 21.3482329, 106.1606234]
    ];
  
    const placesList = document.getElementById("places");
    const markers = [];
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
      markers.push(marker);
  
      const li = document.createElement("li");
  
      li.textContent = locations[i][0];
      placesList.appendChild(li); // add to results list
      li.addEventListener("click", (function (markerParam) {
        return function () {
          map.setCenter(markerParam.getPosition());
          map.setZoom(13);
        };
      })(marker)); //IIFE
    }
  
  
    // //search 
    // const input = document.getElementById("pac-input");
    // const searchBox = new google.maps.places.SearchBox(input);
  
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
    // map.addListener("bounds_changed", () => {
    //     searchBox.setBounds(map.getBounds());
    // });
  
    // markers = [];
  
    // // Listen for the event fired when the user selects a prediction and retrieve
    // // more details for that place.
    // searchBox.addListener("places_changed", () => {
    //     const places = searchBox.getPlaces();
  
    //     if (places.length == 0) {
    //         return;
    //     }
  
    //     // Clear out the old markers.
    //     markers.forEach((marker) => {
    //         marker.setMap(null);
    //     });
    //     markers = [];
  
    //     // For each place, get the icon, name and location.
    //     const bounds = new google.maps.LatLngBounds();
  
    //     places.forEach((place) => {
    //         if (!place.geometry || !place.geometry.location) {
    //             console.log("Returned place contains no geometry");
    //             return;
    //         }
  
    //         const icon = {
    //             url: place.icon,
    //             size: new google.maps.Size(71, 71),
    //             origin: new google.maps.Point(0, 0),
    //             anchor: new google.maps.Point(17, 34),
    //             scaledSize: new google.maps.Size(25, 25),
    //         };
  
    //         // Create a marker for each place.
    //         markers.push(
    //             new google.maps.Marker({
    //                 map,
    //                 icon,
    //                 title: place.name,
    //                 position: place.geometry.location,
    //             }),
    //         );
    //         if (place.geometry.viewport) {
    //             // Only geocodes have viewport.
    //             bounds.union(place.geometry.viewport);
    //         } else {
    //             bounds.extend(place.geometry.location);
    //         }
    //     });
    //     map.fitBounds(bounds);
  
    // });
  }
  
  window.initMap = initMap;