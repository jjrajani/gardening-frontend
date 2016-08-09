import angular from 'angular';

import { LibraryController } from './controllers/library.controller'
import { LibraryService } from './services/library.service';


angular
  .module('app.library', [])
  .controller('LibraryController', LibraryController)
  .service('LibraryService', LibraryService)
;