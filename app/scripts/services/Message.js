(function() {
    function Message($firebaseArray, $cookies, Room) {
      var Message = {};
      var ref = firebase.database().ref().child('messages');
      var messages = $firebaseArray(ref);

      Message.all = messages;

      var user = $cookies.get('blocChatCurrentUser');
      //var roomIdentifier = snapshot.rooms();

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
        console.log(user);
        console.log(Room.all);

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
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
