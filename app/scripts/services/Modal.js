(function() {
  function Modal(Room) {

    /** @method .add
    **  @desc add rooms to Room Object
    **  @type {object} room
    **  @public
    */
    Room.add = function(room) {
      rooms.$add( new_room  );
      /*.then(function(ref) {
        var id = ref.key;
        console.log("added record with id: " +id);
        rooms.$indexFor(id);  //returns location in the array
      });*/
    };

  }

  angular
    .module('blocChat')
    .factory('Modal', ['Room', Modal]);
})();
