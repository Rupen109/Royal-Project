(function ($) {
    'use strict';
    function landingpage() {
        var $landing_page = $('body .smartic-landing-page-content');
        var $landing_click = $('body .smartic-landing-page-click');

        $(document).mouseup(function (e) {
            if ($landing_click.has(e.target).length == 0 && !$landing_page.is(e.target) && $landing_page.has(e.target).length == 0) {
                $landing_page.removeClass('active');
                $landing_click.removeClass('active');
            }
        });

        $landing_click.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $landing_page.toggleClass('active');
            $landing_click.toggleClass('active');
        });

    }
    $(document).ready(function () {
        landingpage();
    });
})(jQuery);