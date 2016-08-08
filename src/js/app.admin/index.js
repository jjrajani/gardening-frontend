import angular from 'angular';
import 'angular-cookies';

import { AdminController } from './controllers/admin.controller';
import { AdminPlantController } from './controllers/admin.plant.controller';
import { AdminNewPlantController } from './controllers/admin.new.plant.controller';
import { AdminSinglePlantController } from './controllers/admin.single.plant.controller';

import { AdminService } from './services/admin.service';

angular
  .module('app.admin', ['ngCookies'])
  .controller('AdminController', AdminController)
  .controller('AdminPlantController', AdminPlantController)
  .controller('AdminNewPlantController', AdminNewPlantController)
  .controller('AdminSinglePlantController', AdminSinglePlantController)
  .service('AdminService', AdminService)
;