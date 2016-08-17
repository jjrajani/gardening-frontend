function encycNavCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/encyc-nav-card.tpl.html',
    controller: 'EncycNavController',
    controllerAs: 'vm'
  }
}

encycNavCard.$inject = [];
export { encycNavCard };