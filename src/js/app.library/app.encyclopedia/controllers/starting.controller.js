function StartingController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
    console.log(data)
  })

};

StartingController.$inject = ['$rootScope'];
export { StartingController };