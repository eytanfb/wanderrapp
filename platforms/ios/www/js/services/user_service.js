angular.module("wanderr.services").factory('UserService', function(){
  var service = {};

  service.user = null;
  
  service.setUser = function (user) {
    this.user = user;
  };

  service.publicList = ["public item1", "public item2"];
  service.privateList = ["private item1", "private item2"];

  return service;
});
