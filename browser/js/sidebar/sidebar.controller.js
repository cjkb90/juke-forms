'use strict';

juke.controller('SidebarCtrl', function ($scope, $http, SidebarFactory) {

	$scope.getPlay = function(){
		SidebarFactory.getPlaylists()
		.then(function(response){
			$scope.playlists = response;
		})
	};

	$scope.getPlay();



  // nothing to see here for now… state transitions happening with ui-sref!

});
