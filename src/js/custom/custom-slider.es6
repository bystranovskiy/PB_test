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
      const oneItem = 1;
      const twoItems = 2;
      const threeItems = 3;
      const smallScreen = 769;
      const largeScreen = 1150;
      const smallW    = $(window).width() < smallScreen;
      const largeW    = $(window).width() > largeScreen;
      const displayPlural = largeW ? threeItems : twoItems;
      const display   = smallW ? oneItem : displayPlural;

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