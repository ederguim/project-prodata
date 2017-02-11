(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['pdAlertService', 'pdStorageService', '$state'];

    /* @ngInject */
    function LoginController(pdAlertService, pdStorageService, $state) {
        var vm = this;
        vm.user = '';
        vm.senha = '';

        vm.login = login;
        vm.realizarCadastro = realizarCadastro;

        function login() {
            var entidades = pdStorageService.get('entidades');
            var user;
            if (entidades) {
                angular.forEach(entidades, function (entidade) {
                    if (vm.user === entidade.user && vm.senha === entidade.senha) {
                        user = entidade;
                        return false;
                    }
                });

                if (user !== undefined) {
                    $state.go('home' , {user: user.user});
                } else {
                    pdAlertService.showError('Dados de login invalidos');
                }

            } else {
                pdAlertService.showError('Dados de login invalidos');
            }
        }

        function realizarCadastro() {
            $state.go('cadastro');
        }

    }

})();

