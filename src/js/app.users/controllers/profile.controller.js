function ProfileController (GardenService, ProfileService, UserService, $state) {

  let vm = this;
  
  vm.gardenState = 0;
  vm.overviewTab = 2;
  // this toggles from 0 to >0 to show comments
  vm.gardenComments = 0;

  // Edit user Info
  vm.showEdit = false;
  vm.edit = edit;
  vm.submitEdit = submitEdit;
  
  vm.editComment = false;

  // Create Gardens & Garden Listings
  vm.addGarden = addGarden;
  vm.gardenFilter = gardenFilter;
  vm.activeGardens = '';
  vm.planningGardens = '';
  vm.selectGarden = selectGarden;
  vm.selectedGarden = '';
  vm.deleteGarden = deleteGarden;

  init()

  console.log('profile controller');

  function edit () {
    vm.showEdit = !vm.showEdit;
  }

  function submitEdit () {
    console.log(vm.user);
    UserService.updateUser(vm.user);
    vm.edit();
  }

  // Garden Functions

  function addGarden (garden) {
    GardenService.createGarden(garden).then(res => {
      vm.garden = {};
      $state.reload();
    });
  }

  function gardenFilter() {
    GardenService.getGardens().then( res => {
      vm.activeGardens = vm.gardens.filter(function (garden) {
        return garden.status === true;
      });
      vm.planningGardens = vm.gardens.filter(function (garden) {
        return garden.status === false;
      });
    })
  }

  function selectGarden (id) {
    let garden = vm.gardens.filter((garden) => {
      return garden.id === id;
    })
    vm.selectedGarden = garden[0];
  }

  function deleteGarden(id) {
    console.log(id)
  }

  function init () {
    ProfileService.getProfile().then( res => {
      vm.user = res.data.user
      vm.gardens = res.data.gardens
      vm.gardenFilter();
      vm.selectedGarden = vm.gardens[0];
    })
    
  }
}

ProfileController.$inject = ['GardenService', 'ProfileService', 'UserService', '$state'];
export { ProfileController };