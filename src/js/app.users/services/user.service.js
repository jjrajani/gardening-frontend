function UserService (SERVER, $state, $http, $cookies) {

  this.register = register;
  this.login = login;
  this.headers = headers;
  this.getUser = getUser;
  this.logOut = logOut;
  this.isLoggedIn = isLoggedIn;
  this.isAdmin = isAdmin;
  this.updateUser = updateUser;

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
    return $cookies.get('access_token')
  }

  function logOut () {
    $cookies.remove('access_token');
    $cookies.remove('admin');
    $state.reload();
  }

  function isLoggedIn () {
    return (this.getUser()) ? true : false
  }

  function isAdmin () {
    let admin = $cookies.get('admin')
    if (admin === true) {
      return true
    } else {
      return false
    }
  }

  function updateUser (user) {
    let location = {location: user}
    return $http.post(SERVER.URL + 'users', user, this.headers())
  }
}

UserService.$inject = ['SERVER', '$state', '$http', '$cookies'];
export { UserService };