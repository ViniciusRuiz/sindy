
 (function($){
    $(document).ready(function() {
        $( window ).scroll(function() {
            if ( $('#cards').visible('partial') == true ) {
              $('#dropnobre').addClass("dropon");
            } else {
                 $('#dropnobre').removeClass("dropon");
            }
              });
    })
 })(jQuery);