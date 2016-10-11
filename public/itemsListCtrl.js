angular.module("storeApp").controller("itemsListCtrl", function($scope, $state, mainServ){
  $scope.items = [];
  // here's where your getitems will live. now create a function to relate to the liveServer getthings:
  $scope.getItems = function(){
    mainServ.getThings().then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        if(response[i].type == $state.current.name){
          // filter by the type you built into your states in your app.js for each page, then push the filtered response item to your items array...
          $scope.items.push(response[i]);
        }
      }
    });
    // then call it...

  };
  $scope.getItems();

});
