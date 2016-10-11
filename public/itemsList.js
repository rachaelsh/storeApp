angular.module("storeApp").directive("itemsList", function(){
  return{
    templateUrl: "./templates/itemsList.html",
    restrict: "AE",
    controller: "itemsListCtrl"
  };

});

//
// how do i populate widget?
// not running my items-list element
