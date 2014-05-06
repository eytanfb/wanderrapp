angular.module('wanderr', ['ionic', 'wanderr.controllers', 'wanderr.services']);
angular.module('wanderr.controllers', []);
angular.module('wanderr.services', []);

angular.module('wanderr').run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

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
        'search-map-tab': {
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

