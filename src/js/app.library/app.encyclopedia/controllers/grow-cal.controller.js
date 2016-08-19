function GrowCalController ($rootScope) {
  let vm = this;
  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })
}

GrowCalController.$inject = ['$rootScope'];
export { GrowCalController };