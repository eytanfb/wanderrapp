angular.module('wanderr.controllers').controller("MyselfCtrl", function($scope, UserService) {
  console.log("myself");
  $scope.user = UserService.user;
  console.log($scope.user);
  $scope.profilePicture = $scope.user.thirdPartyUserData.picture.data.url;
});
