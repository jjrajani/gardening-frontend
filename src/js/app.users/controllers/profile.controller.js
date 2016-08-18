function ProfileController (GardenService, ProfileService, UserService) {

  let vm = this;
  

  vm.gardenState = 0;

  // this toggles from 0 to >0 to show comments
  vm.gardenComments = 0;

  vm.editEmail = editEmail;
  vm.updateEmail = updateEmail;

  vm.editPassword = editPassword;
  vm.updatePassword = updatePassword;

  vm.editLocation = editLocation;
  vm.updateLocation = updateLocation;

  vm.editComment = editComment; 
  vm.updateComment = updateComment; 

  vm.editComment = false;
  vm.showEmail = false;

  vm.addGarden = addGarden;

  init()

  function editComment () {
    vm.showComment = !vm.showComment;
  }
  function updateComment () {
    vm.editComment();
    console.log("comment not updated cause we need to write the code")
  }


  console.log('profile controller');

  function editEmail () {
    vm.showEmail = !vm.showEmail;
  }
  function updateEmail (user) {
    vm.editEmail();
    UserService.updateEmail(user).then( res => {
      console.log(res)
    })
    
  }

  function editPassword () {
    vm.showPassword = !vm.showPassword;
  }
  function updatePassword () {
    vm.editPassword();
    console.log("password not updated cause we need to write the code")
  }

  function editLocation () {
    vm.showLocation = !vm.showLocation;
  }
  function updateLocation (user) {
    vm.editLocation();
    UserService.updateLocation(user).then( res => {
      console.log(res)
    })
  }

  function addGarden (garden) {
    GardenService.createGarden(garden).then(res => {
      console.log(res)
    });
  }

  function init () {
    ProfileService.getProfile().then( res => {
      // console.log(res)
      vm.user = res.data.user
      vm.gardens = res.data.gardens
      // console.log(vm.gardens.length)
      vm.active = vm.gardens.filter(function (garden) {
        return garden.status === false
      })

      // Use this response to show user info and ng-repeat gardens
    })
  }
}

ProfileController.$inject = ['GardenService', 'ProfileService', 'UserService'];
export { ProfileController };