// create the module and name it scotchApp
var someApp = angular.module('scotchApp', ['ngRoute']);

someApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller : 'aboutController'
    })
});

window.onload = function (){
  console.log(document.getElementById('hammer-pad'));


  var mc = new Hammer(document.getElementById('hammer-pad'));
  mc.on('pan', function(ev){
    alert('The user has panned');
  });
};
