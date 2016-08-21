function PlannerController ($rootScope, GardenService, $cookies) {

  let vm = this;
  vm.drop = drop;
  vm.start = start;
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
  })

  function start(event, ui) {
    $(ui.helper).addClass('clone');
  }

  function drop(event, ui) {
    let clone = ui.helper.clone();
    $('.garden').append(clone);
    makeDraggable(clone);
    console.log(clone);
    var toMoveX = (clone[0].offsetTop - $('.garden')[0].offsetTop);
    var toMoveY = (clone[0].offsetLeft - $('.garden')[0].offsetLeft);
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

  // $rootScope.$on('selectedPlantChange', function (event, data) {
  //   $rootScope.$broadcast('newPlantSelection', data)
  // })


}
}

PlannerController.$inject = ['$rootScope', 'GardenService', '$cookies'];
export { PlannerController };