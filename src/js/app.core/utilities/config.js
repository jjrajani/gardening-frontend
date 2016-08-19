function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  // Core
    .state('root', {
      abstract: true,
      templateUrl: 'templates/core/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/core/home.tpl.html',
      controller: 'HomeController as vm'
    })

  // User
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/users/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/users/login.tpl.html',
      controller: 'LoginController as vm'
    })
    .state('root.profile', {
      url: '/profile',
      templateUrl: 'templates/users/profile.tpl.html',
      controller: 'ProfileController as vm'
    })

  // Fellow
    .state('root.fellow', {
      url: '/fellow',
      templateUrl: 'templates/fellow/fellow.tpl.html'
    })

  // Admin
    .state('admin', {
      abstract: true,
      templateUrl: 'templates/admin/admin.tpl.html'
    })
    .state('admin.index', {
      url: '/admin',
      templateUrl: 'templates/admin/index.tpl.html',
      controller: 'AdminController as vm'
    })
    .state('admin.plant', {
      url: '/admin/plants',
      templateUrl: 'templates/admin/plants/index.tpl.html',
      controller: 'AdminPlantController as vm'
    })
    .state('admin.newPlant', {
      url: '/admin/plants/new',
      templateUrl: 'templates/admin/plants/new.tpl.html',
      controller: 'AdminNewPlantController as vm'
    })
    .state('admin.showPlant', {
      url: '/admin/plants/:id',
      templateUrl: 'templates/admin/plants/show.tpl.html',
      controller: 'AdminSinglePlantController as vm'
    })
    .state('admin.updatePlant', {
      url: '/admin/plants/:id/edit',
      templateUrl: 'templates/admin/plants/edit.tpl.html',
      controller: 'AdminSinglePlantController as vm'
    })
  // Planner
    .state('root.planner', {
      url: '/gardens/:id/planner',
      templateUrl: 'templates/planner/planner.tpl.html',
      controller: 'PlannerController as vm'
    })
    .state('root.garden', {
      url: '/gardens/new',
      templateUrl: 'templates/gardens/new.tpl.html',
      controller: 'GardenController as vm'
    })
  // Library
    .state('root.library', {
      url: '/library',
      templateUrl: 'templates/library/library.tpl.html',
      controller: 'LibraryController as vm'
    })
    .state('root.singlePlant', {
      url: '/library/:id',
      templateUrl: 'templates/library/single.plant.tpl.html',
      controller: 'SinglePlantController as vm'
    })
    ;
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config }