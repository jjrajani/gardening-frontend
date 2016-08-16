function NavCardController (NavService) {

  let vm = this;
  vm.setCurrentPlant = setCurrentPlant;

  console.log('hello nav')

  init ()

  function init() {
    NavService.getPlants().then( res => {
      vm.plants = res.data;
      console.log(vm.plants[0].category)
      vm.setCurrentPlant(vm.plants[0])
    }) 
  }

  function setCurrentPlant (plant) {
    vm.current = plant;
  }

  function vegetables (plants) {
    console.log(vm.plants)
  }

  vegetables()
}

NavCardController.$inject = ['NavService'];
export { NavCardController };