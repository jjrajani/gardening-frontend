import angular from 'angular';

//Directives
import { plannerPlantCard } from './directives/planner-plant-card.directive';
import { libraryPlantCard } from './directives/library-plant-card.directive';
import { navCard } from './directives/nav-card.directive';

// Controllers
import { PlannerPlantCardController } from './controllers/planner-plant-card.controller';
import { LibraryPlantCardController } from './controllers/library-plant-card.controller';
import { NavCardController } from './controllers/nav-card.controller';

// Services
import { NavService } from './services/nav-card.service';

angular
  .module('app.plant', [])
  .controller('PlannerPlantCardController', PlannerPlantCardController)
  .controller('LibraryPlantCardController', LibraryPlantCardController)
  .controller('NavCardController', NavCardController)
  .directive('libraryPlantCard', libraryPlantCard)
  .directive('plannerPlantCard', plannerPlantCard)
  .directive('navCard', navCard)
  .service('NavService', NavService)
  ;