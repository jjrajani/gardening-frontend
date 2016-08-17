function overviewCard () {
  return {
    restrict: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/overview-card.tpl.html',
    controller: 'OverviewController',
    controllerAs: 'vm'
  }
};

overviewCard.$inject = [];
export { overviewCard };