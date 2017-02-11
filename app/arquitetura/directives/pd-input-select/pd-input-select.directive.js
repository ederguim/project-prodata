(function () {
    'use strict';

    angular
        .module('pdArquitetura')
        .directive('pdInputSelect', pdInputSelect);

    function pdInputSelect() {
        return {
            restrict: 'E',
            require: '^form',
            templateUrl: 'app/arquitetura/directives/pd-input-select/pd-input-select.directive.html',
            scope: {
                label: '@',
                ngRepeat: '=',
                ngRequired: '=',
                colspan: '@',
                provider: '=',
                propriedadeValor: '@',
                propriedadeDescricao: '@'
            },
            link: link
        };
        function link(scope, element, attrs, formCtrl) {
            scope.formCtrl = formCtrl;

            scope.propriedadeValor = scope.propriedadeValor || 'valor';
            scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';

            scope.classColspan = 'col-md-' + (scope.colspan || '3');
            scope.inputName = 'pdInputselect' + scope.$id;
        }
    }
})();



