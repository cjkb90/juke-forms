'use strict';

// juke.factory('PlaylistFactory',function($http){
// 	var PlaylistFactory = {};

// 	PlaylistFactory.create = function(data){
// 		return $http.post('/api/playlists', data)
// 		.then(function(response){
// 			data.name = '';//Reset the input field
// 			return response.data;
// 		});
// 	}

// 	return PlaylistFactory;
// })

juke.factory('PlaylistFactory', function ($http) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.fetchAll = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

   PlaylistFactory.fetchById = function (playlistId) {
    return $http.get('/api/playlists/'+playlistId)
    .then(function (response) {
      return response.data;
    })
    .then(function(onePlaylist){
      return onePlaylist;
    })
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data
      cachedPlaylists.push(playlist);
      data.name = '';//Reset the input field
      return playlist;
    });
  };

  return PlaylistFactory;

});