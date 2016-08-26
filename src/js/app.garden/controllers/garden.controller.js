function GardenController (GardenService, $state, $cookies) {

  let vm = this;
  vm.addGarden = addGarden;
  
  function addGarden (garden) {
    GardenService.createGarden(garden).then( res => {
      $cookies.put('current_garden', res.data.id)
      $state.go('root.planner', {id: res.data.id})
    })
  }

}

GardenController.$inject = ['GardenService', '$state', '$cookies'];
export { GardenController }