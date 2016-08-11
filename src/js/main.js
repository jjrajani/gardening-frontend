import angular from 'angular';

import './app.core';
import './app.users';
import './app.admin';
import './app.planner';
import './app.plant';
import './app.library';
import './app.fellow';

angular
  .module('app', ['app.core', 'app.users', 'app.admin', 'app.planner', 'app.plant', 'app.library', 'app.fellow'])