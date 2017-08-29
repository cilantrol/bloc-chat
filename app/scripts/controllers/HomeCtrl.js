(function() {
    function HomeCtrl(Room) {
      this.room = Room.all;
      this.roomAdd = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
