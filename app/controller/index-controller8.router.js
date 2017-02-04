(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state'];

    /* @ngInject */
    function IndexController($state) {
        var vm = this;
        vm.alterarRota = alterarRota;

        function alterarRota(state) {
            $state.go(state);
        }
    }

})();



