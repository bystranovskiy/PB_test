(function ($) {

  /** Custom parallax **/

  $('.parallax-bg').length &&

  $('.parallax-bg').each(function () {

    const section = $(this);
    const parallax = $(this).find('.parallax');
    let translateY = 0;

    $(window).on("load resize scroll", function (e) {

      const docViewTop = $(window).scrollTop();
      const docViewBottom = docViewTop + $(window).height();
      const elemTop = parallax.offset().top;
      const elemBottom = elemTop + parallax.outerHeight();

      const isOnScreen = (elemTop <= docViewBottom) && (docViewTop <= elemBottom);

      const clearance = parallax.outerHeight() - section.outerHeight();
      const coefficient = (elemBottom - elemTop + $(window).height()) / clearance;

      isOnScreen ? translateY = Math.round((docViewBottom - elemTop) / coefficient) : translateY;

      parallax.css({
        'transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + translateY + ',0,1)',
        '-webkit-transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + translateY + ',0,1)'
      });

    });

  });

  /** Custom parallax end **/

})(jQuery);