function GardenService (SERVER, $http, UserService) {

  this.createGarden = createGarden;

  function createGarden (garden) {
    return $http.post(SERVER.URL + 'gardens', garden, UserService.headers())
  }


}

GardenService.$inject = ['SERVER', '$http', 'UserService'];
export { GardenService };
