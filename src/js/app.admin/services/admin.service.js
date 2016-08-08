function AdminService ($cookies) {

  this.admin = admin

  function admin () {
    $cookies.get('admin');
  }

}

AdminService.$inject = ['$cookies'];
export { AdminService };