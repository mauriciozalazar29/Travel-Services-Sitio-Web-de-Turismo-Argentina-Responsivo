# Documentación Técnica: Travel Services (Rediseño con Bootstrap & jQuery)

## 1. Arquitectura y Tecnologías
- **HTML5:** Estructuración semántica de todo el contenido.
- **CSS3:** Variables globales, flexbox y grillas nativas para componentes menores y personalizaciones sobre la base del framework. Implementación de sprites y efectos de zoom.
- **Bootstrap 5.3.3:** Framework principal de UI para la estructuración responsive, sistema de grillas (Rows & Cols) adaptativo, barras de navegación (Navbar), y componentes (Cards, Modals, Tooltips).
- **jQuery 3.7.1:** Biblioteca de manipulación del DOM, utilizada para la creación de interacciones dinámicas:
  - Validaciones de formulario en tiempo real (`.on('input')`).
  - Animaciones de scroll y fade-ins.
  - Sistema de filtros de destinos (`.hide()`, `.show()`, `.filter()`).
  - Sistema de calificación interactivo (Stars).
- **Font Awesome 6:** Iconografía principal, integrada vía CDN.

## 2. Componentes Clave

### 2.1. Home (`index.html`)
- **Hero & Navbar:** Navbar fijo superior utilizando `navbar-expand-lg` para responsividad móvil. Hero incluye un video en bucle con texto animado mediante jQuery.
- **Contador Estadístico:** Efecto de contador animado desarrollado con la función `.animate()` de jQuery activada por la posición de scroll.
- **Testimonios:** Migrado a un Carrusel nativo de Bootstrap (`carousel slide`) con controles intuitivos.
- **Phishing (Módulo Educativo):** Un botón en la barra de navegación invoca un Modal de Bootstrap. El modal presenta simulaciones de correos falsos con validaciones en tiempo real y *feedback* de aprendizaje a través de jQuery (`.data()`, `.on('click')`).

### 2.2. Destinos (`destinos.html`)
- **Sistema de Filtros:** Menú de botones que activan el filtrado jQuery (`.filter()`) sobre los elementos de la cuadrícula. Se remueve o agrega la clase de filtro para visualizar u ocultar (`.hide()`, `.fadeIn()`) el destino.
- **Grilla y Efectos:** Sistema de grillas de Bootstrap para adaptar los elementos a 1, 2 o 3 columnas dependiendo de la resolución de pantalla. Efecto zoom en la imagen implementado completamente por CSS3 en el estado `:hover`.

### 2.3. Agencias (`agencias.html`)
- **Flip Cards:** Tarjetas que rotan en un eje 3D. Controlado a nivel lógico por un "toggle" de clase con jQuery (`.toggleClass('is-flipped')`) cuando el usuario hace clic.
- **Sistema de Estrellas:** Componente interactivo. Funciones de `.on('mouseover')`, `.on('mouseout')` y `.on('click')` manejan dinámicamente los estilos visuales de las fuentes (solid o regular).

### 2.4. Precios (`precios.html`)
- **Tabla Responsiva:** Implementación de `<table class="table-responsive">` con efectos `.table-hover`.
- **Tooltips:** Integrados a través del componente `.tooltip` de Bootstrap e instanciados por JavaScript al cargar la página para explicar conceptos específicos de cada beneficio.

### 2.5. Blog (`blog.html`)
- **Intersección de Vista:** Implementación de `IntersectionObserver` de JS para añadir transiciones de entrada animadas conforme el usuario baja por la pantalla (scroll animado).
- **Filtros Dinámicos:** Sistema análogo al de destinos, usando jQuery para categorizar las entradas.

### 2.6. Contacto (`contacto.html`)
- **Validación jQuery:** Evaluación por expresiones regulares (Regex) de los campos *Nombre*, *Email* y *Mensaje* (`on('input')`). Cambia clases contextuales (`is-valid` o `is-invalid`).
- **Sanitización Básica:** Bloqueo y limpieza de inserción de etiquetas HTML antes de validar mediante método `replace(/<[^>]*>?/gm, '')`.
- **Spinner UI:** Retraso simulado (`setTimeout`) con desactivación de botones y visualización del componente `spinner-border` previo a la aparición del Modal de éxito.

## 3. Optimizaciones Adicionales
- **Sprites CSS:** Unificación de iconos gráficos (como logos de redes sociales) en una imagen única (`sprite.png`). El CSS determina el posicionamiento de fondo (`background-position`), logrando mejor rendimiento en la carga del sitio al reducir peticiones de red.
- **Seguridad Web:** Agregados métodos HTML5 (`required`, `minlength`, `pattern`) junto a la sanitización descrita.

## 4. Estándar de Responsividad
Todos los documentos cumplen con la correcta adaptación (mobile-first, adaptándose hasta pantallas ultra panorámicas) aprovechando los puntos de quiebre (breakpoints) estándar de Bootstrap (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`).
