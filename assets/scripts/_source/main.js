$(function(){
  "use strict";

  var $body = $('body'),
    $window = $(window),
    $document = $(document),
    scrollInterval = 10,
    windowHeight = 0,
    bodyHeight = 0,
    prevScrollTop = 0,
    scrollTop = 0,
    relativeScrollTop = 0,
    scrollBottom = 0;

  var init = function() {
    $body.addClass('js');
    initExternalLinks();
  };

  // external links
  // --------------

  var initExternalLinks = function() {
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
  };

  // initialize
  // ----------

  init();

});
