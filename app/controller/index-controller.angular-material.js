(function () {
    'use strict';

    angular.module('pdProject').controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'pdAlertService'];

    function IndexController($scope, pdAlertService) {

        $scope.entidade = {};
        $scope.listaDePessoas = [];

        $scope.salvar = salvar;
        $scope.limpar = limpar;
        $scope.editar = editar;
        $scope.excluir = excluir;
        $scope.getStyleLinha = getStyleLinha;

        function salvar() {
            if ($scope.formIndex.$invalid) {

                angular.forEach($scope.formIndex.$error, function (errorField) {
                    for (var i = 0; i < errorField.length; i++) {
                        errorField[i].$setTouched();
                    }
                });
                pdAlertService.showError('Campos obrigatorios não preenchidos');
                return;
            }
            $scope.listaDePessoas.push($scope.entidade);
            limpar();
            pdAlertService.showSuccess('Cadastro realizado com sucesso');
        }

        function limpar() {
            $scope.entidade = {};
            angular.element('#itNome').focus();
        }

        function editar(ent) {
            $scope.entidade = ent;
        }

        function excluir(index) {
            $scope.listaDePessoas.splice(index);
        }

        function getStyleLinha(linhaSelect) {
            var style = {};
            if (linhaSelect.cor) {
                style.backgroundColor = linhaSelect.cor;
            }

            return style;
        }

        $scope.gridOptions = {
            data: 'listaDePessoas',
            enableColumnMenu: false,
            enableRowSelection: true,
            rowTemplate: 'app/templates/row-template.html',
            columnDefs: [
                {name: 'Nome', field: 'nome'},
                {name: 'Sobrenome', field: 'sobrenome'},
                {name: 'Sexo', field: 'sexo'},
                {name: 'Nascimento', field: 'nascimento', cellTemplate: 'app/templates/template-date.html'},
                {
                    name: 'Ações',
                    cellTemplate: 'app/templates/template-grid-acao.html',
                    onclickEx: excluir,
                    onclickEd: editar
                }
            ]
        };
    }
})();