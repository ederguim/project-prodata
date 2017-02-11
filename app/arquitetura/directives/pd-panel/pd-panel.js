(function () {
    'use strict';

    angular
        .module('pdProject')
        .directive('pdPanel', pdPanel);

    /* @ngInject */
    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl: 'app/arquitetura/directives/pd-panel/pd-panel.html',
            scope: {
                titulo: '@',
                tipo:'@',
                iconClass: '@'
            },
            transclude: true,
            link: link,
        };
        function link(scope, element, attrs) {
            scope.panelClass = 'panel-' + (scope.tipo || 'default');
            scope.iconClass = scope.iconClass || 'fa fa-align-justify';
        }
    }
})();

