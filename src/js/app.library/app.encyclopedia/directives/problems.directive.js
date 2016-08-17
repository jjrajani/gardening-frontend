function problemsCard () {
  return {
    restric: 'E',
    scope: {
      plant: '='
    },
    templateUrl: 'templates/library/encyclopedia/problems-card.tpl.html',
    controller: 'ProblemsController',
    controllerAs: 'vm'
  }
}

problemsCard.$inject = [];
export { problemsCard };