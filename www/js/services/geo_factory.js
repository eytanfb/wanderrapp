angular.module('wanderr.services').factory('GeoFactory', function($q) {
  return {
    reverseGeocode: function(lat, lng) {
      var q = $q.defer();

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'latLng': new google.maps.LatLng(lat, lng)
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log('Reverse', results);
          //if(results.length > 0) {
          //  var r = results[0];
          //  var a, types;
          //  var parts = [];
          //  var foundLocality = false;
          //  var foundState = false;
          //  for(var i = 0; i < r.address_components.length; i++) {
          //    a = r.address_components[i];
          //    types = a.types;
          //    for(var j = 0; j < types.length; j++) {
          //      if(!foundLocality && types[j] == 'locality') {
          //        foundLocality = true;
          //        parts.push(a.long_name);
          //      } else if(!foundState && types[j] == 'administrative_area_level_1') {
          //        foundState = true;
          //        parts.push(a.short_name);
          //      }
          //    }
          //  }
          //  console.log('Reverse', parts);
          //  q.resolve(parts.join(' '));
            q.resolve(results[0].formatted_address);
          //}
        } else {
          console.log('reverse fail', results, status);
          q.reject(results);
        }
      })

      return q.promise;
    },
    getLocation: function() {
      var q = $q.defer();

      navigator.geolocation.getCurrentPosition(function(position) {
        q.resolve(position);
        console.log("position: " + position);
      }, function(error) {
        q.reject(error);
      });

      return q.promise;
    }
  };
})
