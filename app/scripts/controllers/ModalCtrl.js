(function() {
    function ModalCtrl(Room, $cookies, $uibModalInstance) {
      this.room = Room.all;
      this.defaultStatement = '';
      var currentUser = $cookies.get('blocChatCurrentUser');


      this.ok = function() {
          Room.add(this.defaultStatement);
      };

      this.cancel = function() {
        $uibModalInstance.close();
      };

      this.setUser= function(val)  {
        console.log("Current user is " + $cookies.blocChatCurrentUser);
        currentUser.put('blocChatCurrentUser', val);
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$cookies', '$uibModalInstance', ModalCtrl]);
})();
