(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state', 'pdStorageService', '$stateParams'];

    /* @ngInject */
    function HomeController($state, pdStorageService, $stateParams) {
        var vm = this;
        vm.entidade = {};

        vm.logout = logout;

        iniciar();

        function iniciar() {
            var user = $stateParams.user;
            var entidades = pdStorageService.get('entidades');
            angular.forEach(entidades, function (entidade) {
                if (user === entidade.user) {
                    vm.entidade = entidade;
                    return false;
                }
            });
        }

        function logout() {
            $state.go('login');
        }
    }

})();

