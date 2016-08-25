function AdminNewPlantController (AdminService, $state) {

  let vm = this;
  vm.newPlant = newPlant;
  // vm.uploadImage = uploadImage;
  let plant  = {};

  function newPlant (plant) {
    // console.log(plant)
    AdminService.createPlant(plant).then( res => {
      $state.go('admin.plant')
    })
  }

  // function uploadImage () {
  //   filepicker.pick(function(Blob) { 
  //     console.log(Blob.url);
  //     image = Blob.url
  //   });
  // }

}

AdminNewPlantController.$inject = ['AdminService', '$state'];
export { AdminNewPlantController }