
var app = angular.module("myApp", ["ui.router","ionic"]);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('page', {
        url: "/page/:id",
        templateUrl: "./App/View/temp/_page.html",
        controller: "pageController"
    });
    $urlRouterProvider.otherwise("/page/server");
});