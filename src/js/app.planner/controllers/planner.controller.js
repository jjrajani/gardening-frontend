function PlannerController ($rootScope, GardenService, $cookies) {

  let vm = this;
  vm.drop = drop;
  vm.currentPlant = {}
  vm.getNumberArray = getNumberArray;
  vm.addPlant = addPlant;
  vm.plants = [];

  console.log('PlannerController');
  vm.garden = {};

  function getNumberArray (num) {
    return new Array(num)
  }


  GardenService.getGardens().then( res => {
    let id = $cookies.get('current_garden')
    vm.garden = res.data.filter( garden => {
      return String(garden.id) === id
    })
    vm.rows = vm.garden[0].height
    vm.spacesInRows = vm.garden[0].width
    vm.spaceWidth = String(100/vm.spacesInRows) + "%";
    let rowWidth = $('.row')[0].offsetWidth;
    vm.spaceHeight = String(rowWidth / (vm.spacesInRows))
    if ( vm.spaceHeight > 120 ) {
      vm.spaceHeight = "100px"
      vm.spaceWidth = "100px"
    }
  })

  function addPlant (plant) {
    
  }

  $(window).resize( function () {
    vm.rows = vm.garden[0].height
    vm.spacesInRows = vm.garden[0].width
    vm.spaceWidth = String(100/vm.spacesInRows) + "%";
    let rowWidth = $('.row')[0].offsetWidth;
    vm.spaceHeight = String(rowWidth / (vm.spacesInRows)) + "px";
    let spaces = $('.space')
    spaces.each(space => {
      spaces[space].style.height = vm.spaceHeight;
    })
  })

  function drop(event, ui, $index) {
    let target = $(event.target)
    let space = event.target;
    let clone = ui.helper.clone();
    target.append(clone);
    makeDraggable(clone);
    let cloneX = clone[0].offsetTop
    let cloneY = clone[0].offsetLeft
    let targetX = target[0].offsetTop
    let targetY = target[0].offsetLeft
    clone[0].style.top = targetX + 'px';
    clone[0].style.left = targetY + 'px';
    console.log("Current plant ID --")
    console.log(vm.currentPlant.id)
    console.log("Current Space Target --")
    console.log(event);
    console.log("Current garden ID --")
    console.log(vm.garden[0].id);
  }

  function makeDraggable (elem) {
    $(elem).draggable({
      cursorAt: {left: 5, top: 5},
      stop: function (event, ui) {
        $(this).remove();
      }
    });
  }

  $rootScope.$on('selectedPlantChange', function (event, data) {
    vm.currentPlant = data;
  })

// }
}

PlannerController.$inject = ['$rootScope', 'GardenService', '$cookies'];
export { PlannerController };