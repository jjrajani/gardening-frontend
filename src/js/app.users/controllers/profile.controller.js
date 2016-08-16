function ProfileController () {

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
  function updateEmail () {
    vm.editEmail();
    console.log("email not updated cause we need to write the code")
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
  function updateLocation () {
    vm.editLocation();
    console.log("location not updated cause we need to write the code")
  }
}

ProfileController.$inject = [];
export { ProfileController };