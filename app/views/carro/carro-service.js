(function () {
    'use strict';

    angular
        .module('pdProject')
        .service('CarroService', CarroService);

    CarroService.$inject = ['PdService'];

    /* @ngInject */
    function CarroService(PdService) {
        this.getPdService = getPdService();

        function getPdService() {
            var ps = new PdService('carroController');
            return ps;
        }
    }

})();

