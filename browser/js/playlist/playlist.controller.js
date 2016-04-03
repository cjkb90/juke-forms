juke.controller('PlaylistCtrl',function($scope, PlaylistFactory, thePlaylist){
	$scope.createPlaylist = function(){
		PlaylistFactory.create($scope.playlist);
		$scope.playlistForm.$dirty=false;
	}

	$scope.playlist = thePlaylist;
});