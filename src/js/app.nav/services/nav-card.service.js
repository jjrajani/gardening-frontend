function NavService (SERVER, $http) {

  this.getPlants = getPlants;
  this.singlePlant = singlePlant;

  function getPlants () {
    return $http.get(SERVER.URL + 'plants')
  }

  function singlePlant (id) {
    return $http.get(SERVER.URL + 'plants/' + id)
  }

}

NavService.$inject = ['SERVER', '$http'];
export { NavService };