angular.module("storeApp").service("mainServ", function($http){
  // function to grab widgets:
  this.getThings = function(){
    return $http({
      method: "GET",
      url: "/widget"
    }).then(function(response){
      console.log(response);
      return response.data;
    });
  };
  // this.addCart = function(){
  //   return $http({
  //     method: "POST",
  //     url: "/cart"
  //   }).then(function(response){
  //     return response.data;
  //   });
  // };

});
