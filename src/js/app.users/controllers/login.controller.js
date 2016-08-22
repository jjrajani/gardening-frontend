function LoginController (UserService, $cookies, $state, $rootScope) {

  let vm = this;
  vm.login = login;

  function login (user) {
    UserService.login(user).then( res => {
      $cookies.put('access_token', res.data.access_token)
      $cookies.put('admin', res.data.admin)
      $state.go('root.profile');
      vm.loggedIn = true;
    })
  }

  $rootScope.$on('loginChange', function () {
    vm.loggedIn = !vm.loggedIn;
  })
}
LoginController.$inject = ['UserService', '$cookies', '$state', '$rootScope'];
export { LoginController };