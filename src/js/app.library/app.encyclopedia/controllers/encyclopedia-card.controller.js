function EncyclopediaCardController ($rootScope) {

  let vm = this;
  vm.select = select;
  vm.selected = 1;
  
  function select(tab) {
    vm.selected = tab;
    vm.navOpen = false;
  }

$rootScope.$on('newPlantSelection', function (event, data) {
    vm.plant = data;
  })

  // emit here
}

EncyclopediaCardController.$inject = ['$rootScope'];
export { EncyclopediaCardController };