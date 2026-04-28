# 🌎 Travel Services – Sitio Web de Turismo Argentina

Aplicación web desarrollada con Bootstrap 5 y jQuery, orientada a brindar una experiencia moderna, interactiva y responsive para explorar el turismo en Argentina.

**🔗 Demo Online:** [Visitar Sitio Web](https://mauriciozalazar29.github.io/Travel-Services-Sitio-Web-de-Turismo-Argentina-Responsivo/index.html)

---

## 📌 Descripción

Travel Services es un sitio web que permite a los usuarios:

- Explorar destinos turísticos.
- Conocer agencias asociadas.
- Comparar planes y precios.
- Leer contenido informativo (blog).
- Contactarse mediante formularios.
- Aprender sobre seguridad digital (módulo phishing).

El proyecto fue desarrollado como práctica académica aplicando HTML5, CSS3, Bootstrap y jQuery, cumpliendo con estrictos requisitos de diseño responsive, interactividad y buenas prácticas.

## 💻 Tecnologías Utilizadas

- **HTML5** → Estructura semántica.
- **CSS3** → Estilos, animaciones y efectos visuales.
- **Bootstrap 5.3.3** → Layout responsive y componentes UI.
- **jQuery 3.7.1** → Lógica e interactividad.
- **Font Awesome 6** → Iconografía.
- **Sprite CSS** → Optimización de carga de iconos.
 
## 📐 Diseño Responsive

El sitio está diseñado bajo enfoque responsive, adaptándose correctamente a:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop
- 🖥️ Pantallas grandes

Se utiliza el sistema de grillas de Bootstrap (`container`, `row`, `col-*`) junto con breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`).

## 🧩 Funcionalidades Principales

### 🏠 Home
- Navbar responsive con mega menú.
- Hero con imagen/video y animaciones jQuery.
- Cards de destinos con efectos hover.
- Contador dinámico activado por scroll.
- Carousel de testimonios.
- Footer con formulario, redes sociales y mapa embebido.

### 🌄 Destinos
- Filtros dinámicos con jQuery (`.filter()`, `.show()`, `.hide()`).
- Grid responsive (1, 2 o 3 columnas).
- Efecto zoom en imágenes (CSS + jQuery).
- Tabla de precios responsive.

### 🏢 Agencias
- Cards con efecto flip 3D.
- Sistema interactivo de rating con estrellas.

### 📞 Contacto
- Validación en tiempo real (`.on('input')`).
- Sanitización de datos.
- Spinner de carga.
- Modal de confirmación tras el envío.

### 💲 Precios
- Tabla comparativa de planes.
- Hover dinámico (resaltado de columnas).
- Tooltips informativos (Bootstrap).

### 📰 Blog
- Layout tipo revista.
- Filtros por categorías.
- Comentarios simulados.
- Animaciones al hacer scroll (`IntersectionObserver`).

### 🔐 Módulo Educativo: Phishing
- Simulación de interfaz bancaria.
- Advertencias de seguridad.
- Identificación de señales de fraude.
- Feedback interactivo con jQuery.

## 🎨 UI / UX
- Diseño limpio basado en colores: **Blanco** (claridad), **Azul** (identidad argentina), **Colores contrastantes** (acciones).
- Interfaz moderna y accesible.
- Feedback visual inmediato.
- Uso de iconografía intuitiva.

## ⚙️ Funcionalidades Técnicas
- Modo oscuro con persistencia (`localStorage`).
- Animaciones (hover, scroll, transiciones).
- Validación de formularios: HTML5 (`required`, `pattern`) y jQuery en tiempo real.
- Sanitización básica de inputs.
- Tooltips y modales de Bootstrap.

## ⚡ Optimizaciones
- Uso de CDN para librerías.
- Sprite CSS para reducir requests HTTP.
- Animaciones eficientes.
- Código modular y reutilizable.
    
## 📂 Estructura del Proyecto

```text
Travel-Services/
│── index.html
│── pages/
│   ├── destinos.html
│   ├── agencias.html
│   ├── precios.html
│   ├── blog.html
│   ├── contacto.html
│   └── banco.html
│── css/
│   ├── global.css
│   └── agencias.css
│── js/
│   └── main.js
└── assets/
    ├── icons/
    ├── images/
    └── videos/
```

## 📦 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/mauriciozalazar29/Travel-Services-Sitio-Web-de-Turismo-Argentina-Responsivo.git
   ```
2. **Abrir el proyecto:**
   Abre el archivo `index.html` en el navegador de tu preferencia.

> ✔️ **Nota:** No requiere backend ni instalación adicional de dependencias.

## 📌 Conclusión

El proyecto Travel Services cumple con todos los objetivos planteados en la práctica, integrando:

- Diseño responsive moderno.
- Interactividad con jQuery.
- Componentes Bootstrap.
- Buenas prácticas de desarrollo web.

*Destaca especialmente el módulo educativo de phishing, que aporta un valor adicional e innovador al sistema.*
