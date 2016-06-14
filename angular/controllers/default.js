(function(){

    var controllers = angular.module('controllers', []);

    controllers.controller('MenuController', [function() {
        this.option = 'home';
        this.setMenu = function(setMenu) {
            this.option = setMenu;
        };
        this.getMenu = function(getMenu) {
            return this.option === getMenu;
        };
    }]);

    controllers.controller('DefaultController', ['$scope', '$state', '$http', '$rootScope', 'homeService',
        function ($scope, $state, $http, $rootScope, homeService) {
            $scope.content = homeService.content();
            //$scope.videos = {};
            //$scope.videos = videosService.videos();

            //$scope.viewSchool = function($id) {
            //    $state.transitionTo('schools-detail', {id : $id});
            //}

        }
    ]);

    controllers.controller('PlaylistsController', ['$scope', '$state', '$http', 'PlaylistsService',
        function ($scope, $state, $http, PlaylistsService) {

            /*$scope.schools = {};
            $scope.schools = dummyService.schools();

            $scope.viewSchool = function($id) {
                $state.transitionTo('schools-detail', {id : $id});
            }*/

        }
    ]);

    controllers.controller('SchoolViewController',
        ['$scope', '$state', '$stateParams', '$http', 'dummyServiceView', 'setMenu',
        function ($scope, $state, $stateParams, $http, dummyServiceView, setMenu) {
            $scope.school = {};
            $scope.school.id = $stateParams.id;
            setMenu.setMenu('school');
            $scope.school = dummyServiceView.school();

        }
    ]);

    controllers.controller('AboutController', function($scope, $state) {

    });

    controllers.controller('ContactController', function($scope, $state) {

    });

    controllers.controller('ActionController', function($scope, $state) {

    });

})();