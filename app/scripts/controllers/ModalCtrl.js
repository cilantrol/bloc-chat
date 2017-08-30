(function() {
    function ModalCtrl(Modal, Room, $uibModalInstance) {
      this.room = Room.all;

      this.defaultStatement = '';

      this.ok = function() {
        alert('room name is ' + this.defaultStatement + '!');
        $uibModalInstance.close(this.defaultStatement);
      };

      this.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Modal', 'Room', '$uibModalInstance', ModalCtrl]);
})();
