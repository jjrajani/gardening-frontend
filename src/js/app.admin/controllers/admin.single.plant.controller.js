function AdminSinglePlantController (AdminService, $stateParams) {
  
  let vm = this;
  vm.updatePlant = updatePlant;

  init()

  function init () {
    AdminService.getPlant($stateParams.id).then(res => {
      vm.plant = res.data
      console.log(vm.plant.id)
    })
  }

  function updatePlant (plant) {
    AdminService.updatePlant(plant);
  }

}

AdminSinglePlantController.$inject = ['AdminService', '$stateParams'];
export { AdminSinglePlantController };