angular.module('wanderr.controllers').controller('ListsCtrl', function($scope, UserService)
{
  $scope.user = UserService.name();
  $scope.publicList = UserService.publicList();
  $scope.privateList = UserService.privateList();
});
//  var suggestionsRef = new Firebase('https://blazing-fire-2669.firebaseio.com/users/' + $rootScope.user.id + '/suggestions');
//  var queuesRef = new Firebase('https://blazing-fire-2669.firebaseio.com/users/' + $rootScope.user.id + '/queues');
//  $scope.suggestions = $firebase(suggestionsRef);
//  $scope.queues = $firebase(queuesRef);
