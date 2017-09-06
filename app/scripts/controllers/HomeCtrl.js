(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.messages = null;
      this.activeRoom = null;

      this.open = function() {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      this.selectRoom = function(room)  {
        console.log(room);
        this.activeRoom = room.roomName;
        this.messages = Message.getByRoomId(room.$id);
      };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
