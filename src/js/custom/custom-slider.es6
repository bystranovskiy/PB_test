(function ($) {
  /** Custom slider **/

  $('.custom-slider').each(function () {

    const slider = $(this);
    const ticker = slider.find('.ticker');
    const item = slider.find('.item');
    const itemWidth = item.outerWidth();
    const itemLength = item.length;

    let step = 0;

    slider.find('.nav').on('click', function () {
      const width = $(window).width();

      /** Display blocks count **/
      let display = 3;
      if (width < 769) {
        display = 1;
      } else if (width > 769 && width < 1151) {
        display = 2;
      } else {
        display = 3;
      }

      /** Calculate left displacement **/
      let left;
      if ($(this).hasClass('left')) {
        if (step === 0) {
          left = `-${itemWidth * (itemLength - display)}`;
          step = itemLength - display;
        } else {
          left = `+=${itemWidth}`;
          step--;
        }
      } else {
        step++;
        if (step === itemLength - (display - 1)) {
          left = 0;
          step = 0;
        } else {
          left = `-=${itemWidth}`;
        }

      }

      ticker.animate({left: left});

    });

  });

  /** Custom slider end **/
})(jQuery);