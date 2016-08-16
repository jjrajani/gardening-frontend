import angular from 'angular';

//Directives
import { plannerPlantCard } from './directives/planner-plant-card.directive';
import { encyclopediaCard } from './directives/encyclopedia-card.directive';


// Controllers
import { PlannerPlantCardController } from './controllers/planner-plant-card.controller';
import { EncyclopediaCardController } from './controllers/encyclopedia-card.controller';


// Services


angular
  .module('app.plant', [])
  .controller('PlannerPlantCardController', PlannerPlantCardController)
  .controller('EncyclopediaCardController', EncyclopediaCardController)
  .directive('libraryPlantCard', encyclopediaCard)
  .directive('plannerPlantCard', plannerPlantCard)
  ;