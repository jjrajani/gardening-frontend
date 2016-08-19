function WateringController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })

};

WateringController.$inejct = ['$rootScope'];
export { WateringController };