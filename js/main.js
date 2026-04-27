$(document).ready(function () {
    /* tema */
    const themeToggle = $('#theme-toggle');
    if (themeToggle.length) {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

        document.documentElement.setAttribute('data-bs-theme', initialTheme);
        updateThemeIcon(initialTheme);

        themeToggle.on('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themeToggle.html('<i class="fa-solid fa-sun fs-5 text-warning"></i>');
            } else {
                themeToggle.html('<i class="fa-solid fa-moon fs-5 text-dark"></i>');
            }
        }
    }

    /* animacion */
    if ($('.hero-title').length) {
        $('.hero-title').fadeIn(900, function () {
            $('.hero-subtitle').slideDown(900, function () {
                $('.hero-actions').fadeIn(900);
            });
        });
    }

    /* contador */
    const counters = $('.counter-value');
    if (counters.length) {
        let hasCounted = false;

        function animateCounters() {
            const oTop = $('.counter-box').offset().top - window.innerHeight;
            if (hasCounted === false && $(window).scrollTop() > oTop) {
                counters.each(function () {
                    const $this = $(this);
                    const countTo = $this.attr('data-target');
                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum + '+');
                        }
                    });
                });
                hasCounted = true;
            }
        }

        $(window).on('scroll', animateCounters);
        animateCounters();
    }

    /* filtros */
    const filterBtns = $('.filter-btn');
    if (filterBtns.length) {
        filterBtns.on('click', function () {
            // actualizar clase activa del boton
            filterBtns.removeClass('active btn-primary text-white').addClass('btn-outline-primary');
            $(this).removeClass('btn-outline-primary').addClass('active btn-primary text-white');

            const filterValue = $(this).attr('data-filter');

            if (filterValue === 'todos') {
                $('.destino-item').show(400);
            } else {
                $('.destino-item').hide();
                $('.destino-item').filter('.' + filterValue).show(400);
            }
        });
    }

    /* zoom */
    $('.zoom-img-container').on('mouseenter', function () {
        $(this).addClass('zoom-active');
    }).on('mouseleave', function () {
        $(this).removeClass('zoom-active');
    });


    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });



    /* blog filtro */
    const filterBlog = $('.filter-blog');
    if (filterBlog.length) {
        filterBlog.on('click', function () {
            $('.filter-blog').removeClass('active btn-light text-primary').addClass('btn-outline-light');
            $(this).removeClass('btn-outline-light').addClass('active btn-light text-primary');

            const filter = $(this).data('filter');
            if (filter === 'todos') {
                $('.blog-post-item').fadeIn(400);
            } else {
                $('.blog-post-item').hide();
                $('.blog-post-item.' + filter).fadeIn(400);
            }
        });

        // animaciones al hacer scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
                else {
                    entry.target.classList.remove('in-view');
                }
            }
            );
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        $('.magazine-post').each(function () {
            observer.observe(this);
        });
    }
});
