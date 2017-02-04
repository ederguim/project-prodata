(function () {
    'use strict';

    angular
        .module('pdProject')
        .controller('IndexHttpController', IndexHttpController);

    IndexHttpController.$inject = ['$http', 'pdAlertService', '$q'];

    /* @ngInject */
    function IndexHttpController($http, pdAlertService, $q) {
        var vm = this;
        vm.isBtnDisabled = false;
        vm.listaDeDados = [];

        vm.carregarListaDados = carregarListaDados;

        init();

        function init() {
            configurarGrid();
        }

        function configurarGrid() {
            vm.gridOptions = {
                data: 'vm.listaDeDados'
            };
        }


        function carregarListaDados() {
            vm.isBtnDisabled = true;
            //var promisse = $http.get('https://jsonplaceholder.typicode.com/photos');
            //promisse.then(carregarResult, carregarError);

            executarProcessamentoAssincrono().then(carregarResult, carregarError);
        }

        function carregarResult(data) {
            if (data) {
                vm.listaDeDados = data;
            } else {
                vm.listaDeDados = [];
            }

            vm.isBtnDisabled = false;
        }

        function carregarError(error) {
            pdAlertService.error(error.message);
        }

        function executarProcessamentoAssincrono() {
            var listaDeDados1 = null;
            var listaDeDados2 = null;

            var deferred =$q.defer();

            $http.get('https://jsonplaceholder.typicode.com/comments').then(onResult1, carregarError);

            $http.get('https://jsonplaceholder.typicode.com/photos').then(onResult2, carregarError);

            return deferred.promise;

            function onResult1(response) {

                listaDeDados1 = response.data;

                if (listaDeDados1) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }

            function onResult2(response) {

                listaDeDados2 = response.data;

                if (listaDeDados2) {
                    var array = listaDeDados1.concat(listaDeDados2);
                    deferred.resolve(array);
                }
            }
        }
    }

})();



