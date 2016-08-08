import angular from 'angular';

import './app.core';
import './app.users';
import './app.admin';
import './app.planner'

angular
  .module('app', ['app.core', 'app.users', 'app.admin', 'app.planner'])