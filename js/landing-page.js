// Mobile navigation toggle (phones only).
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('main-nav');
    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
        setOpen(!menu.classList.contains('is-open'));
    });

    // Close the menu after choosing a link on small screens.
    menu.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
    });
})();
