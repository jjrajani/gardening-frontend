function OverviewController ($rootScope) {

  let vm = this;

  vm.plant = {};

  $rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })

}

OverviewController.$inject = ['$rootScope'];
export {OverviewController}