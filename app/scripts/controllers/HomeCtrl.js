(function() {
    function HomeCtrl(Room, $uibModal) {
      this.room = Room.all;
      this.open = function() {
        $uibModal.open({
          animation: true,
          templateUrl: '/templates/modal.html',
          controller: 'ModalCtrl as modal',
          backdrop: 'static'
        });
      };

      this.chat = function() {
        $uibModal.open({
          animation: false,
          templateUrl: '/templates/chat.html',
          backdrop: 'static'
        });
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
