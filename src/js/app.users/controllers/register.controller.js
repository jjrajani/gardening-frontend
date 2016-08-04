function RegisterController (UserService) {

  let vm = this;
  vm.register = register;

  function register (user) {
    UserService.register(user);
  }


}

RegisterController.$inject = ['UserService'];
export { RegisterController };