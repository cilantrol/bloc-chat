(function() {
    function HomeCtrl(Room) {
      this.room = Room.all;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
