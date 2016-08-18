function ProfileService (UserService, $http, SERVER) {

  this.getProfile = getProfile;

  function getProfile () {
    return $http.get(SERVER.URL + 'profile', UserService.headers());
  }

}
ProfileService.$inject = ['UserService', '$http', 'SERVER'];
export { ProfileService };