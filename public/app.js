angular.module("storeApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url:"/",
    templateUrl: "./templates/home.html",
    controller: "homeCtrl"
  })
  .state("maps", {
    url:"/maps",
    templateUrl: "./templates/maps.html",
  })
  .state("books", {
    url: "/books",
    templateUrl: "./templates/books.html"
  })
  .state("cart", {
    url: "/cart",
    templateUrl: "./templates/cart.html"
  });

  $urlRouterProvider.otherwise("/");
});
