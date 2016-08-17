import angular from 'angular';

// Controllers
import { OverviewController } from './controllers/overview.controller';
import { GrowCalController } from './controllers/grow-cal.controller';
import { StartingController } from './controllers/starting.controller';
import { SpacingController } from './controllers/spacing.controller';
import { GrowingController } from './controllers/growing.controller';
import { WateringController } from './controllers/watering.controller';
import { HarvestingController } from './controllers/harvesting.controller';
import { ProblemsController } from './controllers/problems.controller';
import { EncycNavController } from './controllers/encyc-nav.controller';

//Directives
import { overviewCard } from './directives/overview.directive';
import { growCalCard } from './directives/grow-cal.directive';
import { startingCard } from './directives/starting.directive';
import { spacingCard } from './directives/spacing.directive';
import { growingCard } from './directives/growing.directive';
import { wateringCard } from './directives/watering.directive';
import { harvestingCard } from './directives/harvesting.directive';
import { problemsCard } from './directives/problems.directive';
import { encycNavCard } from './directives/encyc-nav.directive';

//Services
// import { OverviewService } from './services/overview.service';
// import { GrowCalService } from './services/grow-cal.service';
// import { StartingService } from './services/starting.service';
// import { SpacingService } from './services/spacing.service';
// import { GrowingService } from './services/growing.service';
// import { WateringService } from './services/watering.service';
// import { HarvestingService } from './services/harvesting.service';
// import { ProblemsService } from './services/problems.service';
// import { EncycNavService } from './services/encyc-nav.service';
angular
  .module('app.encyclopedia', [])
  //controllers
  .controller('OverviewController', OverviewController)
  .controller('GrowCalController', GrowCalController)
  .controller('StartingController', StartingController)
  .controller('SpacingController', SpacingController)
  .controller('GrowingController', GrowingController)
  .controller('WateringController', WateringController)
  .controller('HarvestingController', HarvestingController)
  .controller('ProblemsController', ProblemsController)
  .controller('EncycNavController', EncycNavController)
  //directives
  .directive('overviewCard', overviewCard)
  .directive('growCalCard', growCalCard)
  .directive('startingCard', startingCard)
  .directive('spacingCard', spacingCard)
  .directive('growingCard', growingCard)
  .directive('wateringCard', wateringCard)
  .directive('harvestingCard', harvestingCard)
  .directive('problemsCard', problemsCard)
  .directive('encycNavCard', encycNavCard)
  //services
  // .service('OverviewService', OverviewService)
  // .service('GrowCalService', OverviewService)
  // .service('StartingService', OverviewService)
  // .service('SpacingService', OverviewService)
  // .service('GrowingService', GrowingService)
  // .service('WateringService', WateringService)
  // .service('HarvestingService', HarvestingService)
  // .service('ProblemsService', ProblemsService)
  // .service('EncycNavService', EncycNavService)
;