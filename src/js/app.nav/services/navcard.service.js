function NavCardService (SERVER, $http) {

  this.getPlants = getPlants;
  this.singlePlant = singlePlant;
  this.stringify = stringify;

  this.categoryFilter = categoryFilter;

  function getPlants () {
    return $http.get(SERVER.URL + 'plants')
  }

  function singlePlant (id) {
    return $http.get(SERVER.URL + 'plants/' + id)
  }

  function stringify(spaces, seeds) {
    let number = (spaces/seeds);
    let string = "";
    if (number === 4) {
      string = "four";
    
    } else if (number === 1) {
      string ="one";
    
    } else if (number === 2) {
      string = "one-half";
    
    } else if (number === (1/4)) {
      string = "one-fourth";
    
    } else if (number === (1/9)) {
      string = "one-ninth";
    }
    return string
  };
  /////////////////////
  // Library Filters
  /////////////////////

  function categoryFilter (library, category ) {
    categoryLibrary = library.filter( (plant) => {
      return plant.category.toLowerCase() === category
    })
    return categoryLibrary;
  }

  function seasonFilter (library, season) {
    seasonLibrary = library.filter( (plant) => {
      return  plant.season.toLowerCase() === season
    })
  }

  function showAll (plants) {
    vm.navPlants = plants;
    vm.filter = 0;
    vm.setCurrentPlant(vm.navPlants[0]);
  }

  //////////////////////////////////////////
  //////////////////////////////////////////

  // Emits
  ////////////
  function emitCurrentPlant (plant) {
    $scope.$emit('selectedPlantChange', vm.current)
  }

}

NavCardService.$inject = ['SERVER', '$http'];
export { NavCardService };