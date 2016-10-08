
var app = angular.module('senseApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('loginCtrl', function ($scope, $location) {
    $scope.submit = function () {
        var uname = $scope.username;
        var password = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $location.path('/dashboard');
        }
        else{
            Materialize.toast('Invalid User', 4000)
        }
    };
});

app.controller('addrawController',function($scope,$http){
    $scope.addRaw() = function(){
        $http.post('add_raw.php',{'raw_material':$scope.raw_name,'price_per_kg':$scope.price_per_kg})
        .success(function(data){
            console.log(data);
        });
        
    }
});

