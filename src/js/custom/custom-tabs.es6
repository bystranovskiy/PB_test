(function ($) {

  /** Custom tabs **/

  $('.custom-tabs .nav-item').on('click', function () {
    if (!$(this).hasClass('active')) {
      const tabs = $(this).closest('.custom-tabs');
      tabs.find('.nav-item').removeClass('active');
      $(this).addClass('active');
      tabs.find('.tabs-content-item').hide();
      tabs.find('.tabs-content-item:eq(' + $(this).index() + ')').fadeIn('slow');
    }
  });

  /** Custom tabs end **/

})(jQuery);