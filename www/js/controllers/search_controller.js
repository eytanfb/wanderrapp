angular.module('wanderr.controllers').controller("SearchCtrl", ["$scope", "GeoFactory",
  function($scope, GeoFactory) {
    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    GeoFactory.getLocation().then(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      $scope.map.center.latitude = lat;
      $scope.map.center.longitude = lng;
      console.log($scope.map.center);
    });


  }
]);
