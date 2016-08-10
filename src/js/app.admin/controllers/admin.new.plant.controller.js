function AdminNewPlantController (AdminService) {

  let vm = this;
  vm.newPlant = newPlant;
  vm.uploadImage = uploadImage;
  let image;

  function newPlant (plant) {
    plant.image = image
    // console.log(plant)
    AdminService.createPlant(plant).then( res => {
      console.log(res)
    })
  }

  function uploadImage () {
    filepicker.pick(function(Blob) { 
      // console.log(Blob.url);
      image = Blob.url
    });
  }

  

}

AdminNewPlantController.$inject = ['AdminService'];
export { AdminNewPlantController }