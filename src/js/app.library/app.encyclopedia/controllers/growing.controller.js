function GrowingController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })
}

GrowingController.$inject = ['$rootScope'];
export { GrowingController };