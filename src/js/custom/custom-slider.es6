(function ($) {
  /** Custom slider **/

  $('.custom-slider').length &&

  $('.custom-slider').each(function () {

    const slider = $(this);
    const ticker = slider.find('.ticker');
    const item = slider.find('.item');
    const itemWidth = item.outerWidth();
    const itemLength = item.length;

    let step = 0;

    slider.find('.nav').on('click', function () {
      const width = $(window).width();
      let display = width < 769 ? 1 : width > 769 && width < 1151 ? 2 : 3;


      if ($(this).hasClass('left')) {
        if (step === 0) {
          ticker.animate({
            left: "-" + itemWidth * (itemLength - display)
          });
          step = itemLength - display;
        } else {
          ticker.animate({
            left: "+=" + itemWidth + ""
          });
          step--;
        }

      } else {
        step++;
        if (step === itemLength - (display - 1)) {
          ticker.animate({
            left: "0"
          });
          step = 0;
        } else {
          ticker.animate({
            left: "-=" + itemWidth + ""
          });
        }

      }

    });

  });

  /** Custom slider end **/
})(jQuery);