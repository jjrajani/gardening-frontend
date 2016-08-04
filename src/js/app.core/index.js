import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

import { LayoutController } from './controllers/layout.controller';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('LayoutController', LayoutController)
;