function GardenService (SERVER, $http, UserService) {

  this.createGarden = createGarden;
  this.getGardens = getGardens;
  this.getGarden = getGarden;
  this.saveGarden = saveGarden;
  this.getSpaces = getSpaces;

  function createGarden (garden) {
    return $http.post(SERVER.URL + 'gardens', garden, UserService.headers())
  }

  function getGardens () {
    return $http.get(SERVER.URL + 'gardens', UserService.headers())
  }

  function getGarden (id) {
    return $http.get(SERVER.URL + 'gardens', id, UserService.headers())
  }

  function saveGarden (id, spaces) {
    return $http.put(SERVER.URL + 'gardens/' + id + '/spaces', {spaces: spaces}, UserService.headers())
  }

  function getSpaces ( id ) {
    // console.log("ID ____ ", id)
    return $http.get(SERVER.URL + 'gardens/'+  id + '/spaces', UserService.headers())
  }


}

GardenService.$inject = ['SERVER', '$http', 'UserService'];
export { GardenService };
