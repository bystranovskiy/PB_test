(function ($) {
  /** Custom slider **/

  $('.custom-slider').each(function () {

    const slider      = $(this);
    const ticker      = slider.find('.ticker');
    const item        = ticker.find('.item');
    const itemWidth   = item.outerWidth();
    const itemLength  = item.length;

    let   step        = 0;

    slider.find('.nav').on('click', function () {

      /** Responsive items count **/
      const smallW    = $(window).width() < 769;
      const largeW    = $(window).width() > 1150;
      const display   = smallW ? 1 : largeW ? 3 : 2;

      /** Calculate left offset **/
      let offset;
      if ($(this).hasClass('left')) {
        if (step === 0) {
          offset = `-${itemWidth * (itemLength - display)}`;
          step = itemLength - display;
        } else {
          offset = `+=${itemWidth}`;
          step--;
        }
      } else {
        step++;
        if (step === itemLength - (display - 1)) {
          offset = step = 0;
        } else {
          offset = `-=${itemWidth}`;
        }
      }

      ticker.animate({left: offset});

    });

  });

  /** Custom slider end **/
})(jQuery);