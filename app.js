'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngFacebook']);

app.config(function($facebookProvider) {
	$facebookProvider.setAppId('[Your Facebook App ID]'); // Add your ID here
	$facebookProvider.setPermissions("email,publish_actions");
	$facebookProvider.setVersion("v2.2");
});

app.run(function($rootScope){
	(function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});

app.controller('MainController', function MainController($scope, $facebook) {
	$scope.message = "Please Log In";
	$scope.loggedIn = false;

	$scope.login = function(){
		// When user clicked on Login Button
		$facebook.login().then(function() {
	    	getProfile();
	    });
	}

	function getProfile() {
    	// Get user profile
    	$facebook.api("/me").then(
    		function(response) {
    			// Display user data
    			$scope.message = "Welcome, " + response.name;
    			$scope.loggedIn = true;
    		},	
			function(err) {
				console.log('Error. Please contact administrator.')
			}
		);
	}
});