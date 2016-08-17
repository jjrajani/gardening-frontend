function startingCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/starting-card.tpl.html',
    controller: 'StartingController',
    controllerAs: 'vm'
  }
}

startingCard.$inject = [];
export { startingCard };