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
            $('.filter-blog').removeClass('active btn-primary text-white').addClass('btn-outline-primary');
            $(this).removeClass('btn-outline-primary').addClass('active btn-primary text-white');

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
    const flipCards = $('.flip-card-inner');
    if (flipCards.length) {
        flipCards.on('click', function (e) {
            // Evitamos que la carta gire si el usuario hace clic específicamente en las estrellas
            if (!$(e.target).closest('.star-rating').length) {
                $(this).toggleClass('is-flipped');
            }
        });
    }

    /* Sistema de Rating con Estrellas */
    const starRating = $('.star-rating i');
    if (starRating.length) {
        starRating.on('click', function () {
            const $star = $(this);
            const selectedValue = $star.data('rating');
            const $container = $star.parent();

            // Actualizar atributo visual y de datos
            $container.attr('data-current-rating', selectedValue);

            // Cambiar clases para iluminar estrellas
            $container.find('i').each(function () {
                const currentStarValue = $(this).data('rating');
                if (currentStarValue <= selectedValue) {
                    $(this).removeClass('fa-regular text-muted').addClass('fa-solid text-warning');
                } else {
                    $(this).removeClass('fa-solid text-warning').addClass('fa-regular text-muted');
                }
            });

            // Feedback visual rápido (opcional)
            console.log(`Calificación para ${$container.closest('.flip-card-inner').find('h3').text()}: ${selectedValue} estrellas`);
        });
    }
});

$(document).ready(function () {
    // Función de Sanitización básica
    function sanitize(str) {
        return str.replace(/[<>]/g, '').trim();
    }

    // Validación en tiempo real con jQuery (.on('input'))
    $('.form-control').on('input', function () {
        const $input = $(this);
        const rawValue = $input.val();

        // Sanitización en tiempo real (evitar etiquetas)
        if (/[<>]/.test(rawValue)) {
            $input.val(sanitize(rawValue));
        }

        // Aplicar clases de Bootstrap basadas en validez
        if (this.checkValidity()) {
            $input.addClass('is-valid').removeClass('is-invalid');
        } else {
            $input.addClass('is-invalid').removeClass('is-valid');
        }
    });

    // Manejo del Envío
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const form = this;
        const $btn = $('#submitBtn');
        const $spinner = $('#submitSpinner');
        const $btnText = $btn.find('.btn-text');

        if (form.checkValidity()) {
            // Sanitización final antes de "enviar"
            const formData = {
                nombre: sanitize($('#nombre').val()),
                email: sanitize($('#email').val()),
                mensaje: sanitize($('#mensaje').val())
            };

            // Mostrar Spinner y deshabilitar botón
            $btn.prop('disabled', true);
            $spinner.removeClass('d-none');
            $btnText.text(' Enviando...');

            // Simular latencia de red (2 segundos)
            setTimeout(function () {
                // Ocultar Spinner
                $btn.prop('disabled', false);
                $spinner.addClass('d-none');
                $btnText.text('Enviar Mensaje');

                // Mostrar Modal de Bootstrap
                const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();

                form.reset();
                $('.form-control').removeClass('is-valid is-invalid');
            }, 2000);
        } else {
            $(form).addClass('was-validated');
        }
    });
});

$(document).ready(function () {
    // Detectar si hay texto para iluminar el botón "Continuar"
    $('#dni, #usuario').on('input', function () {
        let dni = $('#dni').val();
        let user = $('#usuario').val();

        if (dni.length > 0 && user.length > 0) {
            $('#btnSiguiente').css({ 'background-color': '#008fbe', 'color': 'white' });
        } else {
            $('#btnSiguiente').css({ 'background-color': '#e0e0e0', 'color': '#888' });
        }
    });

    // Tu lógica del modal y alerta se mantiene igual...
    $('#btnSiguiente').click(function () {
        alert("⚠️ ¡ALERTA DE SEGURIDAD!\n\nEn este momento, tu usuario acaba de ser enviado a un servidor controlado por atacantes.");
    });
});

$(document).ready(function() {
    
    // 1. Inicializar Tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 2. Hover Dinámico en Cards y Columnas de Tabla
    $('.pricing-card').on('mouseenter', function() {
        const planId = $(this).data('plan');
        
        // Opacar las otras cards
        $('.pricing-card').not(this).addClass('is-faded');
        $(this).css('transform', 'scale(1.05)');

        // Resaltar la columna correspondiente en la tabla
        $(`.col-plan-${planId}`).addClass('highlight-col');
    });

    $('.pricing-card').on('mouseleave', function() {
        // Restaurar todo
        $('.pricing-card').removeClass('is-faded').css('transform', 'scale(1)');
        $('td, th').removeClass('highlight-col');
    });

    // 3. Hover directo en las celdas de la tabla
    $('td').on('mouseenter', function() {
        // Obtener la clase de la columna (col-plan-X)
        const classList = $(this).attr('class').split(/\s+/);
        const planClass = classList.find(c => c.includes('col-plan-'));
        
        if(planClass) {
            $(`.${planClass}`).addClass('highlight-col');
            // Resaltar la card de arriba
            const planNum = planClass.split('-').pop();
            $(`.pricing-card[data-plan="${planNum}"]`).addClass('shadow-lg border-primary');
        }
    }).on('mouseleave', function() {
        $('td, th').removeClass('highlight-col');
        $('.pricing-card').removeClass('shadow-lg border-primary');
    });
});