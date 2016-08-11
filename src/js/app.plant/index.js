import angular from 'angular';

import { plannerPlantCard } from './directives/planner-plant-card.directive';
import { libraryPlantCard } from './directives/library-plant-card.directive';

import { PlannerPlantCardController } from './controllers/planner-plant-card.controller';
angular
  .module('app.plant', [])
  .controller('PlannerPlantCardController as vm', PlannerPlantCardController)
  .directive('plannerPlantCard', plannerPlantCard)
  .directive('libraryPlantCard', libraryPlantCard)
  ;