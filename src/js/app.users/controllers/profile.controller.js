function ProfileController (GardenService, ProfileService, UserService, $state, SERVER, $cookies, $scope) {

  let vm = this;

  
  vm.gardenState = 0;
  vm.overviewTab = 0;
  // this toggles from 0 to >0 to show comments
  vm.gardenComments = 0;

  // Edit user Info
  vm.showEdit = false;
  vm.edit = edit;
  vm.submitEdit = submitEdit;
  
  vm.editComment = false;

  // Create Gardens & Garden Listings
  vm.addGarden = addGarden;
  vm.deleteGarden = deleteGarden;
  vm.clearState = clearState;
// Edit garden
  vm.editGarden = editGarden
  //Get Spaces in Gardens
  vm.getGardenSpaces = getGardenSpaces;

  // Text Splices
  vm.dateStringify = dateStringify;
  vm.sqFt = sqFt;

  init()

  console.log('profile controller');

  function edit () {
    vm.showEdit = !vm.showEdit;
  }

  function submitEdit () {
    // console.log(vm.user);
    UserService.updateUser(vm.user);
    vm.edit();
  }

  function init () {
    ProfileService.getPlants().then( res=> {
      vm.plants = res.data;
      getPlants();
    });
    
    $scope.$applyAsync();
  }

  function getPlants () {
    ProfileService.getProfile().then( res => {
      vm.user = res.data.user;
      vm.gardens = res.data.gardens;
      vm.gardens.forEach(function(garden, index){
        GardenService.getSpaces(garden.id).then(res => {
          vm.gardens[index].plants = res.data;
          if (vm.gardens[index].plants.length > 0) {
            vm.gardens[index].plants = vm.gardens[index].plants.map( function (plant) {
              var plantArr = vm.plants.filter(plantData => plantData.id === plant.plant_id);
              return plant = plantArr[0];
            })
          }
        })
      })
    })
  }

  // Garden Functions

  function addGarden (garden) {
    GardenService.createGarden(garden).then(res => {
      vm.garden = {};
      $cookies.put('current_garden', res.data.id);
      $state.go('root.planner', {id: res.data.id});
    });
  }

  function deleteGarden(id) {
    GardenService.deleteGarden(id).then(res => {
      $state.reload()
    })

  }

  function getGardenSpaces (id) {
    // console.log(id)
  }

  function clearState() {
    vm.gardenState = 0;
    vm.overviewTab = 1;
  }

  // Text Splices
  function dateStringify(date) {
    date = ProfileService.dateStringify(date);
    return date;
  }

  function sqFt(height, width) {
   let size = ProfileService.sqFt(height, width);
   return size
  }

  //edit garden
  function editGarden (id) {
    $cookies.put('current_garden', id)
    $state.go('root.planner', {id: id});
  }
}

ProfileController.$inject = ['GardenService', 'ProfileService', 'UserService', '$state', 'SERVER', '$cookies', "$scope"];
export { ProfileController };