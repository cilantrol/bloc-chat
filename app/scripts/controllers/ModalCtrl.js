(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      this.room = Room.all;

      this.defaultStatement = '';

      this.ok = function() {
        if(this.defaultStatement.length < 1){
          return;
        }else {
          Room.add(this.defaultStatement);
        }
      };

      this.cancel = function() {
        $uibModalInstance.close();
      };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
