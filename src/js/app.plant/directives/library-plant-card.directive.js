function libraryPlantCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/library/plant-card.tpl.html'
  };
}

libraryPlantCard.$inject = [];
export { libraryPlantCard };