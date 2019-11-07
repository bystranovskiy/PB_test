(function ($) {
  /** Custom tabs **/
  $(".custom-tabs").on("click", ".nav-item", (e) => {

    const tabs            = $(e.delegateTarget);
    const currentNavItem  = $(e.currentTarget);

    if (!currentNavItem.hasClass("active")) {

      const navItems      = tabs.find(".nav-item");
      const contentItems  = tabs.find(".tabs-content-item");

      navItems.removeClass("active");
      currentNavItem.addClass("active");
      contentItems.hide();
      contentItems.eq(currentNavItem.index()).fadeIn("slow");
    }
  });

  /** Custom tabs end **/

})(jQuery);
