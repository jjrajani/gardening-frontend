function libraryPlantCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/library/plant-card.tpl.html'
  };
}

libraryPlantCard.$inject = [];
export { libraryPlantCard };