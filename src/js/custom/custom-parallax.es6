(function ($) {
  /** Custom parallax **/
  $('.parallax-bg').length && $('.parallax-bg').each(function () {
    const section   = $(this);
    const parallax  = section.find('.parallax');
    const windowHeight = $(window).height();
    let   offset    = 0;
    let elemTop, elemBottom, coefficient;

    $(window).on("load resize", () => {
      elemTop     = parallax.offset().top;
      elemBottom  = elemTop + parallax.outerHeight();
      const clearance   = parallax.outerHeight() - section.outerHeight();
      coefficient = (elemBottom - elemTop + windowHeight) / clearance;
    });

    $(window).on('scroll', () => {
      const docViewTop    = $(window).scrollTop();
      const docViewBottom = docViewTop + windowHeight;
      const isOnScreen    = (elemTop <= docViewBottom) && (docViewTop <= elemBottom);

      isOnScreen ? offset = Math.round((docViewBottom - elemTop) / coefficient) : offset

      parallax.css({
        "transform": `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${offset},0,1)`,
        "-webkit-transform": `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-${offset},0,1)`
      });
    });
  });

  /** Custom parallax end **/

})(jQuery)