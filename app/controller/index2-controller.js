(function () {
    'use strict';

    angular.module('pdProject').controller('IndexController', IndexController);

    function IndexController($scope) {

        $scope.$watch('cor', onWatchCor);

        $scope.cssDaDiv = {};
        $scope.cssDaDiv.width = '150px';
        $scope.cssDaDiv.height = '150px';

        $scope.classCss = '';


        function onWatchCor(newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
            $scope.cssDaDiv.backgroundColor = newValue;

            if (newValue.toString() === '1') {
                $scope.classCss = 'div1';
            } else if (newValue.toString() === '2') {
                $scope.classCss = 'div2 div3';
            }
        }
    }
})();

