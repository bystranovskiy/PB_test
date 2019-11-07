(function ($) {

  $(".custom-slider").each(function () {
    const slider      = $(this);
    const ticker      = slider.find(".ticker");
    const item        = ticker.find(".item");
    const itemWidth   = item.outerWidth();
    const itemLength  = item.length;
    let   step        = 0;

    slider.find(".nav").on("click", ({currentTarget}) => {

      const nav = $(currentTarget);

      /** Responsive items count **/
      const oneItem       = 1;
      const twoItems      = 2;
      const threeItems    = 3;
      const smallScreen   = 769;
      const largeScreen   = 1150;
      const width         = $(window).width();
      const smallW        = width < smallScreen;
      const largeW        = width > largeScreen;
      const displayPlural = largeW ? threeItems : twoItems;
      const display       = smallW ? oneItem : displayPlural;

      /** Calculate left offset **/
      let offset;
      if (nav.hasClass("left")) {
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

})(jQuery);