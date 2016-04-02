juke.controller('PlaylistCtrl',function($scope, PlaylistFactory){
	$scope.createPlaylist = function(){
		PlaylistFactory.create($scope.playlist);
		$scope.playlistForm.$dirty=false;
	}
});