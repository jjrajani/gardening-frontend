function LibraryController (LibraryService, $rootScope) {
  
  let vm = this;

// use broadcast here
// PARENT
// listen for the event in the relevant $scope
$rootScope.$on('selectedPlantChange', function (event, data) {
  $rootScope.$broadcast('newPlantSelection', data)
})

// set draggable objs false

}

LibraryController.$inject = ['LibraryService', '$rootScope'];
export { LibraryController };