(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {
      this.rooms = Room.all;
      this.messages = null;
      this.activeRoom = null;
      this.chatInput = {};

      /** @method .open
      **  @desc open add Room Modal
      **  @private
      */
      this.open = function() {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      /** @method .openUser
      **  @desc open Change User Module
      **  @private
      */
      this.openUser = function()  {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/user.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      /** @method .selectRoom
      **  @desc selects current chat room
      **  @private
      */
      this.selectRoom = function(room)  {
        console.log(room);
        this.activeRoom = room;
        this.activeRoom.name = room.roomName;
        this.messages = Message.getByRoomId(room.$id);
        //this.activeRoom = !this.activeRoom;
      };

      /** @method .showUser
      **  @desc shows current Cookie saved User
      **  @private
      */
      this.showUser = function()  {
        if (!$cookies.get('blocChatCurrentUser')) {
          return 'none set';
        }else {
          return  $cookies.get('blocChatCurrentUser');
        }
      };
      /** @method .addMessage
      **  @desc takes in properties of chatInput and $adds it to firebaseArray
      **  @type {object}
      **  @private
      */
      this.addMessage = function(content) {
        this.chatInput.user = $cookies.get('blocChatCurrentUser');
        this.chatInput.sentAt = firebase.database.ServerValue.TIMESTAMP;
        this.chatInput.roomId = this.activeRoom.$id;
        this.chatInput.content = content;

        Message.send(this.chatInput);
        this.clearMessage();
        console.log(this.activeRoom);
        console.log(this.chatInput);
        console.log(this.addContent);
      };

      /** @method .clearMessage
      **  @desc clear chatInput.content
      **  @private
      */
      this.clearMessage = function()  {
        this.chatInput.content = '';
        /*Try to Figure out why $setPristine does not work at a later date.
        this.addContent.$setPristine();*/
      };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
