function LoginController (UserService, $cookies) {

  let vm = this;
  vm.login = login;

  function login (user) {
    UserService.login(user).then( res => {
      $cookies.put('access_token', res.data.access_token)
      $cookies.put('admin', res.data.admin)
    })
  }

}

LoginController.$inject = ['UserService', '$cookies'];
export { LoginController };