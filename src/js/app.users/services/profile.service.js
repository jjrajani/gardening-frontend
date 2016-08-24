function ProfileService (UserService, $http, SERVER) {

  this.getProfile = getProfile;
  this.monthify = monthify;
  this.dayString = dayString;
  this.dateStringify = dateStringify;
  this.sqFt = sqFt;
  this.getPlants = getPlants;


  function getProfile () {
    return $http.get(SERVER.URL + 'profile', UserService.headers());
  }

  function getPlants () {
    return $http.get(SERVER.URL + 'plants')
  }

  function dateStringify (date) {
    // console.log(date);
    let month = date.slice( 5, 7)
    month = this.monthify(month);
    // console.log(month);
    let year = date.slice( 0, 4)
    // console.log(year);
    date = month + ", " + year
    // console.log(date)
    return date
  }

  function monthify (month) {
    if (month === '01') {
      month = "January"
    }
    if (month === '02') {
     month = "February" 
    }
    if (month === '03') {
      month = "March"
    }
    if (month === '04') {
      month = "April"
    }
    if (month === '05') {
      month = "May"
    }
    if (month === '06') {
      month = "June"
    }
    if (month === '07') {
      month = "July"
    }
    if (month === '08') {
      month = "August"
    }
    if (month === '09') {
      month = "September"
    }
    if (month === '10') {
      month = "October"
    }
    if (month === '11') {
      month = "November"
    }
    if (month === '12') {
      month = "Decmeber"
    }
    return month
  }

  function dayString (day) {
    if (day[day.length-1] === '1') {
      day += 'st';
    }
    if (day[day.length-1] === '2') {
      day += 'nd';
    }
    if (day[day.length-1] === '3') {
      day += 'rd';
    }
    if (day[day.length-1] === '4' ||
        day[day.length-1] === '5' ||
        day[day.length-1] === '6' ||
        day[day.length-1] === '7' ||
        day[day.length-1] === '8' ||
        day[day.length-1] === '9' ||
        day[day.length-1] === '10') {
      day += 'th';
    }
    return day
  }

  function sqFt (height, width) {
    return height * width;
  }

}
ProfileService.$inject = ['UserService', '$http', 'SERVER'];
export { ProfileService };