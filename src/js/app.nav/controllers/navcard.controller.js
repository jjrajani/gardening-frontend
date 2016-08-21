function NavCardController (NavCardService, $scope) {

  let vm = this;
  vm.selected = 1;
  vm.setCurrentPlant = setCurrentPlant;
  vm.current = {};
  vm.navPlants = {};
  vm.showAll = showAll;
  vm.seasonsShowing = false;
  vm.showSeasons = showSeasons;
  vm.seasonFilter = seasonFilter;
  vm.categoryFilter = categoryFilter;
  vm.drop = drop;
  vm.start = start;
  vm.filter = 0;

  init ();
  
  function init() {
    NavCardService.getPlants().then( res => {
      vm.plants = res.data;
      vm.navPlants = res.data;
      vm.setCurrentPlant(vm.plants[0])
    })
  }



  function setCurrentPlant (plant) {
    vm.current = plant;
    $scope.$emit('selectedPlantChange', vm.current)
  }

  function categoryFilter (plants, category) {
    let library = plants.filter( (plant) => {
      return plant.category.toLowerCase() === category
    });
    vm.navPlants = library;
    console.log(category)
    category.toLowerCase() === "library" ? vm.filter = 0 :
    category.toLowerCase() === "vegetable" ? vm.filter = 1 :
    category.toLowerCase() === "herb" ? vm.filter = 2 :
    vm.filter = 0;
  }
  // full library
  function showAll (plants) {
    vm.navPlants = plants;
  }

  function seasonFilter(plants, season) {
    let library = plants.filter ( (plant) => {
      return plant.season.toLowerCase().includes(season)
    })
    vm.navPlants = library;
  }

  function showSeasons () {
    vm.seasonsShowing = !vm.seasonsShowing;
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
    $(ui.helper).addClass('clone');
    let space = $('.space')[0].offsetWidth
    space = String(space) + 'px';
    $(ui.helper).css({'max-width': space, 'background-color': 'red', 'padding': '0', 'margin': '0', 'border': 'solid yellow 1px'})
  }

  function drop(event, ui) {
    let clone = ui.helper.clone();
    clone.css({})
    $('.garden').append(clone);
    makeDraggable(clone);
    console.log(clone);
    var toMoveX = (clone[0].offsetTop - $('.garden')[0].offsetTop);
    console.log(toMoveX)
    var toMoveY = (clone[0].offsetLeft - $('.garden')[0].offsetLeft);
    console.log(toMoveY)
    toMoveX = (Math.floor(toMoveX/100)*100);
    toMoveY = (Math.floor(toMoveY/100)*100);
    if (toMoveY === -100) {
      toMoveY = 0;
    } // need logic for right side of garden
    if (toMoveX === -100 ) {
      toMoveX = 0;
      // need logic for bottom side of garden
    }
    // set aboslute position to grid system
    clone[0].style.top = String(toMoveX + $('.garden')[0].offsetTop) + 'px';
    clone[0].style.left = String(toMoveY + $('.garden')[0].offsetLeft) + 'px';
  }

  function makeDraggable (elem) {
    $(elem).draggable({
      cursorAt: {left: 5, top: 5},
      stop: function (event, ui) {
        $(this).remove();
      }
    });
  }
  ////////////////////////////////////////////////////////////
  ///////////// END //////////////////////////////////////////
  ////////////////////////////////////////////////////////////
}

NavCardController.$inject = ['NavCardService', '$scope'];
export { NavCardController };









