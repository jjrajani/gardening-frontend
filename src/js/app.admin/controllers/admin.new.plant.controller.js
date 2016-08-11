function AdminNewPlantController (AdminService, $state) {

  let vm = this;
  vm.newPlant = newPlant;
  vm.uploadImage = uploadImage;
  let image = ''
  let plant  = {}

  function newPlant (plant) {
    plant.image = image
    // console.log(plant)
    AdminService.createPlant(plant).then( res => {
      $state.go('admin.plant')
    })
  }

  function uploadImage () {
    filepicker.pick(function(Blob) { 
      // console.log(Blob.url);
      image = Blob.url
    });
  }

}

AdminNewPlantController.$inject = ['AdminService', '$state'];
>>>>>>> a120e830a56ec7174eab338f2d9ab8f8c80fc1ad
export { AdminNewPlantController }