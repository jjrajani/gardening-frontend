function EncyclopediaCardController () {
  
  console.log('in here')

  let vm = this;
  vm.select = select;
  vm.selected = 1;
  vm.getSeeds = getSeeds;
  vm.seedClass = "";
  vm.sqRoot = sqRoot;
  vm.navOpen = false;
  // vm.seedSpace = 12 / sqrt of seed_count



  function select(tab) {
    vm.selected = tab;
    vm.navOpen = false;
    console.log(vm.selected)
  }

  function getSeeds(num) {
    if (num === 1) {
      vm.seedClass = "one"
    }
    if (num === 4) {
      vm.seedClass = "four"
    }
    if (num === 9) {
      vm.seedClass = "nine"
    }

    // return [0,1,2,3,4,5,6,7,8] // nine
    // return [0,1,2,3];  // four
    return new Array(num);
  }

  function sqRoot(num) {
    console.log(Math.pow(num, 0.5));
    return Math.pow(num, 0.5);
  }
}

EncyclopediaCardController.$inject = [];
export { EncyclopediaCardController };