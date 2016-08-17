function navCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/nav/navcard.tpl.html',
    controller: 'NavCardController',
    controllerAs: 'vm'
  };
}

navCard.$inject = [];
export { navCard };