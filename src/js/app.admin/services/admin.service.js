function AdminService ($http, $cookies, UserService, SERVER) {

  this.admin = admin;
  this.createPlant = createPlant;
  this.getPlants = getPlants;

  function admin () {
    $cookies.get('admin');
  }

  function createPlant (plant) {
    return $http.post(SERVER.URL + 'admin/plants/', plant, UserService.headers())
  }

  function getPlants () {
    return $http.get(SERVER.URL + 'admin/plants', UserService.headers())
  }



}

AdminService.$inject = ['$http', '$cookies', 'UserService', 'SERVER'];
export { AdminService };