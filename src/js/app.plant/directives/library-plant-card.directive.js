function libraryPlantCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/library/plant-card.tpl.html',
    controller: 'LibraryPlantCardController',
    controllerAs: 'vm'
  };
}

libraryPlantCard.$inject = [];
export { libraryPlantCard };