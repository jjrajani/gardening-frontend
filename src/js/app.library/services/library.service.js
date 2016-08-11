function LibraryService (SERVER, $http) {

  this.getPlants = getPlants;
  this.singlePlant = singlePlant;

  function getPlants () {
    return $http.get(SERVER.URL + 'plants')
  }

  function singlePlant (id) {
    return $http.get(SERVER.URL + 'plants/' + id)
  }

}

LibraryService.$inject = ['SERVER', '$http'];
export { LibraryService };