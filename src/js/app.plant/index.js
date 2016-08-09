import angular from 'angular';

import { plannerPlantCard } from './directives/planner-plant-card.directive';
import { libraryPlantCard } from './directives/library-plant-card.directive';
angular
  .module('app.plant', [])
  .directive('plannerPlantCard', plannerPlantCard)
  .directive('libraryPlantCard', libraryPlantCard)
  ;