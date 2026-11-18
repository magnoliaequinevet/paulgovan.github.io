// Mobile navigation toggle (replaces jQuery + Bootstrap JS).
(function () {
    var toggle = document.querySelector('.navbar-toggle');
    var menu = document.getElementById('main-nav');
    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('in', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
        setOpen(!menu.classList.contains('in'));
    });

    // Close the menu after choosing a link on small screens.
    menu.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
    });
})();
