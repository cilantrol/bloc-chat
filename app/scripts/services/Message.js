(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child('messages');
      var messages = $firebaseArray(ref);

      Message.all = messages;

      /** @method .getByRoomId
      **  @desc Filter messages by roomId {object} property
      **  @type {array}
      **  @public
      */
      Message.getByRoomId = function(roomId)  {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

      /** @method .send
      **  @desc takes message {object} as arguement and sends it to firebase
      **  @type {object}
      **  @public
      */
      Message.send = function(message) {
        messages.$add( message
                        //{content: message,
                        //userName: user,
                        //sentAt: firebase.database.ServerValue.TIMESTAMP,
                        //roomId: Room.all.$id
                        //}
                     );
      };
      console.log(Message);
      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
