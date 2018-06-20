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
}).controller("HomeController", function ($scope) {
    $scope.loop = 10;
});