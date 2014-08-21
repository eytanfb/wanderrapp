angular.module('wanderr', ['ionic', 'firebase', 'wanderr.controllers', 'wanderr.services']);
angular.module('wanderr.controllers', []);
angular.module('wanderr.services', []);

angular.module('wanderr').run(function($ionicPlatform, $rootScope, $state, $window) {

  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      console.log("statusbar");
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState){
    if (toState.name !== "signin" && toState.name !== "tabs.logout" && !$window.sessionStorage['fbtoken']){
      $state.go("signin");
      console.log("getting to signin");
      event.preventDefault();
    }
  });

  $rootScope.$on('OAuthException', function(){
    $state.go('signin');
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      controller: 'SignInCtrl',
      templateUrl: "templates/sign-in.html"
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.lists', {
      url: "/lists",
      views: {
        'lists-tab' : {
          controller: "ListsCtrl",
          templateUrl: "templates/lists.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

});

