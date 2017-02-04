(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', '$rootScope', 'pdAlertService'];

    /* @ngInject */
    function IndexController($scope, $rootScope, pdAlertService) {
        var vm = this;
        vm.diparaEvent = diparaEvent;

        $scope.$on('onEventTest', onEventTest);

        function onEventTest(event, data) {
            pdAlertService.showError('Objeto do evento = ' + data, 'Ok');
        }

        function diparaEvent() {
            $scope.$emit('onEventTest', 'teste');
        }
    }

})();


