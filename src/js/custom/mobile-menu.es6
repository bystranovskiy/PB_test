(function ($) {

  /** Mobile menu toggle **/
  $(".mobile-menu-toggle").on("click", ({currentTarget}) => {

    const menuToggle = $(currentTarget);

    if (menuToggle.hasClass("return")) {
      menuToggle.removeClass("return");
      $(".mainmenu .submenu").removeClass("show");
    } else {
      menuToggle.toggleClass("active");
      $(".navbar .mainmenu").toggleClass("show");
    }
  });


  /** Mobile submenu toggle **/
  $(".mainmenu .has-submenu").on("click", (e) => {

    const menuToggle    = $(".mobile-menu-toggle");
    const submenuToggle = $(e.currentTarget);
    const width         = $(window).width();

    if (width < 768) {
      e.preventDefault();
      menuToggle.addClass("return");
      submenuToggle.next(".submenu").addClass("show");
    }
  });


})(jQuery);