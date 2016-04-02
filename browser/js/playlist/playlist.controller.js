juke.controller('PlaylistCtrl',function($scope){
	$scope.createPlaylist = function(){
		console.log('clicked');
	}
	$scope.log = function(){
		console.log($scope.playlistForm);
	}
});