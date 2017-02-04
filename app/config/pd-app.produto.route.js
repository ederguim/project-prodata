(function () {
    'use strict';

    angular.module('pdProject').config(config);

    function config($stateProvider, $urlRouterProvider) {

        const cadastroProduto = {
            name: 'cadastroProduto',
            url: '/cadastro-produto/:id',
            templateUrl: 'app/uc-produtos/views/cadastro.produto.html',
        };

        const pesquisaProduto = {
            name: 'pesquisaProduto',
            url: '/pesquisa-produto',
            templateUrl: 'app/uc-produtos/views/pesquisa.produto.html',
        };

        $stateProvider
            .state('cadastroProduto', cadastroProduto)
            .state('pesquisaProduto', pesquisaProduto);

        $urlRouterProvider.otherwise('/pesquisa-produto');
    }
})();