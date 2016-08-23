function NavCardController (NavCardService, $scope) {

  let vm = this;
  vm.selected = 1;
  vm.setCurrentPlant = setCurrentPlant;
  vm.current = {};
  // vm.showAll = showAll;
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
      vm.selectedSeason = '';
      if (category === 'library') {
        vm.displayedLibrary = vm.plants;
      } else {
        vm.categoryLibrary = vm.plants.filter( (plant) => {
          return plant.category.toLowerCase() === vm.categoryTab;
        })
        vm.displayedLibrary = vm.categoryLibrary;
      }
    }

    function showSeasons() {
        vm.seasonsShowing = !vm.seasonsShowing
      if ( vm.seasonsShowing === false ) {
        vm.displayedLibrary = vm.categoryLibrary;
      }
        let div = $('.encyc-cont');
        let encyclopedia = $('.encyclopedia');
        let planner = $('.plan');
        planner.toggleClass('plan-pad')
        div.toggleClass('ency-pad');
        encyclopedia.toggleClass('chap-pad');

    }

    function selectSeason (season) {
      vm.selectedSeason = season;
      vm.seasonLibrary = vm.categoryLibrary.filter( (plant) => {
        return plant.season.toLowerCase() === vm.selectedSeason
      })
      vm.displayedLibrary = vm.seasonLibrary;
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
    $(ui.helper).addClass('clone');
    $(ui.helper).empty()
    for (var i = 0; i < vm.current.seed_count; i++) {
      if (vm.current.seed_count === 1) {
        ui.helper.append(`<p class="seed-one flip">S</p>`);
      } else if (vm.current.seed_count === 4 || vm.current.seed_count === 2 ) {
        ui.helper.append(`<p class="seed-two flip">S</p>`);
      } else if (vm.current.seed_count === 9 ) {
        ui.helper.append(`<p class="seed-three flip">S</p>`);
      } else if (vm.current.seed_count === 16 ) {
        ui.helper.append(`<p class="seed-four flip">S</p>`);
      }
    }
    let spaceWidth = $('.space')[0].offsetWidth
    let spaceHeight = $('.space')[0].offsetHeight

    if (vm.current.size === 1) { 
      spaceWidth = spaceWidth; 
      spaceHeight = spaceHeight;
    }
    if (vm.current.size === 2) { 
      spaceWidth = 2 * spaceWidth;
      spaceHeight = spaceHeight;
    }
    if (vm.current.size === 4) {
      spaceWidth = 2 * spaceWidth
      spaceHeight = 2 * spaceHeight;
    }

    spaceWidth = String(spaceWidth) + 'px';

    $(ui.helper).css({'width': spaceWidth, 'height': spaceHeight})
  }
  ////////////////////////////////////////////////////////////
  ///////////// END //////////////////////////////////////////
  ////////////////////////////////////////////////////////////
}

NavCardController.$inject = ['NavCardService', '$scope'];
export { NavCardController };









