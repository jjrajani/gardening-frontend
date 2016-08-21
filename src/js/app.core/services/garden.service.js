function GardenService (SERVER, $http, UserService) {

  this.createGarden = createGarden;
  this.getGardens = getGardens;
  this.getGarden = getGarden;

  function createGarden (garden) {
    return $http.post(SERVER.URL + 'gardens', garden, UserService.headers())
  }

  function getGardens () {
    return $http.get(SERVER.URL + 'gardens', UserService.headers())
  }

  function getGarden (id) {
    return $http.get(SERVER.URL + 'gardens', id, UserService.headers())
  }

  // function deleteGarden(id) {
  //   return $http.delete(SERVER.URL + 'gardens', UserService.headers())
  // }

}

GardenService.$inject = ['SERVER', '$http', 'UserService'];
export { GardenService };
