(function () {
    'use strict';

    angular.module('pdArquitetura', []);

    angular.module('pdProject',
        [
            'ngMessages',
            'ngAnimate',
            'toastr',
            'ui.grid',
            'ui.grid.selection',
            'ngMaterial',
            'ngAria',
            'ui.router',
            'oc.lazyLoad',
            'angular-loading-bar',
            'pdArquitetura',
            'LocalStorageModule'
        ]
    );
})();