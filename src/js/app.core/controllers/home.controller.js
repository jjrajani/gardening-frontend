function HomeController ($state) {
  let vm = this;
  vm.planner = planner;
  vm.library = library;
  vm.fellow = fellow;

  console.log('HomeController')

  function planner () {
    $state.go('root.planner')
  }

  function library () {
    $state.go('root.library')
  }

  function fellow () {
    $state.go('root.fellow')
  }

}

HomeController.$inject = ['$state'];
export { HomeController };