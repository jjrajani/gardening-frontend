function LayoutController (UserService, $rootScope) {

  let vm = this;

  
  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });
}

LayoutController.$inject = ['UserService','$rootScope'];
export { LayoutController }