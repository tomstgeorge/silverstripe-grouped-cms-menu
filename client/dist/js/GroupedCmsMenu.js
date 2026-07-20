/**
 * Grouped CMS Menu — click-to-toggle.
 * Groups expand/collapse on click instead of hover.
 */
(function () {
    function init() {
        var list = document.querySelector('.cms-menu__list');
        if (!list) return;

        list.addEventListener('click', function (e) {
            // Find the closest group heading link
            var link = e.target.closest('li.children > a');
            if (!link) return;

            // Don't intercept clicks on child items inside the group
            var li = link.parentElement;
            if (!li.classList.contains('children')) return;

            e.preventDefault();
            e.stopPropagation();
            li.classList.toggle('opened');
        });
    }

    // SS CMS may load via pjax, so handle both initial load and re-renders
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-init after pjax navigations
    if (window.jQuery) {
        jQuery(document).on('pjax:end', init);
    }
})();
