
// Controllers
import { NavCardController } from './controllers/nav-card.controller';

// Directives
import { navCard } from './directives/nav-card.directive';

//Services
import { NavService } from './services/nav-card.service';
angular
  .module('app.nav', [])
  .directive('navCard', navCard)
  .service('NavService', NavService)
  .controller('NavCardController', NavCardController)
  ;