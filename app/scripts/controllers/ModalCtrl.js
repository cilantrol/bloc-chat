(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      this.room = Room.all;

      this.defaultStatement = '';
      this.errorStatement = '';
      this.ok = function() {
        if(this.defaultStatement != ' ' && this.defaultStatement != ''){
          Room.add(this.defaultStatement);
        }else {
          this.errorStatement = "Spaces are not allowed and must 1 character long";errorValue.show();
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
