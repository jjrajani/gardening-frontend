function UserService (SERVER, $state, $http, $cookies) {

  this.register = register;
  this.login = login;

  function register (user) {
    $http.post(SERVER.URL + 'register', user).then( res => {
      // console.log(res)
    })
  }

  function login (user) {
    $http.post(SERVER.URL + 'login', user).then( res => {
      // console.log(res)
    })

  }


}

UserService.$inject = ['SERVER', '$state', '$http', '$cookies'];
export { UserService };