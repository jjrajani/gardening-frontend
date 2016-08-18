import angular from 'angular';

import { run } from './utilities/run';

import { LoginController } from './controllers/login.controller';
import { RegisterController } from './controllers/register.controller';
import { ProfileController } from './controllers/profile.controller';

import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';

angular
  .module('app.users', [])
  .run(run)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .service('ProfileService', ProfileService)
;
