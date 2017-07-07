jQuery(document).ready(function() {
    jQuery(".set > a").on("click", function () {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active");
            jQuery(this).siblings('.accordion-content').slideUp(200);
            jQuery(".set > a i").removeClass("icon-plus").addClass("icon-arrow-down2");
        } else {
            jQuery(".set > a i").removeClass("icon-plus").addClass("icon-arrow-down2");
            jQuery(this).find("i").removeClass("icon-arrow-down2").addClass("icon-plus");
            jQuery(".set > a").removeClass("active");
            jQuery(this).addClass("active");
            jQuery('.accordion-content').slideUp(200);
            jQuery(this).siblings('.accordion-content').slideDown(200);
        }
    });
});