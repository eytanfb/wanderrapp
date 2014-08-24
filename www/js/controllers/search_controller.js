angular.module('wanderr.controllers').controller("SearchCtrl", ["$scope", "GeoFactory", "$rootScope", "UserService",
  function($scope, GeoFactory, $rootScope, UserService) {
    $scope.map = {
      center: {
        latitude: UserService.location.lat,
        longitude: UserService.location.lng
      },
      zoom: 8
    };

    $rootScope.$on("userLocation", function(event, data) {
      $scope.map.center.latitude = data.lat;
      $scope.map.center.longitude = data.lng;
    });

  }
]);
