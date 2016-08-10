function libraryPlantCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '=',
      name: '@'
    },
    templateUrl: 'templates/library/plant-card.tpl.html'
  };
}

libraryPlantCard.$inject = [];
export { libraryPlantCard };