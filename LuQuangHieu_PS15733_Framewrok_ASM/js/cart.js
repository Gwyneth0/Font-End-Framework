
const app = angular.module('appModule', ["ngRoute"]);

app.controller('appController', function ($scope, $rootScope) {   
    $rootScope.cart = localStorage.getItem('cart') || [];

    

});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./components/products/products.html"
        })
        .when("/products", {
            templateUrl: "./components/products/products.html"
        })
        .when("/products/:productId/edit", {
            templateUrl: "./components/products/product_form.html"
        })
        .when("/products/new", {
            templateUrl: "./components/products/product_form.html"
        })
        .when("/login", {
            templateUrl: "./components/login/login.html"
        })
        .when("/register", {
            templateUrl: "./components/register/register.html"
        })
        .when("/cart", {
            templateUrl: "./components/cart/cart.html"
        })
        .when("/checkout", {
            templateUrl: "./components/cart/checkout.html"
        })
        .otherwise({
            templateUrl: "./components/error/404.html"
        });
});
// https://60ae432680a61f0017332d65.mockapi.io/api/v1/products
// https://60ae432680a61f0017332d65.mockapi.io/api/v1/products/1

// list().skip(10).limit(20)
// 1,2,3,4,5.....,5000
// select .... myColumn where  and isDeleted = 0 