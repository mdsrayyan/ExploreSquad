var app = angular.module("ExploreSquad", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/Home.html",
        controller : "HomeController"
    })
    .when("/profile", {
        templateUrl : "views/Profile.html",
        controller : "ProfileController"
    });
}).directive("bottomNavigation", function() {
    return {
        restrict : "E",
        replace: true,
        templateUrl: 'views/BottomNavigation.html'
    };
}).directive("cards", function() {
    return {
        restrict : "E",
        replace: true,
        templateUrl: 'views/cards.html'
    };
}).controller("HomeController", function ($scope) {
    $scope.number = 5;
    $scope.getNumber = function(num) {
        return new Array(num);   
    }
});