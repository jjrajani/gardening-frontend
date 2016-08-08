function AdminNewPlantController () {

  let vm = this;
  vm.createPlant = createPlant;

  function createPlant (plant) {
    console.log(plant);
  }

}

AdminNewPlantController.$inject = [];
export { AdminNewPlantController }