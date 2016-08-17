import angular from 'angular';
import 'angular-dragdrop';

import './app.core';
import './app.users';
import './app.admin';
import './app.planner';
import './app.plant';
import './app.library';
import './app.fellow';
import './app.nav';

angular
  .module('app', ['app.core', 'app.users', 'app.admin', 'app.planner', 'app.plant', 'app.library', 'app.fellow', 'ngDragDrop', 'app.nav']) // , 'ngDragDrop'