angular.module('starter.controllers', [])

  .controller("loginController", function($scope,$cordovaOauth,$location) {

    $scope.loginFacebook = function() {
        $cordovaOauth.facebook("0000000000", ["email"]).then(function(result) {
            // results

           localStorage.setItem("loginExitoso", result.access_token);
           $location.path("/bienvenido");
        }, function(error) {
            // error
            console.log(error);
        });



    };

    $scope.loginGoogle = function() {
        $cordovaOauth.google("000000000000000000000", ["email"]).then(function(result) {
            // results

           localStorage.setItem("loginExitoso", result.access_token);
           $location.path("/bienvenido");
        }, function(error) {
            // error
            console.log(error);
        });



    };

 

  })
  .controller("bienvenidoController", function($scope) {

    $scope.login = function() {
      alet();
    };

 

  });
