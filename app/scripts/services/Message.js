(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child('messages');


      var messages = $firebaseArray(ref);



      /** @method .getByRoomId
      **  @desc Filter messages by roomId {object} property
      **  @type {array}
      **  @public
      */
      Message.getByRoomId = function(roomId)  {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
