function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/core/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/users/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/users/login.tpl.html',
      controller: 'LoginController as vm'
    });

    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config }