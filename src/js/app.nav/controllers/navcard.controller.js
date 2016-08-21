function NavCardController (NavCardService, $scope) {

  let vm = this;
  vm.selected = 1;
  vm.setCurrentPlant = setCurrentPlant;
  vm.current = {};
  vm.showAll = showAll;
  vm.seasonsShowing = false;
  vm.showSeasons = showSeasons;
  vm.start = start;
  vm.filter = 0;


  init ();
  
  function init() {
    NavCardService.getPlants().then( res => {
      vm.plants = res.data;
      vm.displayedLibrary = vm.plants;
      vm.categoryLibrary = vm.plants;
      vm.setCurrentPlant(vm.plants[0])
    })
  }

  function setCurrentPlant (plant) {
    vm.current = plant;
    $scope.$emit('selectedPlantChange', vm.current)
  }

  // on page load
    vm.categoryTab = "library"
    vm.seasonsShowing = false;
    vm.selectCategory = selectCategory;
    vm.selectSeason = selectSeason;
    vm.selectedSeason = '';

    function selectCategory (category) {
      vm.categoryTab = category;
      vm.categoryLibrary = vm.plants.filter( (plant) => {
        return plant.category.toLowerCase() === vm.categoryTab;
      })
      vm.displayedLibrary = vm.categoryLibrary;
    }

    function showSeasons() {
        vm.seasonsShowing = !vm.seasonsShowing
      if ( vm.seasonsShowing === false ) {
        vm.displayedLibrary = vm.categoryLibrary;
      }
      console.log("seasonsShowing", vm.seasonsShowing)
        let content = $('.content');
        let div = $('.encyc-cont');
        let chapters = $('.chapters');
        div.toggleClass('ency-pad');
        content.toggleClass('pad');
        content.toggleClass('chap-pad')
    }

    function selectSeason (season) {
      vm.selectedSeason = season;
      vm.seasonLibrary = vm.categoryLibrary.filter( (plant) => {
        return plant.season.toLowerCase() === vm.selectedSeason
      })
      vm.displayedLibrary = vm.seasonLibrary;
    }

  
  function showAll () {
    vm.displayedLibrary = vm.plants;
    vm.categoryTab = 'library';
    vm.setCurrentPlant(vm.navPlants[0]);
  }
////////////////////////////////////////////////////////////
/////////////  DragDrop Functions  /////////////////////////
////////////////////////////////////////////////////////////

// Size 1 = 4seed 4sqs
// Size 2 = 1seed 2sqs
// Size 3 = 1seed 1sq
// Size 4 = 4seeds 1sq
// Size 5 = 9seeds 1sq

  function start(event, ui) {
    let styleClass = NavCardService.stringify(vm.current.size, vm.current.seed_count);
    $(ui.helper).addClass(styleClass);
    $(ui.helper).addClass('clone four');
    let space = $('.space')[0].offsetWidth
    space = String(space) + 'px';
    $(ui.helper).css({'width': space, 'height': space})
  }

  ////////////////////////////////////////////////////////////
  ///////////// END //////////////////////////////////////////
  ////////////////////////////////////////////////////////////
}

NavCardController.$inject = ['NavCardService', '$scope'];
export { NavCardController };









