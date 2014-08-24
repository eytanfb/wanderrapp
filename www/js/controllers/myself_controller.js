angular.module('wanderr.controllers').controller("MyselfCtrl", ["$scope", "UserService", "$rootScope",
  function($scope, UserService, $rootScope) {
    console.log("myself");
    $scope.user = UserService.user;
    console.log("myself user: " + $scope.user);
    $scope.displayName = $scope.user.facebookData.displayName;
    $scope.profilePicture = $scope.user.facebookData.thirdPartyUserData.picture.data.url;
    $scope.dateJoined = new Date($scope.user.appData.dateJoined).toLocaleDateString();
    $rootScope.$on("appDataReceived", function(event, data) {
      $scope.user.appData = data.appData;
      $scope.dateJoined = new Date(data.appData.dateJoined).toLocaleDateString();
    });
  }
]);
