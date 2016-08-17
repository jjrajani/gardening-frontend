function NavCardController (NavService) {

  let vm = this;
  vm.selected = 1;
  vm.setCurrentPlant = setCurrentPlant;
  vm.navPlants = {};
  vm.showAll = showAll;
  vm.showSeasons = false;
  vm.seasonFilter = seasonFilter;
  vm.categoryFilter = categoryFilter;
  

  init ()

  function init() {
    NavService.getPlants().then( res => {
      vm.plants = res.data;
      vm.navPlants = res.data;
      vm.setCurrentPlant(vm.plants[0])
    }) 
  }

  function setCurrentPlant (plant) {
    vm.current = plant;
  }

  function categoryFilter (plants, category) {
    let library = plants.filter( (plant) => {
      return plant.category.toLowerCase() === category
    });
    vm.navPlants = library;
  }
  // full library
  function showAll (plants) {
    vm.navPlants = plants;
  }

  function seasonFilter(plants, season) {
    let library = plants.filter ( (plant) => {
      return plant.season.toLowerCase().includes(season)
    })
    vm.navPlants = library;
  }
}

NavCardController.$inject = ['NavService'];
export { NavCardController };