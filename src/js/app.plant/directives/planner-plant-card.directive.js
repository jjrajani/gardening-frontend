function plannerPlantCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/planner/plant-card.tpl.html'
  };
}

plannerPlantCard.$inject = [];
export { plannerPlantCard };