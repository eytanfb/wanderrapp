angular.module('wanderr.controllers').controller('SignInCtrl', function($scope, $state, OpenFB)
{
  console.log("sign-in controller called");
  $scope.facebookLogin = function(){
    OpenFB.login('email, user_friends, basic_info')
      .then(function(){
            $state.go('tabs.lists');
          },function(){
            alert('OpenFB login failed');
          });
  };
});
