import angular from 'angular';

//Directives
import { plannerPlantCard } from './directives/planner-plant-card.directive';

// Controllers
import { PlannerPlantCardController } from './controllers/planner-plant-card.controller';

// Services


angular
  .module('app.plant', [])
  .controller('PlannerPlantCardController', PlannerPlantCardController)
  .directive('plannerPlantCard', plannerPlantCard)
  ;