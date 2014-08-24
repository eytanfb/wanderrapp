angular.module("wanderr.services").factory('UserService', ["firebaseRef", "$firebase", "$rootScope",
  function(firebaseRef, $firebase, $rootScope) {
    var service = {};

    service.user = null;
    service.location = {};

    service.setUser = function(user) {
      this.user = {
        facebookData: user,
        appData: checkIfUserExists(user)
      };
    };

    service.setLocation = function(lat, lng){
      service.location.lat = lat;
      service.location.lng = lng;
    };

    function userExistsCallback(user, exists) {
      //console.log(exists);
      var userId = user.id;
      if (!exists) {
        var myUser = firebaseRef.users.child(userId);
        var publicListId = userId + "-1";
        var privateListId = userId + "-2";
        myUser.set({
          facebookId: userId,
          name: user.displayName,
          dateJoined: new Date().toUTCString(),
          lists: [publicListId, privateListId]
        });
        return $firebase(myUser);
      } else {
        return $firebase(firebaseRef.users.child(userId));
      }
    };

    function checkIfUserExists(user) {
      var myUser = {};
      firebaseRef.users.child(user.id).once('value', function(snapshot) {
        var exists = (snapshot.val() !== null);
        myUser = userExistsCallback(user, exists);
        myUser.$on('loaded', function(value) {
          $rootScope.$emit("appDataReceived", {
            appData: value
          });
        });
      });
      return myUser;
    };

    service.publicList = ["public item1", "public item2"];
    service.privateList = ["private item1", "private item2"];

    return service;
  }
]);
