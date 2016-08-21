function PlannerController ($rootScope, GardenService, $cookies) {

  let vm = this;
  vm.drop = drop;
  // vm.start = start;
  vm.getNumberArray = getNumberArray

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
    vm.spaceHeight = String(rowWidth / (vm.spacesInRows)) + "px";
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

  function drop(event, ui) {
    console.log(event)
    let target = $(event.target)
    console.log('target', target)
    let space = event.target;
    let clone = ui.helper.clone();
    target.append(clone);
    makeDraggable(clone);
    console.log('event.target', event.target);
    console.log('target', target)


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

  // $rootScope.$on('selectedPlantChange', function (event, data) {
  //   $rootScope.$broadcast('newPlantSelection', data)
  // })


// }
}

PlannerController.$inject = ['$rootScope', 'GardenService', '$cookies'];
export { PlannerController };