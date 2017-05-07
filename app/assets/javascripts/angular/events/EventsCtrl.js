var app = angular.module('angularExample');

app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event) {
  $scope.events = Event.query();

  $scope.addEvent = function() {
    if (!valid()) {
      return false;
    }

    $scope.events.push({
      name: $scope.event.name,
      event_date: $scope.event.event_date,
      description: $scope.event.description,
      place: $scope.event.place
    });

    $scope.event.name = '';
    $scope.event.description = '';
    $scope.event.event_date = '';
    $scope.event.place = '';
  };

  valid = function() {
    return !!$scope.event &&
      !!$scope.event.name && !!$scope.event.event_date &&
      !!$scope.event.description && !!$scope.event.place;
  }
}]);