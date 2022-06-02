var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = 'HieuLu';
    $scope.email = 'HieuLu@gmail.com';
    $scope.password = '123';
    $scope.password2 = '123';
});