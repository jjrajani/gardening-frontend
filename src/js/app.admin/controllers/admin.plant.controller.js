function AdminPlantController (AdminService, UserService) {
  let vm = this;

  function init () {
    AdminService.getPlants().then(res => {
      console.log(res.data)
      vm.plants = res.data
    });
  }
  
  init()

}

AdminPlantController.$inject = ['AdminService', 'UserService'];
export { AdminPlantController }