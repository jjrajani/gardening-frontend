function AdminService ($http, $cookies, UserService, SERVER) {

  this.admin = admin;
  this.createPlant = createPlant;
  this.getPlants = getPlants;
  this.getPlant = getPlant; 

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





}

AdminService.$inject = ['$http', '$cookies', 'UserService', 'SERVER'];
export { AdminService };