function PlannerController ($rootScope, GardenService, $cookies) {

  let vm = this;
  vm.drop = drop;
  vm.currentPlant = {}
  vm.getNumberArray = getNumberArray;
  vm.plants = [];
  vm.spaces = [];
  vm.saveGarden = saveGarden;

  console.log('PlannerController');
  vm.garden = {};

  function getNumberArray (num) {
    return new Array(num)
  }


  GardenService.getGardens().then( res => {
    vm.gardenId = $cookies.get('current_garden')
    vm.garden = res.data.filter( garden => {
      return String(garden.id) === vm.gardenId
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

  function drop(event, ui, gardenRow, gardenSpace) {
    let target = $(event.target)
    let space = event.target;
    let clone = ui.helper.clone();
    makeDraggable(clone);
    getSize(clone, target)
    let dom_id = stringifyDomId(event.target.parentElement.id, event.target.id);
    let openSpace = '';
    for (var i = 0; i < vm.spaces.length; i++) {
      if (vm.spaces[i].dom_id === dom_id) {
        openSpace = false
      }
    }
    if (openSpace !== false) {
      target.append(clone);
      vm.spaces.push({plant_id: vm.currentPlant.id, garden_id: vm.garden[0].id, dom_id: dom_id})
    }
  }

  function stringifyDomId(row, space) {
    return 'R' + row + "S" + space
  }

  function getSize(clone, target) {
    let cloneX = clone[0].offsetTop
    let cloneY = clone[0].offsetLeft
    let targetX = target[0].offsetTop
    let targetY = target[0].offsetLeft
    clone[0].style.top = targetX + 'px';
    clone[0].style.left = targetY + 'px';
  }

  function makeDraggable (elem) {
    $(elem).draggable({
      cursorAt: {left: 5, top: 5},
      stop: function (event, ui) {
        $(this).remove();
      }
    });
  }

  function saveGarden() {
    console.log('saving')
    console.log(vm.spaces);
    GardenService.saveGarden(vm.gardenId, vm.spaces)
  }

  $rootScope.$on('selectedPlantChange', function (event, data) {
    vm.currentPlant = data;
  })

// }
}

PlannerController.$inject = ['$rootScope', 'GardenService', '$cookies'];
export { PlannerController };