function RegisterController (UserService, $state) {

  let vm = this;
  vm.register = register;

  function register (user) {
    UserService.register(user);
    $state.go('root.home')
  }

}

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };