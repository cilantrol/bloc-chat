(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        animation: true,
        templateUrl: '/templates/user.html',
        controller: 'CookiesCtrl as cookie',
        backdrop: 'static'
      });
        //this.add = function(user) {
        //  currentUser.$add({userName: user});
        //};
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
