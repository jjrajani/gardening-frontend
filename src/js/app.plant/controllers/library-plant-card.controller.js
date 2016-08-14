function LibraryPlantCardController () {
  
  let vm = this;
  vm.select = select;
  vm.selected = 6;
  vm.getSeeds = getSeeds;
  vm.seedClass = "";
  vm.sqRoot = sqRoot;
  // vm.seedSpace = 12 / sqrt of seed_count



  function select(tab) {
    vm.selected = tab;
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

LibraryPlantCardController.$inject = [];
export { LibraryPlantCardController };