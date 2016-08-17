function spacingCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/spacing-card.tpl.html',
    controller: 'SpacingController',
    controllerAs: 'vm'
  }
};

spacingCard.$inject = [];
export { spacingCard };