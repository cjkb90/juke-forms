'use strict';

juke.config(function($stateProvider){
	$stateProvider.state('playlist',{
		url: '/playlist/new',
		templateUrl: 'js/playlist/playlist.html',
		controller: 'PlaylistCtrl'
	})
	$stateProvider.state('onePlaylist',{
		url: '/playlist/:playlistId',
		templateUrl: 'js/playlist/onePlaylist.html',
		controller: 'PlaylistCtrl',
		resolve: {
			thePlaylist: function(PlaylistFactory, $stateParams){
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
		}
	})
});

