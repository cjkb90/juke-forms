'use strict';

juke.factory('SidebarFactory', function($http){
	var SidebarFactory = {};

	SidebarFactory.getPlaylists = function(){
		return $http.get('/api/playlists')
		.then(function(response){
			return response.data;
		})
	}

	return SidebarFactory;
});