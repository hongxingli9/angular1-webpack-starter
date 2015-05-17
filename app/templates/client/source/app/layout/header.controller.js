(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state', '$rootScope', 'User', 'Event'];
    /* @ngInject */
    function HeaderController($state, $rootScope, User, Event) {
        var vm = this;

        vm.go = $state.go;
        vm.switchSidebar = switchSidebar;

        init();

        ////////////

        function init () {
            // udpate header based on auth event
            $rootScope.$on(Event.AUTH_LOGIN, _updateHeader);
            $rootScope.$on(Event.AUTH_LOGOUT, _updateHeader);
            $rootScope.$on(Event.AUTH_SESSION_VALID, _updateHeader);
        }

        function _updateHeader (e, userInfo) {
            if (userInfo) {
                vm.isLoggedIn = true;
                vm.userInfo = userInfo;
            } else {
                vm.isLoggedIn = false;
                vm.userInfo = null;
            }
        }

        function switchSidebar () {
            $rootScope.showSidebar = !$rootScope.showSidebar;
        }
    }
})();