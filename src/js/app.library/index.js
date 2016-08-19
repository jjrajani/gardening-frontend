import angular from 'angular';
import './app.encyclopedia';
import '../app.nav';

import { LibraryController } from './controllers/library.controller';
import { LibraryService } from './services/library.service';

angular
  .module('app.library', ['app.encyclopedia', 'app.nav'])
  .controller('LibraryController', LibraryController)
  .service('LibraryService', LibraryService)
;