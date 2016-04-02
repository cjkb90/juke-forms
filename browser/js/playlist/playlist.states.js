'use strict';

juke.config(function($stateProvider){
	$stateProvider.state('playlist',{
		url: 'playlist/new',
		templateUrl: 'js/playlist/playlist.html',
		controller: 'PlaylistCtrl'
	});
});