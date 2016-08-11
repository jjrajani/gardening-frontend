function LibraryController (LibraryService) {
  
  let vm = this;
  vm.setCurrentPlant = setCurrentPlant;

  init ()

  function init() {
    LibraryService.getPlants().then( res => {
      vm.plants = res.data;
    }) 
  }

  function setCurrentPlant (plant) {
    vm.current = plant;
  }
  console.log('LibraryController')

}

LibraryController.$inject = ['LibraryService'];
export { LibraryController };