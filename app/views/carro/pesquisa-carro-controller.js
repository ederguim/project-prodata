

(function () {

    'use strict';

    angular
        .module('pdProject')
        .controller('PesquisaCarroController', PesquisaCarroController);

    function PesquisaCarroController(CarroService) {
        var vm = this;
        vm.pdService = CarroService.getPdService();
    }

})()