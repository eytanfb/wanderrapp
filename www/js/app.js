// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('wanderr', ['ionic', 'wanderr.controllers', 'wanderr.services']);
angular.module('wanderr.controllers', []);

angular.module('wanderr').run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
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
    })
    .state('tabs.search-map', {
      url: "/search-map",
      views: {
        'search-map': {
          templateUrl: "templates/search-map.html",
					controller: "SearchMapCtrl"
        }
      }
    })
    .state('tabs.search-list', {
      url: "/search-list",
      views: {
        'search-map': {
          templateUrl: "templates/search-list.html",
          controller: 'SearchListCtrl'
        }
      }
    })
    .state('tabs.item-info', {
      url: "/item-info/:itemId",
      views: {
        'search-map': {
          templateUrl: "templates/item-info.html",
          controller: 'ItemInfoCtrl'
        }
      }
    })
    .state('tabs.suggestions', {
      url: "/suggestions",
      views: {
        'suggestions-tab': {
          templateUrl: "templates/suggestions.html",
					controller: "SuggestionsCtrl"
        }
      }
    })
    .state('tabs.make-suggestion',{
      url: "/suggestions/make/:foursquare_id",
      views:{
          'suggestions-tab':{
            templateUrl: "templates/make_suggestion.html",
            controller: 'MakeSuggestionCtrl'
          }
        }
    })
    .state('tabs.myself', {
      url: "/myself",
      views: {
        'myself-tab': {
          templateUrl: "templates/myself.html",
					controller: "MyselfCtrl"
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/lists');

});

