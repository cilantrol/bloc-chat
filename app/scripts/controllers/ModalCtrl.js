(function() {
    function ModalCtrl(Room, $cookies, $uibModalInstance) {
      this.room = Room.all;
      this.defaultStatement = '';
      var currentUser = $cookies.get('blocChatCurrentUser');

      /** @method .ok
      **  @desc Filter messages by roomId {object} property
      **  @type {array}
      **  @private
      */
      this.ok = function() {
          Room.add(this.defaultStatement);
      };

      /** @method .cancel
      **  @desc close add Room module
      **  @private
      */
      this.cancel = function() {
        $uibModalInstance.close();
      };

      /** @method .setUser
      **  @desc Filter messages by roomId {object} property
      **  @type {array}
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
