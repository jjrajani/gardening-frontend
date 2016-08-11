import angular from 'angular';

import { LibraryController } from './controllers/library.controller'

angular
  .module('app.library', [])
  .controller('LibraryController', LibraryController)
;