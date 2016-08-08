function AdminSinglePlantController (AdminService, $stateParams) {
  let vm = this;

  init()

  function init () {
    AdminService.getPlant($stateParams.id).then(res => {
      vm.plant = res.data
    })
  }

}

AdminSinglePlantController.$inject = ['AdminService', '$stateParams'];
export { AdminSinglePlantController };