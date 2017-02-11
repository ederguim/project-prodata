(function () {
    'use strict';

    angular.module('pdProject').config(config);

    function config($stateProvider, $urlRouterProvider) {

        const cadastro = {
            name: 'cadastro',
            url: '/cadastro',
            templateUrl: 'app/uc-login/views/cadastro.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/uc-login/controller/cadastro.js');
                }
            }
        };

        const login = {
            name: 'login',
            url: '/login',
            templateUrl: 'app/uc-login/views/login.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/uc-login/controller/login.js');
                }
            }
        };

        const home = {
            name: 'home',
            url: '/home/:user',
            templateUrl: 'app/uc-login/views/home.html',
            resolve: {
                carregarController: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/uc-login/controller/home.js');
                }
            }
        };

        $stateProvider
            .state('cadastro', cadastro)
            .state('login', login)
            .state('home', home);

        $urlRouterProvider.otherwise('/login');
    }
})();