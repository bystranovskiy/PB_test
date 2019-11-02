(function ($) {
  /** Custom slider **/

  $('.custom-slider').each(function () {
    const ticker = $(this).find('.ticker');

    const itemWidth = $(this).find('.item').outerWidth();
    const itemLength = $(this).find('.item').length;

    let step = 0;


    $(this).find('.nav').on('click', function () {
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