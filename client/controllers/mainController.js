angular.module('myApp').controller('mainController', ['$scope',
    function($scope) {
        $scope.test = "Hello";

        $scope.pictures = [
        'https://static-s.aa-cdn.net/img/gp/20600006280265/kIvSw5CkmLiqAxBMSbh3e26et48ueVdYAoB-4GKgopOtDnHoqEE7TTorERm0XYvT9Rk=w300',
        'http://www.raut.ru/upload/medialibrary/caa/caaf7fc8a5c19a3ee49e26c0ffa3f212.jpg',
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR39_wPEnBeSEOiHXW1Lc0rwqhEVktULcqnvDDA4J-DZL0gndic',
        'http://www.petsworld.in/blog/wp-content/uploads/2014/07/golden-puppy-with-kittens.jpg',
        'https://s-media-cache-ak0.pinimg.com/originals/30/27/d0/3027d0b550958fa1871e0a4dd475fba6.jpg',
        'http://data.whicdn.com/images/897396/large.png'
        ];
    }

]);