(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var query = 

    Room.all = rooms;
    /*Room.getRooms = function(numberOfRooms) {
      this.rooms = [];
      this.rooms.push(ref);
      return this.rooms;
    };*/
  return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
