function EncyclopediaCardController () {
  
  console.log('EncyclopediaCardController')

  let vm = this;
  vm.select = select;
  vm.selected = 1;
  
  function select(tab) {
    vm.selected = tab;
    vm.navOpen = false;
    console.log(vm.selected)
  }
}

EncyclopediaCardController.$inject = [];
export { EncyclopediaCardController };