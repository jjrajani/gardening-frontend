function PlannerController ($rootScope, GardenService, $cookies, PlannerService) {

  let vm = this;
  vm.drop = drop;
  vm.currentPlant = {}
  vm.getNumberArray = getNumberArray;
  vm.plants = [];
  vm.spaces = [];
  vm.plantsInLibrary = {};
  vm.saveGarden = saveGarden;

  init();

  console.log('PlannerController');
  vm.garden = {};

  function getNumberArray (num) {
    console.log('NUM', num)
    return new Array(num)
  }

  function init_plants() {
    PlannerService.getPlants().then(res => {
      vm.plantsInLibrary = res.data
      init_gardens()
    })
  }
  function init_gardens () {
    GardenService.getGardens().then( res => {
      vm.gardenId = $cookies.get('current_garden')
      vm.garden = res.data.filter( garden => {
        return String(garden.id) === vm.gardenId
      })
      vm.rows = vm.garden[0].height
      vm.spacesInRows = vm.garden[0].width
      vm.spaceWidth = String(100/vm.spacesInRows) + "%";
      let rowWidth = $('.row-1')[0].offsetWidth;
      vm.spaceHeight = String(rowWidth / (vm.spacesInRows))
      if ( vm.spaceHeight > 120 ) {
        vm.spaceHeight = "100px"
        vm.spaceWidth = "100px"
      }
      init_spaces()
    });
  }
  function init_spaces () {
    vm.gardenId = $cookies.get('current_garden')
    GardenService.getSpaces(vm.gardenId).then( res => {
      vm.currentPlants = res.data;
      if (vm.currentPlants.length > 0) {
        for (var a = 0; a < vm.currentPlants.length; a++) {
          let spacePlant = vm.plantsInLibrary.filter( (plant) => {
            return vm.currentPlants[a].plant_id === plant.id;
          })
          let gardenRow = PlannerService.row(vm.currentPlants[a].dom_id);
          let gardenSpace = PlannerService.space(vm.currentPlants[a].dom_id);
          let dom_row = $('.row-' + gardenRow);
          let dom_space = $('.space-' + gardenSpace);
          let dom_spaces = dom_row[0].children
          let size = dom_spaces[0].offsetWidth;
          size = PlannerService.sizify(size, spacePlant[0].seed_count);
          for (var b = 0; b < dom_spaces.length; b++) {
            if (dom_spaces[b].classList.contains('space-' + gardenSpace)) {
              let seedHTML = `<li class="plant clone">`;
              for (var c = 0; c < spacePlant[0].seed_count; c++) {
                let seedClass = PlannerService.stringify(spacePlant[0].seed_count)
                seedHTML += `<p style="height: ${size}; width: ${size};" class="${seedClass}"><img src="${spacePlant[0].image}" style="width: 100%;"></p>`
              }
              seedHTML += "</li>"
              dom_spaces[b].innerHTML = seedHTML;
            }
            makeDraggable($('.clone'))
          }
        }
      }
    });
  }

  function init() {
    init_plants()
  }
  

  $(window).resize( function () {
    vm.rows = vm.garden[0].height
    vm.spacesInRows = vm.garden[0].width
    vm.spaceWidth = String(100/vm.spacesInRows) + "%";
    let rowWidth = $('.row-1')[0].offsetWidth;
    vm.spaceHeight = String(rowWidth / (vm.spacesInRows)) + "px";
    let spaces = $('.space')
    spaces.each(space => {
      spaces[space].style.height = vm.spaceHeight;
    })
  })

  let vmIndex = 0;

  function drop(event, ui, gardenRow, gardenSpace) {
    vmIndex++;
    let target = $(event.target)
    let space = event.target;
    let clone = ui.helper.clone();
    makeDraggable(clone);
    getSize(clone, target);
    let dom_id = stringifyDomId(event.target.parentElement.id, event.target.id);
    let openSpace = '';
    for (var i = 0; i < vm.spaces.length; i++) {
      if (vm.spaces[i].dom_id === dom_id) {
        event.target.innerHTML = '';
        target.append(clone);
        vm.spaces[i] = {plant_id: vm.currentPlant.id, garden_id: vm.garden[0].id, dom_id: dom_id}
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

PlannerController.$inject = ['$rootScope', 'GardenService', '$cookies', 'PlannerService'];
export { PlannerController };