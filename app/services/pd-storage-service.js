(function () {
    'use strict';

    angular
        .module('pdProject')
        .service('pdStorageService', pdStorageService);

    pdStorageService.$inject = ['localStorageService'];

    /* @ngInject */
    function pdStorageService(localStorageService) {
        var vm = this;
        vm.isNavegadorSuportaStorage = isNavegadorSuportaStorage;
        vm.set = set;
        vm.get = get;
        vm.remove = remove;
        vm.removeAll = removeAll;

        function isNavegadorSuportaStorage() {
            return localStorageService.isSupported;
        }

        function set(key, value) {
            return localStorageService.set(key, value);
        }

        function get(key) {
            return localStorageService.get(key);
        }

        function remove(key) {
            return localStorageService.remove(key);
        }

        function removeAll(key) {
            return localStorageService.clearAll(key);
        }
    }

})();

