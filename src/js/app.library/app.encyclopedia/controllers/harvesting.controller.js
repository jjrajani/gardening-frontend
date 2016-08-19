function HarvestingController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })
}

HarvestingController.$inject = ['$rootScope'];
export { HarvestingController };