require("../sass/style.scss");

(function ($) {

  /** Mobile menu toggle **/

  $('.mobile-menu-toggle').on('click', function () {
    if ($(this).hasClass('return')) {
      $(this).removeClass('return');
      $('.mainmenu .submenu').removeClass('show');
    } else {
      $(this).toggleClass('active');
      $('.navbar .mainmenu').toggleClass('show');
    }
  });

  $('.mainmenu .has-submenu').on('click', function (e) {
    if ($(window).width() < 768) {
      e.preventDefault();
      $('.mobile-menu-toggle').addClass('return');
      $(this).next('.submenu').addClass('show');
    }
  });

  /** Mobile menu toggle end **/


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