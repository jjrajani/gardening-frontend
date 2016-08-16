import angular from 'angular';

import { PlannerController } from './controllers/planner.controller';
import { NavService } from '../app.plant/services/nav-card.service';

angular
  .module('app.planner', [])
  .controller('PlannerController', PlannerController)
  .service('NavService', NavService)
;