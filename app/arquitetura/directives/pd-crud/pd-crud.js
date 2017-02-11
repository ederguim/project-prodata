(function () {
    'use strict';

    angular
        .module('pdProject')
        .directive('pdCrud', pdCrud);

    pdCrud.$inject = ['$log'];

    /* @ngInject */
    function pdCrud($log) {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directives/pd-crud/pd-crud.html',
            scope: {
                titulo: '@',
                tipo:'@',
                salvar: '&',
                excluir: '&',
                limpar: '&'
            },
            transclude: {
                'header': '?pdCrudHeader',
                'body': '?pdCrudBody',
                'footer': '?pdCrudFooter'
            },
            link: link
        };

        function link(scope, element, attrs) {

            init();

            function init() {
                verificarParametroNaoInformado();
                definirValoresDefault();
            }

            function verificarParametroNaoInformado() {
                if (!scope.titulo) {
                    $log.error('Atenção: parametro nao informado');
                }
            }

            function definirValoresDefault() {
                scope.formName = 'formPdCrud' + scope.$id;
                scope.panelClass = 'panel-' + (scope.tipo || 'default');
            }
        }
    }
})();

