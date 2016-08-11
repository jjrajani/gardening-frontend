function AdminNewPlantController (AdminService) {

  let vm = this;
  vm.newPlant = newPlant;

  function newPlant (plant) {
    AdminService.createPlant(plant).then( res => {
      console.log(res)
    })
  }

}

AdminNewPlantController.$inject = ['AdminService'];
export { AdminNewPlantController }