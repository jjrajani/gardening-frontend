function StartingController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })

};

StartingController.$inject = ['$rootScope'];
export { StartingController };