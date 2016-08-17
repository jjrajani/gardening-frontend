
// Controllers
import { NavCardController } from './controllers/navcard.controller';

// Directives
import { navCard } from './directives/navcard.directive';

//Services
import { NavService } from './services/navcard.service';
angular
  .module('app.nav', [])
  .directive('navCard', navCard)
  .service('NavService', NavService)
  .controller('NavCardController', NavCardController)
  ;