angular.module('wanderr.controllers').controller('ListsCtrl', function(){

//	$scope.user = $rootScope.user;
//	$scope.headerTitle = $scope.user.displayName;
//	$scope.headerTitle += "'s Lists";
//
//	$scope.items;
//
//  var suggestionsRef = new Firebase('https://blazing-fire-2669.firebaseio.com/users/' + $rootScope.user.id + '/suggestions');
//  var queuesRef = new Firebase('https://blazing-fire-2669.firebaseio.com/users/' + $rootScope.user.id + '/queues');
//  $scope.suggestions = $firebase(suggestionsRef);
//  $scope.queues = $firebase(queuesRef);
//
//	$scope.queues.$on('loaded', function(){
//		$scope.items = $scope.queues;
//	});
//
//	$scope.togglePublic = function(){
//		$(".public-list-item").each(function() {
//				if($(this).is(":visible"))
//					$(this).fadeOut();
//				else
//					$(this).fadeIn();
//		});
//	};
//
//	$scope.togglePrivate = function(){
//		$(".private-list-item").each(function() {
//				if($(this).is(":visible"))
//					$(this).fadeOut();
//				else
//					$(this).fadeIn();
//		});
//	};
//
//	$scope.changeVisibility = function(item){
//		if(item.visibility == "public"){
//			item.visibility = "private";
//    }
//		else {
//			item.visibility = "public";
//    }
//    $scope.queues.$child(item.name).$update(item);
//	}
//
//	$scope.removeElement = function(item){
//    $scope.queues.$remove(item.name);
//	}
//
//  $scope.complete = function(item) {
//    item.completed = true;
//    $scope.queues.$child(item.name).$update(item);
//    $scope.loading = $ionicLoading.show({
//          content: item.name+" completed!",
//          showBackdrop: false
//        });
//        $timeout(function(){
//          $scope.loading.hide();
//          $state.go("tabs.list");
//        }, 1000);
//  }
//
//	$scope.viewInfo = function(item){
//		$state.go("tabs.item-info", {"itemId": item.foursquare_id});
//	}

});
