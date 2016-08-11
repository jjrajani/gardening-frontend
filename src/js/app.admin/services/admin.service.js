function AdminService ($http, $cookies, UserService, SERVER) {

  this.admin       = admin;
  this.createPlant = createPlant;
  this.getPlants   = getPlants;
  this.getPlant    = getPlant; 
  this.updatePlant = updatePlant

  function admin () {
    $cookies.get('admin');
  }

  function createPlant (plant) {
    return $http.post(SERVER.URL + 'admin/plants/', plant, UserService.headers())
  }

  function getPlants () {
    return $http.get(SERVER.URL + 'admin/plants', UserService.headers())
  }

  function getPlant (id) {
    return $http.get(SERVER.URL + 'admin/plants/' + id, UserService.headers());
  }

  function updatePlant (plant) {
    console.log(plant)
    return $http.put(SERVER.URL + 'admin/plants/' + plant.id, plant, UserService.headers())
  }





}

AdminService.$inject = ['$http', '$cookies', 'UserService', 'SERVER'];
export { AdminService };