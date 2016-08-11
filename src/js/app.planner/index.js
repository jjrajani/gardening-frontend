import angular from 'angular';

import { PlannerController } from './controllers/planner.controller';

angular
  .module('app.planner', [])
  .controller('PlannerController', PlannerController)
;