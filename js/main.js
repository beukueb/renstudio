var renstudioApp = angular.module('renstudioApp', ['firebase']);

renstudioApp.controller('RenstudioActivities', function RenstudioActivities($scope,$firebaseObject) {
    var database = firebase.database();
    $scope.data = $firebaseObject(database);
    $scope.events = [
	{
	    title: 'Rivier',
	    message: 'Nog plaatsen beschikbaar',
	    date: 'Zondag 25/09/2016',
	    time: '14-18u',
	    image: '37.jpg'
	}, {
	    title: 'Bos bij zonsondergang',
	    message: 'Nog plaatsen beschikbaar',
	    date: 'Zondag 23/10/2016',
	    time: '14-18u',
	    image: '16.jpg'	    
	}, {
	    title: 'Lotus',
	    message: 'Nog plaatsen beschikbaar',
	    date: 'Zondag 27/11/2016',
	    time: '14-18u',
	    image: '52.jpg'	    
	}, {
	    title: 'Sneeuwlandschap',
	    message: 'Nog plaatsen beschikbaar',
	    date: 'Zondag 18/12/2016',
	    time: '14-18u',
	    image: '43.jpg'	    
	}
  ];
});
