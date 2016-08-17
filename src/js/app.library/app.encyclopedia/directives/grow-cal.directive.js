function growCalCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/growCal-card.tpl.html',
    controller: 'GrowCalController',
    controllerAs: 'vm'
  }
};

growCalCard.$inject = [];
export { growCalCard };