function GardenController (GardenService, $state) {

  let vm = this;
  vm.addGarden = addGarden;
  
  function addGarden (garden) {
    GardenService.createGarden(garden).then( res => {
      $state.go('root.planner', {id: res.data.id})
      console.log(res)
    })
  }

}

GardenController.$inject = ['GardenService', '$state'];
export { GardenController }