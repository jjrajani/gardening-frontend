
// Controllers
import { NavCardController } from './controllers/navcard.controller';

// Directives
import { navCard } from './directives/navcard.directive';

//Services
import { NavCardService } from './services/navcard.service';
angular
  .module('app.nav', [])
  .directive('navCard', navCard)
  .service('NavCardService', NavCardService)
  .controller('NavCardController', NavCardController)
  ;