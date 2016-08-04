import angular from 'angular';

import { LoginController } from './controllers/login.controller';
import { RegisterController } from './controllers/register.controller';

import { UserService } from './services/user.service';

angular
  .module('app.users', [])
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService);