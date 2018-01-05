$(function(){
  "use strict";

  var $body = $('body'),
    $window = $(window),
    $document = $(document),
    scrollInterval = 1,
    scrollTop = 0,
    $headerImage = $('.header__image'),
    headerImageHeight = 0;

  var init = function() {
    $body.addClass('js');
    initExternalLinks();
    initHeaderImage();
  };

  // external links
  // --------------

  var initExternalLinks = function() {
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
  };

  // header image
  // ------------

  var initHeaderImage = function() {
    if (!$headerImage.length) return;
    setInitialValues();
    bindWindowResize();

    if ($window.scrollIntervalId) {
      // clear previous scrollIntervalId
      $window.prevScrollIntervalId = $window.scrollIntervalId;
      clearInterval($window.prevScrollIntervalId);
    }
    $window.scrollIntervalId = setInterval(updatePage, scrollInterval);
  };

  var setInitialValues = function() {
    headerImageHeight = $headerImage[0].offsetHeight;
    updateValues();
  };

  var updatePage = function() {
    window.requestAnimationFrame(function() {
      updateValues();
      updateElements();
    });
  };

  var updateValues = function() {
    scrollTop = window.pageYOffset;
  };

  var updateElements = function() {
    $headerImage.css('background-position', '0 '+ scrollTop/2 + 'px');
  };

  var bindWindowResize = function() {
    $window.bind('resize',
      function() {
        setInitialValues();
      }
    );
  };

  // initialize
  // ----------

  init();

});
