angular.module("pdProject").controller('IndexController', IndexController);

IndexController.$inject = ['$scope', '$state'];

function IndexController($scope, $state) {

    $scope.alterarRota = alterarRota;

    function alterarRota(state) {
        $state.go(state);
    }

}

