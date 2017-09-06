(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      this.room = Room.all;

      this.defaultStatement = '';

      this.ok = function() {
        //if i wanted to use custom validation

        /*
        this is one way.$scope..addRoomForm.$setValidity("chars", false);

        this is another way with angular 2
        new FormControl(field.fieldValue || '', [Validators.required, this.NoWhitespaceValidator])
        public NoWhitespaceValidator(control: FormControl) {
        let isWhitespace = (control.value || '').trim().length === 0;
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
        }
        then in html
        <div *ngIf="yourForm.hasError('whitespace')">Please enter Valid Data</div>
        */
        //if(this.defaultStatement.length < 1){
        //  return;
        //}else {
          Room.add(this.defaultStatement);
        //}
      };

      this.cancel = function() {
        $uibModalInstance.close();
      };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
