function EncyclopediaCardController ($scope) {

  console.log($scope);
  
  console.log('EncyclopediaCardController')

  let vm = this;
  vm.select = select;
  vm.selected = 1;
  
  function select(tab) {
    vm.selected = tab;
    vm.navOpen = false;
  }

  // emit here
}

EncyclopediaCardController.$inject = ['$scope'];
export { EncyclopediaCardController };