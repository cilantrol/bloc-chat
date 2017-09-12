(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {
      this.rooms = Room.all;
      this.messages = null;
      this.activeRoom = null;
      this.chatInput = {};

      this.open = function() {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      this.openUser = function()  {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/user.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      this.selectRoom = function(room)  {
        console.log(room);
        this.activeRoom = room;
        this.activeRoom.name = room.roomName;
        this.messages = Message.getByRoomId(room.$id);
      };

      this.showUser = function()  {
        if (!$cookies.get('blocChatCurrentUser')) {
          return 'none set';
        }else {
          return  $cookies.get('blocChatCurrentUser');
        }
      };

      this.addMessage = function(content) {
        this.chatInput.user = $cookies.get('blocChatCurrentUser');
        this.chatInput.sentAt = firebase.database.ServerValue.TIMESTAMP;
        this.chatInput.roomId = this.activeRoom.$id;
        this.chatInput.content = content;
        Message.send(this.chatInput);
        console.log(this.chatInput.sentAt);
        console.log(this.chatInput.user);
        console.log(this.activeRoom);
        console.log(this.chatInput);
      };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
