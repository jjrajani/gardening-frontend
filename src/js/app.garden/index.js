import angular from 'angular';

import { GardenController } from './controllers/garden.controller';
import { GardenService } from '../app.core/services/garden.service';

angular
  .module('app.garden', [])
  .controller('GardenController', GardenController)
  .service('GardenService', GardenService)
;  