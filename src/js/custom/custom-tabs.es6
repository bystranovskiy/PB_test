(function ($) {

  /** Custom tabs **/

  $('.custom-tabs .nav-item').on('click', function () {
    const item = $(this);
    if (!item.hasClass('active')) {
      const tabs = $(this).closest('.custom-tabs');
      tabs.find('.nav-item').removeClass('active');
      item.addClass('active');
      tabs.find('.tabs-content-item').hide();
      tabs.find('.tabs-content-item:eq(' + item.index() + ')').fadeIn('slow');
    }
  });

  /** Custom tabs end **/

})(jQuery);