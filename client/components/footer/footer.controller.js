'use strict';

(function(){
  class FooterComponent {
    constructor() {

    }
  FormButton(){
    this.el;
    this.error = Math.random() > 0.5;
    if(this.error){
      this.validaColor = "has-success";
      this.validaColorDiv = ["form-control-feedback","glyphicon","glyphicon-ok"];
      this.el = "<label class='control-label' for='inputSuccess2Status'>Registro Exitoso</label>";
    }
    else{
      this.validaColor = "has-error";
      this.validaColorDiv = ["form-control-feedback","glyphicon","glyphicon-remove"];
        this.el = "<label class='control-label' for='inputSuccess2Status'>Registro No Realizado</label>";
    }
      console.log("Hello");
    }
  }

  angular.module('bootstrapAppApp')
    .component('footerDiv', {
      templateUrl: 'components/footer/footer.html',
      controller: FooterComponent,
      controllerAs: 'vm'
    });
})();
