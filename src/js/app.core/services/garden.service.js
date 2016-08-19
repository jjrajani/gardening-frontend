function GardenService (SERVER, $http, UserService) {

  this.createGarden = createGarden;
  this.getGardens = getGardens;

  function createGarden (garden) {
    return $http.post(SERVER.URL + 'gardens', garden, UserService.headers())
  }

  function getGardens () {
    return $http.get(SERVER.URL + 'gardens', UserService.headers())
  }

  // function deleteGarden(id) {
  //   return $http.delete(SERVER.URL + 'gardens', UserService.headers())
  // }

}

GardenService.$inject = ['SERVER', '$http', 'UserService'];
export { GardenService };
