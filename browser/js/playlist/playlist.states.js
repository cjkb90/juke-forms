'use strict';

juke.config(function($stateProvider){
	$stateProvider.state('playlist',{
		url: 'playlist/new',
		templateUrl: 'js/playlist/playlist.html',
		controller: 'PlaylistCtrl'
	});
});

juke.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});