(function() {
    function CookiesCtrl(BlocChatCookies, $uibModal) {
      this.cookies = BlocChatCookies;


    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['BlocChatCookies', '$uibModal', CookiesCtrl]);
})();
