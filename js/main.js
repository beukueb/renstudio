var renstudioApp = angular.module('renstudioApp', ['firebase']);

renstudioApp.controller('RenstudioActivities', function RenstudioActivities($scope,$firebaseArray) {
    var ref = firebase.database().ref().child("events");
    $scope.events = $firebaseArray(ref);
});
