function initMap() {
    let marker;

    // Map
    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(40.7048, -73.6501),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 10
    })

    // Autocomplete
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), 
        { types: ['geocode'] }
    )
    autocomplete.addListener('place_changed', onPlaceChanged);

    // On Place Change
    places = new google.maps.places.PlacesService(map);

    function onPlaceChanged() {
        const place = autocomplete.getPlace();
        const position = place.geometry.location;
        if (place.geometry) {
            map.panTo(position);
            map.setZoom(10);
            search();
            // Marker
            marker = new google.maps.Marker({ position });
            setTimeout(dropMarker(), 1);
        } 
        else document.getElementById('autocomplete').placeholder = 'Enter a city';
    }

    // Legend
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend-computer'));
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(document.getElementById('legend-mobile'));
    
    // Air Quality
    const waqiMapOverlay = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return 'https://tiles.waqi.info/tiles/usepa-aqi/' + zoom + '/' + coord.x + '/' + coord.y + '.png?token=<%=AIR_QUALITY_INDEX_KEY%>';
        },
        name: 'Air Quality',
    })
    map.overlayMapTypes.insertAt(0, waqiMapOverlay);

    // HTML5 geolocation.
    const infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found!');
                infoWindow.open(map);
                map.setCenter(pos);
            }, 
            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            })
        } 
    else handleLocationError(false, infoWindow, map.getCenter());

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    // Set Marker
    function search() {
        const search = { bounds: map.getBounds() };
        clearMarker();
        places.nearbySearch(search, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK && place.geometry) {
                marker = new google.maps.Marker({ position });
                dropMarker();
            }
        })
    }
    function toggleBounce() {
        if (marker.getAnimation() !== null) marker.setAnimation(null);
        else marker.setAnimation(google.maps.Animation.BOUNCE);
    }
    function clearMarker() {
        if(marker) marker.setMap(null);
        if(infoWindow) infoWindow.close();
        marker = null;
    }
    function dropMarker() {
        return function() {
            marker.setMap(map);
            marker.setAnimation(google.maps.Animation.DROP);
            marker.addListener('click', toggleBounce);
        }
    }

    // Bias results towards geolocation
    function geolocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            const geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            const circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            })
            autocomplete.setBounds(circle.getBounds());
            })
        }
    }
}