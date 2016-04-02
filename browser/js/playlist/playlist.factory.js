'use strict';

juke.factory('PlaylistFactory',function($http){
	var PlaylistFactory = {};

	PlaylistFactory.create = function(data){
		return $http.post('/api/playlists', data)
		.then(function(response){
			data.name = '';//Reset the input field
			console.log(data);
			return response.data;
		});
	}

	return PlaylistFactory;
})