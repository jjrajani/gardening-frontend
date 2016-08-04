import angular from 'angular';

import './app.core';
import './app.users';

angular
  .module('app', ['app.core', 'app.users'])