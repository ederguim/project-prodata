(function () {
    'use strict';

    angular
        .module('pdProject')
        .filter('maiusculo', maiusculo);

    function maiusculo() {
        return fitlerMaiusculo;

        function fitlerMaiusculo(input) {
            if (!input) {
                return '';
            }

            return input.toUpperCase();
        }
    }

})();

