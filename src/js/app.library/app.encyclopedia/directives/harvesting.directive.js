function harvestingCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '=',
    },
    templateUrl: 'templates/library/encyclopedia/harvesting-card.tpl.html',
    controller: 'HarvestingController',
    controllerAs: 'vm'
  }
};

harvestingCard.$inject = [];
export { harvestingCard };