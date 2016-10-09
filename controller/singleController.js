var app = angular.module('senseApp', []);

app.controller('rawController', function ($scope, $http) {
    $scope.rawClear = function () {
        $scope.raw_material = '';
        $scope.price_per_kg = '';
    }

    $scope.rawCheck = function (rawValue) {
        if (rawValue) {
            update();
        }
        else {
            insert();
        }
    }

    //insert method
    function insert() {
        if ($scope.raw_material == null) {
            alert('Raw Material Name required');
        }
        else if ($scope.update == null) {
            alert('Price per kg required');
        }
        $http.post('add_raw.php',
            { 'raw_material': $scope.raw_name, 'price_per_kg': $scope.price_per_kg })
            .success(function (data) {
                $scope.raw_material = '';
                $scope.price_per_kg = '';
                console.log('Insert Called', data);
            });
    }

    //Update method
    function update() {
        var raw_name = $scope.raw_material;
        var price_per_kg = $scope.price_per_kg;
        $http.post('update_raw.php',
            { 'raw_material': raw_name, 'price_per_kg': price_per_kg })
            .success(function (data) {
                console.log('Updated Called', data);
            });
        console.log('Update Called');
    }


});
