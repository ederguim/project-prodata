(function () {
    'use strict';

    angular
        .module('pdArquitetura')
        .directive('pdHelloWorld', pdHelloWorld);

    function pdHelloWorld() {
        return {
            restrict: 'E',
            template: '<b>Olá</b> essa é minha primeira diretiva',
            scope: {},
            link: link
        };
        function link(scope, element, attrs) {

        }
    }
})();

