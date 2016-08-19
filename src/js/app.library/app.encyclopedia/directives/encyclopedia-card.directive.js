function encyclopediaCard () {
  return {
    restrict: 'E',
    scope: {
      current: '=',
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia.tpl.html',
    controller: 'EncyclopediaCardController',
    controllerAs: 'vm'
  };
}

encyclopediaCard.$inject = [];
export { encyclopediaCard };