angular.module("storeApp").controller("cartCtrl", function($scope, mainServ){
  $scope.cartCreate = function(){
    mainServ.addCart().then(function(response){
      console.log(response);
      $scope.cart = response;
    });
  };
  $scope.cartCreate;
});
