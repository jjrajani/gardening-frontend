function ProblemsController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })
};

ProblemsController.$inject = ['$rootScope'];
export { ProblemsController };