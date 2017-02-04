(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('ProdutoCadastroController', ProdutoCadastroController);

    ProdutoCadastroController.$inject = ['$rootScope', 'pdAlertService', '$state', '$stateParams'];

    /* @ngInject */
    function ProdutoCadastroController($rootScope, pdAlertService, $state, $stateParams) {
        var vm = this;
        vm.produto = {};

        var id = $stateParams.id;
        var idInt = parseInt(id);
        if (id !== undefined && id !== '') {
            angular.forEach($rootScope.listaDeProdutos, function (produto) {
                if (produto.idProduto === idInt) {
                    vm.produto = produto;
                }
            });
        }

        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.editar = editar;
        vm.excluir = excluir;

        function salvar() {
            $rootScope.listaDeProdutos = [];
            vm.produto.idProduto = 1;
            $rootScope.listaDeProdutos.push(vm.produto);
            $state.go('pesquisaProduto');
            limpar();
        }

        function limpar() {
            vm.produto = {};
        }

        function editar(ent) {
            vm.produto = ent;
        }

        function excluir(index) {
            $rootScope.listaDeProdutos.splice(index);
        }
    }

})();

