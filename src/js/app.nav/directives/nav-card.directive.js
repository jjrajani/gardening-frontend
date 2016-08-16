function navCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/nav/nav-card.tpl.html',
    controller: 'NavCardController',
    controllerAs: 'vm'
  };
}

navCard.$inject = [];
export { navCard };