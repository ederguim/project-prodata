(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('ProdutoPesquisaController', ProdutoPesquisaController);

    ProdutoPesquisaController.$inject = ['$rootScope', '$state'];

    /* @ngInject */
    function ProdutoPesquisaController($rootScope, $state) {
        var vm = this;
        vm.editar = editar;

        function editar(ent) {
            $state.go('cadastroProduto', {id: ent.idProduto});
        }

        vm.gridOptions = {
            data: 'listaDeProdutos',
            enableColumnMenu: false,
            enableRowSelection: true,
            columnDefs: [
                {name: 'Descricao', field: 'descricao'},
                {name: 'Quantidade', field: 'quantidade'},
                {
                    name: 'Ações', cellTemplate: 'app/templates/template-grid-acao.html',
                    onclickEd: editar
                }
            ]
        };
    }

})();

