import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

import { run } from './utilities/run';

import { LayoutController } from './controllers/layout.controller';
import { HomeController } from './controllers/home.controller';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .run(run)
  .constant('SERVER', serverConstant)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
;