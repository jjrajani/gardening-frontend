function PlannerService ($http, SERVER) {
  
  this.row = row;
  this.space = space;
  this.getPlants = getPlants;
  this.stringify = stringify;
  this.sizify = sizify;

  function getPlants () {
    return $http.get(SERVER.URL + 'plants')
  }

  function row (string) {
    let r = string.indexOf("R");
    let s = string.indexOf("S");
    let rowNum = string.slice(r+1, s);
    return rowNum;
  }

  function space (string) {
    let s = string.indexOf("S");
    let spaceNum = string.slice(s+1)
    return spaceNum;
  }

  function sizify (spaceWidth, seeds) {
    let size = '';
    if (seeds === 1) {
      size = spaceWidth + 'px'
    } else if (seeds === 4) {
      size = Math.floor(spaceWidth/2)-1 + 'px'
    } else if (seeds === 9) {
      size = Math.floor(spaceWidth/3)-1 + 'px'
    } else if (seeds === 16) {
      size = Math.floor(spaceWidth/4)-1 + 'px'
    }
    return size;
  }

  function stringify(seeds) {
    let css = '';
    if (seeds === 1) {
        css = "seed-one flip"
    } else if (seeds === 4 || seeds === 2 ) {
      css = "seed-two flip"
    } else if (seeds === 9 ) {
      css = "seed-three flip"
    } else if (seeds === 16 ) {
      css = "seed-four flip"
    }
    return css
  };
}

PlannerService.$inject = ['$http', 'SERVER'];
export { PlannerService };