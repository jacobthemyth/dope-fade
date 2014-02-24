(function($) {
  $.fn.dopeFade = function (options) {
    if(typeof options === undefined) options = {};

    var $el = this.first();
    var theUrl = options.url || null;
    var theImg = new Image();
    theImg.src = theUrl;

    var dopeIt = function(){
      $el.css('background-image', 'url(' + theUrl + ')');
      $el.addClass("dope-fade-load");
    };

    $el.addClass('dope-fade');

    if(theImg.complete || theImg.readyState === 'complete') {
      dopeIt()
    } else {
      $(theImg).on("load.dope-fade", function() {
        dopeIt();
        $(theImg).off(".dope-fade");
      });
    }
  };
}(jQuery));
