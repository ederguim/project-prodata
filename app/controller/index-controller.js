angular.module("pdProject").controller('IndexController', IndexController);

function IndexController($scope, pdAlertService) {

    $scope.entidade = {};
    $scope.listaDePessoas = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;

    function salvar() {
        if ($scope.formIndex.$invalid) {

            angular.forEach($scope.formIndex.$error, function (errorField) {
                for (var i = 0; i < errorField.length; i++){
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
}

