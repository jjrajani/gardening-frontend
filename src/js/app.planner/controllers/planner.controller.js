function PlannerController () {

  let vm = this;
  vm.drop = drop;
  vm.start = start;

  console.log('PlannerController');

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
}
}

PlannerController.$inject = [];
export { PlannerController };