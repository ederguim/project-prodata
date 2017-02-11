(function () {
    'use strict';

    angular
        .module('pdProject')
        .service('PdService', PdService);

    PdService.$inject = ['$http', 'pdAlertService'];

    /* @ngInject */
    function PdService($http, pdAlertService) {
        return function (controller) {
            var self = this;

            self.controller = controller;
            self.entidade = {};
            self.provider = [];

            self.metodoSalvar = 'salvar';
            self.metodoExcluir = 'excluir';
            self.metodoPesquisar = 'pesquisar';

            self.salvar = salvar;
            self.salvar = limpar;
            self.salvar = excluir;
            self.salvar = pesquisar;

            function salvar() {
                return $http.post('rest/' + self.controller + '/' + self.metodoSalvar, self.entidade)
                    .then(salvarResult);
                function salvarResult(response) {
                    self.entidade = response.data;
                    pdAlertService.showSucess('Salvo com sucesso');
                }
            }

            function limpar() {
                self.entidade = {};
            }

            function excluir() {
                return $http.post('rest/' + self.controller + '/' + self.metodoExcluir, self.entidade)
                    .then(excluirResult);
                function excluirResult(response) {
                    pdAlertService.showSucess('Salvo com sucesso');
                }
            }

            function pesquisar() {
                return $http.post('rest/' + self.controller + '/' + self.metodoPesquisar, self.entidade)
                    .then(pesquisarResult);
                function pesquisarResult(response) {
                   self.provider = response.data;
                }
            }
        };
    }

})();

