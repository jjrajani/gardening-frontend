// function GardenCardController ($rootScope, GardenService, $cookies, gardenCard) {
  
//   let vm = this;
//   vm.rows = 0;
//   vm.spacesInRow = 0;

//   let id = $cookies.get('current_garden')
//   GardenService.getGardens().then( res => {
//     let garden = res.data.filter(function (garden) {
//       return String(garden.id) === id
//     })
//     vm.spacesInRow = garden.width;
//     vm.rows = garden.height;
//     $('.big-screen').append(gardenCard)
//   })


//   // $rootScope.$on('newPlantSelection', function (event, data) {
//   //   vm.
//   // })

// }

// GardenCardController.$inject = ['$rootScope', 'GardenService', '$cookies', 'gardenCard'];
// export { GardenCardController };