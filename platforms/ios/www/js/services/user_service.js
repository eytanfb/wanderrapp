angular.module("wanderr.services").service('UserService', function(){
  return {
    name: function(){
      return "Eytan";
    },
    publicList: function(){
      return ["public item1", "public item2"];
    },
    privateList: function(){
      return ["private item1", "private item2"];
    }
  };
});
