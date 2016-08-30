function LayoutController (UserService, $rootScope) {

  let vm = this;
  vm.loggedIn = false;
  vm.logOut = logOut;
  vm.isAdmin = false;

  console.log('LayoutController')

  init ()
  //respond to parent screaming
  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function init () {
    vm.loggedIn = UserService.isLoggedIn();
    vm.isAdmin = UserService.isAdmin();
  }

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
    vm.isAdmin = false
  }

}

LayoutController.$inject = ['UserService','$rootScope'];
export { LayoutController }