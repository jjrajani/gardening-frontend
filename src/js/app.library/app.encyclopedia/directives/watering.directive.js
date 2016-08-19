function wateringCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/watering-card.tpl.html',
    controller: 'WateringController',
    controllerAs: 'vm'
  }
};

wateringCard.$inejct = [];
export { wateringCard };