function HomeController ($state, UserService, $rootScope, $cookies) {
  let vm = this;
  
  vm.loggedIn   = false;
  vm.login      = login;
  vm.library    = library;
  vm.fellow     = fellow;
  vm.logOut     = logOut;
  vm.register   = register;
  vm.goLogin    = goLogin;
  vm.goRegister = goRegister;

  console.log('HomeController')

  // function planner () {
  //   $state.go('root.planner')
  // }

  function library () {
    $state.go('root.library')
  }

  function fellow () {
    $state.go('root.fellow')
  }

  function goLogin () {
    $state.go('root.login')
  }

  function goRegister () {
    $state.go('root.register')
  }

  init ()
  
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
    vm.isAdmin = false;
  }
  
  function login (user) {
    UserService.login(user).then( res => {
      $cookies.put('access_token', res.data.access_token)
      $cookies.put('admin', res.data.admin)
      $state.go('root.profile');
    })
  }    

  function register (user) {
    UserService.register(user);
    $state.go('root.home')
  }  

}


HomeController.$inject = ['$state', 'UserService', '$rootScope', '$cookies'];
export { HomeController };