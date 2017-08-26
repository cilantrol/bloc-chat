(function() {
  function config($locationProvider, $stateProvider)  {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

      $stateProvider
        .state('home',  {
            url: '/',
            controller: 'HomeCtrl as home',
            templateUrl: '/templates/home.html'
        })
        .state('index', {
          url: '/index',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        })
        //this is actually useless, will remove later
        //room is an ng-include template add on not a separate webpage.
        //NEVERMIND INSTRUCTIONS STATE TO USE ROUTER METHOD
        .state('room',  {
          url: '/home',
          controller: 'RoomCtrl as room',
          templateUrl: '/templates/room.html'
        });
  }


  angular
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();
