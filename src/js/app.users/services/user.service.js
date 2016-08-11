function UserService (SERVER, $state, $http, $cookies) {

  this.register = register;
  this.login = login;
  this.headers = headers;
  this.getUser = getUser;
  this.logOut = logOut;
  this.isLoggedIn = isLoggedIn;

  function register (user) {
    return $http.post(SERVER.URL + 'register', user)
  }

  function login (user) {
    return $http.post(SERVER.URL + 'login', user)
  }

  function headers () {
    let authToken = $cookies.get('access_token');
    return { headers: { 'Authorization': 'Bearer ' + authToken } }
  }

  function getUser () {
    $cookies.get('access_token')
  }

  function logOut () {
    $cookies.remove('access_token')
  }

  function isLoggedIn () {
    return (this.getUser()) ? true : false
  }


}

UserService.$inject = ['SERVER', '$state', '$http', '$cookies'];
export { UserService };