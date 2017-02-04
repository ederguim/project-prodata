(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['pdAlertService'];

    /* @ngInject */
    function IndexController(pdAlertService) {
        var vm = this;
        vm.entidade = {};
        vm.listaDePessoas = [];

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.editar = editar;
        vm.excluir = excluir;

        function salvar() {
            if (vm.formIndex.$invalid) {

                angular.forEach(vm.formIndex.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setTouched();
                    }
                });
                pdAlertService.showError('Campos obrigatorios não preenchidos');
                return;
            }
            vm.listaDePessoas.push(vm.entidade);
            limpar();
            pdAlertService.showSuccess('Cadastro realizado com sucesso');
        }

        function limpar() {
            vm.entidade = {};
            angular.element('#itNome').focus();
        }

        function editar(ent) {
            vm.entidade = ent;
        }

        function excluir(index) {
            vm.listaDePessoas.splice(index);
        }

    }

})();


