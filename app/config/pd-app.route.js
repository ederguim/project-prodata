angular.module('pdProject').config(config);

function config($stateProvider) {

    const cadastroCarro = {
        name: 'cadastroCarro',
        url: '/cadastro-carro',
        templateUrl: 'app/views/carro/cadastro-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                $ocLazyLoad.load('app/views/carro/cadastro-carro.html')
            }
        }
    };

    const pesquisaCarro = {
        name: 'pesquisaCarro',
        url: '/pesquisa-carro',
        templateUrl: 'app/views/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                $ocLazyLoad.load('app/views/carro/pesquisa-carro.html')
            }
        }
    };

    $stateProvider
        .state('cadastroCarro', cadastroCarro)
        .state('pesquisaCarro', pesquisaCarro);
}