(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('CadastroController', CadastroController);

    CadastroController.$inject = ['pdAlertService', 'pdStorageService', '$state'];

    /* @ngInject */
    function CadastroController(pdAlertService, pdStorageService, $state) {
        var vm = this;
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.voltar = voltar;

        vm.entidade = {};

        function salvar() {
            var registros = pdStorageService.get('entidades', vm.listaLogin) || [];
            registros.push(vm.entidade);
            pdStorageService.set('entidades', registros);
            pdAlertService.showSuccess('Cadastro realizado com sucesso');
            limpar();
        }

        function limpar() {
            vm.entidade = {};
        }

        function voltar() {
            $state.go('login');
        }
    }

})();

