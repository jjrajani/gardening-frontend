function UserService (SERVER, $state, $http, $cookies) {

  this.register = register;
  this.login = login;

  function register (user) {
    console.log(user)
  }

  function login (user) {

  }


}

UserService.$inject = ['SERVER', '$state', '$http', '$cookies'];
export { UserService };