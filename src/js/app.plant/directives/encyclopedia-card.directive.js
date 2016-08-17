function encyclopediaCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia.tpl.html',
    controller: 'EncyclopediaCardController',
    controllerAs: 'vm'
  };
}

encyclopediaCard.$inject = [];
export { encyclopediaCard };