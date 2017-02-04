(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexDirectiveController', IndexDirectiveController);

    function IndexDirectiveController() {
        var vm = this;

        vm.entidade = {};
    }

})();



