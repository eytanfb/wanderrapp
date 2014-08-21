angular.module('wanderr.controllers').controller("SignInCtrl", function($scope, $rootScope, $firebase, $firebaseSimpleLogin, $state) {
  // Get a reference to the Firebase
  var firebaseRef = new Firebase("https://resplendent-fire-4008.firebaseio.com/");

  // Create a Firebase Simple Login object
  $scope.auth = $firebaseSimpleLogin(firebaseRef);

  // Initially set no user to be logged in
  $scope.user = null;

  // Logs a user in with inputted provider
  $scope.login = function(provider) {
    $scope.auth.$login(provider);
  };

  // Logs a user out
  $scope.logout = function() {
    $scope.auth.$logout();
  };

  // Upon successful login, set the user object
  $rootScope.$on("$firebaseSimpleLogin:login", function(event, user) {
    $scope.user = user;
    $state.go("tabs.lists");
  });

  // Upon successful logout, reset the user object and clear cookies
  $rootScope.$on("$firebaseSimpleLogin:logout", function(event) {
    $scope.user = null;

    window.cookies.clear(function() {
      console.log("Cookies cleared!");
    });
  });

  // Log any login-related errors to the console
  $rootScope.$on("$firebaseSimpleLogin:error", function(event, error) {
    console.log("Error logging user in: ", error);
  });
});
