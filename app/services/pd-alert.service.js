angular.module('pdProject').service('pdAlertService', pdAlertService);

function pdAlertService(toastr) {

    this.showError = showError;
    this.showSuccess = showSuccess;

    function showSuccess(message, title) {
        title = title || 'Sucesso';
        toastr.info(message, title);
    }

    function showError(message, title) {
        title = title || 'Error';
        toastr.error(message, title);
    }
}

(function () {
    'use strict';

    angular
        .module('pdProject')
        .service('pdAlertService', pdAlertService);

    pdAlertService.$inject = ['toastr'];

    /* @ngInject */
    function pdAlertService(toastr) {
        var vm = pdAlertService;
        vm.showError = showError;
        vm.showSuccess = showSuccess;

        function showSuccess(message, title) {
            title = title || 'Sucesso';
            toastr.info(message, title);
        }

        function showError(message, title) {
            title = title || 'Error';
            toastr.error(message, title);
        }
    }

})();

