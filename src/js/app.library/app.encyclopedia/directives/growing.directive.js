function growingCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/growing-card.tpl.html',
    controller: 'GrowingController',
    controllerAs: 'vm'
  }
};

growingCard.$inject = [];
export { growingCard };