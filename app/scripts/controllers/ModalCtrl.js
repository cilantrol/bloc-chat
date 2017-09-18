(function() {
    function ModalCtrl(Room, $cookies, $uibModalInstance) {
      this.room = Room.all;
      this.roomInput = {};
      var currentUser = $cookies.get('blocChatCurrentUser');

      /** @method .addRoom
      **  @desc Filter messages by roomId {object} property
      **  @type {array}
      **  @private
      */
      this.addRoom = function(content) {
          this.roomInput.roomName = content;
          Room.add(this.roomInput);
      };

      /** @method .cancel
      **  @desc close add Room module
      **  @private
      */
      this.cancel = function() {
        $uibModalInstance.close();
      };

      /** @method .setUser
      **  @desc set $cookie blocChatCurrentUser
      **  @private
      */
      this.setUser = function(val)  {
        $cookies.put('blocChatCurrentUser', val);
        $uibModalInstance.dismiss();
      };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$cookies', '$uibModalInstance', ModalCtrl]);
})();
