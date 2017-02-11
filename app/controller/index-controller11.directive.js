(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexDirectiveController', IndexDirectiveController);

    IndexDirectiveController.$inject = ['pdAlertService', 'pdStorageService'];

    function IndexDirectiveController(pdAlertService, pdStorageService) {
        var vm = this;
        vm.entidade = {};
        vm.lista = [
            {value: '1', descricao: 'Valor1'},
            {value: '2', descricao: 'Valor2'},
            {value: '3', descricao: 'Valor3'},
            {value: '4', descricao: 'Valor4'},
            {value: '5', descricao: 'Valor5'}
        ];

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;

        init();

        function init() {

            if (!pdStorageService.isNavegadorSuportaStorage()) {
                pdAlertService.showError('Não suportado');
            }

            var entidade = pdStorageService.get('entidade');

            if (entidade){
                vm.entidade = entidade;
            }
        }

        function salvar() {
            pdStorageService.set('entidade', vm.entidade);
            pdAlertService.showSuccess('Sucesso ao salvar');
        }
        
        function limpar() {
            vm.entidade = {};
        }

        function excluir() {
            pdStorageService.remove('entidade');
            pdAlertService.showSuccess('Sucesso ao excluido');
        }
    }

})();



