function HomeController ($state) {
  let vm = this;
  vm.planner = planner;

  console.log('HomeController')

  function planner () {
    $state.go('root.planner')
  }

}

HomeController.$inject = ['$state'];
export { HomeController };