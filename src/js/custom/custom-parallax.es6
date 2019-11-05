(function ($) {

  /** Custom parallax **/

  $('.parallax-bg').length &&

  $('.parallax-bg').each(function () {

    const section   = $(this);
    const parallax  = $(this).find('.parallax');
    let   offset    = 0;

    let elemTop, elemBottom, clearance, coefficient;

    $(window).on("load resize", () => {
      elemTop     = parallax.offset().top;
      elemBottom  = elemTop + parallax.outerHeight();
      clearance   = parallax.outerHeight() - section.outerHeight();
      coefficient = (elemBottom - elemTop + $(window).height()) / clearance;
    });


    $(window).on("scroll", () => {

      const docViewTop    = $(window).scrollTop();
      const docViewBottom = docViewTop + $(window).height();
      const isOnScreen    = (elemTop <= docViewBottom) && (docViewTop <= elemBottom);

      isOnScreen ? offset = Math.round((docViewBottom - elemTop) / coefficient) : offset;

      parallax.css({
        'transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + offset + ',0,1)',
        '-webkit-transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + offset + ',0,1)'
      });

    });

  });

  /** Custom parallax end **/

})(jQuery);