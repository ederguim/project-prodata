(function () {
    'use strict';

    angular
        .module('pdProject')
        .directive('pdSuperCrud', pdSuperCrud);

    pdSuperCrud.$inject = ['$log'];

    /* @ngInject */
    function pdSuperCrud($log) {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directives/pd-super-crud/pd-super-crud.html',
            scope: {
                titulo: '@',
                tipo: '@',
                service: '='
            },
            transclude: {
                'header': '?pdSuperCrudHeader',
                'body': '?pdSuperCrudBody',
                'footer': '?pdSuperCrudFooter'
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

