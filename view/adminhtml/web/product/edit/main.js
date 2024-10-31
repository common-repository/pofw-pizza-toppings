( function ($) {
  "use strict";

$.widget("pektsekye.pizzaToppings", {

  _create: function(){   		    

    $.extend(this, this.options); 

    this._on({
      "change select, input": $.proxy(this.setChanged, this),
    });
     
  },
  

  setChanged : function(){
    $('#pt_changed').val(1);     
  }   

});

})(jQuery);