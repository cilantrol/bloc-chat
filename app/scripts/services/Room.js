(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var query;

    /** @method .all
    **  @desc array of room {objects}
    **  @type {array}
    **  @public
    */
    Room.all = rooms;

    /** @method .add
    **  @desc add rooms to Room Object
    **  @type {object} room
    **  @public
    */
    Room.add = function(room) {
      rooms.$add( { roomName: room} );
      /*.then(function(ref) {
        var id = ref.key;
        console.log("added record with id: " +id);
        rooms.$indexFor(id);  //returns location in the array
      });*/
    };
    console.log(Room);
  return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
