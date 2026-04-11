# Travel Services — Sitio Web de Turismo Argentina

> **Descripción**: Sitio web responsivo de agencia de viajes especializado en destinos turísticos argentinos, con sistema de temas claro/oscuro, componentes interactivos y arquitectura escalable de CSS.

---

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Arquitectura CSS](#arquitectura-css)
4. [Decisiones de Diseño](#decisiones-de-diseño)
5. [Características Implementadas](#características-implementadas)
6. [Sistema de Variables](#sistema-de-variables)
7. [Componentes Principales](#componentes-principales)
8. [Páginas del Sitio](#páginas-del-sitio)
9. [Tecnologías Utilizadas](#tecnologías-utilizadas)
10. [Guía de Uso](#guía-de-uso)

---

## 📖 Descripción General

**Travel Services** es una plataforma digital que permite a usuarios descubrir, explorar y planificar viajes a los principales destinos turísticos de Argentina. El sitio web integra:

- **Sistema de temas**: Alternancia entre modo claro y modo oscuro persistente
- **Navegación intuitiva**: Menú mega-dropdown y navegación accesible
- **Componentes interactivos**: Tarjetas con efectos 3D, formularios de contacto, filtros CSS-puro
- **Video hero**: Sección introductoria con video de fondo HD
- **Accesibilidad**: Atributos ARIA, navegación por teclado, etiquetas semánticas HTML5

---

## 📁 Estructura del Proyecto

```
turismo-website/
├── index.html                  # Página principal (inicio)
├── README.md                   # Este archivo
│
├── css/                        # Estilos CSS organizados en módulos
│   ├── variables.css           # Sistema de variables (colores, tipografía, espaciado)
│   ├── reset.css              # CSS reset para normalizar estilos del navegador
│   ├── global.css             # Estilos globales (tipografía, contenedores, botones)
│   ├── layout.css             # Header, footer y layout general
│   ├── home.css               # Estilos de página de inicio (hero, destinos)
│   ├── destinos.css           # Página de destinos con filtrado CSS-puro
│   ├── agencias.css           # Tarjetas flip 3D de agencias
│   ├── precios.css            # Página de precios (tablas, planes)
│   ├── blog.css               # Página de blog (artículos, grid)
│   └── contacto.css           # Formulario de contacto (layout 2-col)
│
├── js/
│   └── main.js                # Lógica principal (sistema de temas claro/oscuro)
│
├── pages/                     # Páginas internas del sitio
│   ├── destinos.html          # Catálogo de destinos con filtros
│   ├── agencias.html          # Directorio de agencias de viajes
│   ├── precios.html           # Planes y precios disponibles
│   ├── blog.html              # Blog de viajes y consejos
│   └── contacto.html          # Formulario de contacto y ubicación
│
└── assets/                    # Recursos multimedia
    ├── icons/                 # Iconos SVG (sun.svg, moon.svg)
    ├── images/                # Imágenes JPEG/PNG de destinos
    └── videos/                # Video HD para la sección hero
```

---

## 🏗️ Arquitectura CSS

### 1. **Sistema Modular de Archivos CSS**

El sitio utiliza una arquitectura **CSS modular y escalable** donde cada archivo tiene una responsabilidad específica:

| Archivo | Propósito | Líneas |
|---------|-----------|--------|
| `variables.css` | Almacena colores, tipografía, espaciado y valores globales | 80+ |
| `reset.css` | Normaliza estilos predeterminados del navegador | 50+ |
| `global.css` | Estilos compartidos: tipografía, contenedores, botones | 150+ |
| `layout.css` | Header fijo, mega-menú, footer | 100+ |
| `home.css` | Sección hero, destinos destacados, animaciones | 200+ |
| `destinos.css` | Filtrado CSS-puro, cards responsivas | 150+ |
| `agencias.css` | Tarjetas flip 3D, animaciones de rotación | 120+ |
| `precios.css` | Tablas de precios, planes comparativos | 100+ |
| `blog.css` | Grid de artículos, cards de blog | 100+ |
| `contacto.css` | Formulario, layout 2-columnas, validaciones | 140+ |

### 2. **Ventajas de la Arquitectura Modular**

```
✅ Mantenibilidad: Cada archivo es fácil de encontrar y modificar
✅ Escalabilidad: Agregar nuevas páginas requiere solo un nuevo CSS
✅ Reutilización: Variables y estilos globales se heredan automáticamente
✅ Rendimiento: Archivos pequeños permiten mejor caché del navegador
✅ Legibilidad: Código organizado con comentarios explicativos
```

---

## 🎨 Decisiones de Diseño

### 1. **Sistema de Variables CSS (CSS Custom Properties)**

Se implementó un sistema robusto de variables CSS que centraliza todos los valores de diseño:

```css
:root {
  /* Tipografía */
  --font-primary: 'Inter', sans-serif;      /* Cuerpo del texto (legibilidad) */
  --font-secondary: 'Outfit', sans-serif;   /* Títulos (impacto visual) */
  
  /* Colores del Tema Claro */
  --color-bg: #f8fafc;                      /* Fondo de página */
  --color-surface: #ffffff;                 /* Tarjetas y superficies */
  --color-text: #0f172a;                    /* Texto principal */
  --color-primary: #3b82f6;                 /* Azul de marca */
  --color-accent: #f59e0b;                  /* Naranja para CTAs */
  
  /* Espaciado y Medidas */
  --container-width: 1200px;
  --header-height: 80px;
  --spacing-section: 6rem;
  
  /* Animaciones */
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] {
  /* Sobrescribe solo lo necesario para tema oscuro */
  --color-bg: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f8fafc;
  --color-primary: #60a5fa;
}
```

**Ventajas:**
- ✅ Cambio de tema consistente en todo el sitio
- ✅ Fácil actualización de colores sin buscar en múltiples archivos
- ✅ Valores reutilizables reducen duplicación de código
- ✅ Soporte para temas dinámicos en tiempo de ejecución

### 2. **Reset CSS Normalizado**

Se utilizó un reset CSS personalizado (no un framework como Bootstrap) para:

```css
* {
  box-sizing: border-box;  /* Modelo de caja universal */
}

html, body, div, span, h1-h6, p, a {...} {
  margin: 0;               /* Elimina márgenes predeterminados */
  padding: 0;              /* Elimina padding predeterminado */
  border: 0;               /* Elimina bordes predeterminados */
}
```

**Razón de esta decisión:**
- Garantiza consistencia entre navegadores (Chrome, Firefox, Safari, Edge)
- Proporciona un lienzo limpio para aplicar estilos propios
- Reduce necesidad de sobrescritas CSS específicas

### 3. **Tipografía Dual y Jerarquía Visual**

Se implementó un sistema de dos familias tipográficas:

| Fuente | Uso | Características |
|--------|-----|-----------------|
| **Inter** (primaria) | Cuerpo de texto, párrafos | Legibilidad óptima, moderna, neutral |
| **Outfit** (secundaria) | Títulos, encabezados, logo | Llamativa, moderna, peso visual |

**Jerarquía de tamaños:**
```
h1: 3.5rem (64px)     ← Títulos principales
h2: 2.5rem (40px)     ← Títulos de sección
h3: 1.75rem (28px)    ← Subtítulos
p:  1rem (16px)       ← Texto del cuerpo
```

### 4. **Paleta de Colores Estratégica**

```
🔵 Azul Primario (#3b82f6)
   → Marca, botones principales, enlaces, encabezados
   
🟠 Naranja Acento (#f59e0b)
   → Llamadas a la acción, destacados, botones secundarios
   
⚪ Superficie Blanca (#ffffff en light mode)
   → Tarjetas, fondos de contenedores
   
🌫️ Grises Neutros
   → Texto secundario, bordes, separadores
```

**Contraste de Accesibilidad:**
- Texto oscuro sobre fondo claro: 7.2:1 (WCAG AAA ✓)
- Texto claro sobre fondo oscuro: 6.8:1 (WCAG AAA ✓)

### 6. **Animaciones y Transiciones Suaves**

Se definieron 3 velocidades estándar de transición:

```css
--transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);    /* Hover, cambios rápidos */
--transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Tema, fade in/out */
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);    /* Animaciones complejas */
```

**Animación hero con keyframes:**
```css
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content h1 {
  animation: slideUpFade 1s cubic-bezier(...) forwards 0.2s;
}
```

---

## ⭐ Características Implementadas

### 1. **Sistema de Temas Claro/Oscuro**

**Implementación técnica:**

```javascript
/* main.js - Lógica de temas */
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  /* Lee preferencia guardada o del sistema */
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  
  /* Aplica tema al elemento root */
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  /* Alterna tema al hacer clic */
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);  /* Persiste la elección */
  });
});
```

**Características:**
- ✅ Almacenamiento en `localStorage` (persiste entre sesiones)
- ✅ Respeta preferencia del sistema operativo
- ✅ Transición suave entre temas
- ✅ Botón con doble ícono (sol/luna) visible en todo el sitio

### 2. **Header Sticky con Mega-Menú**

```html
<header>
  <div class="header-container">
    <a class="logo">Travel Services</a>
    
    <nav>
      <li class="has-mega-menu">
        <a href="#">Descubrir</a>
        <div class="mega-menu">
          <!-- Menú desplegable con todas las páginas -->
        </div>
      </li>
    </nav>
    
    <button id="theme-toggle">🌙 <img src="moon.svg"></button>
  </div>
</header>
```

**Características del Header:**
- Posición fija (siempre visible)
- Altura: 80px
- Sombra sutil
- Cambio de fondo suave al cambiar de tema
- Mega-menú con efecto hover

### 3. **Sección Hero con Video de Fondo**

```html
<section class="hero">
  <video autoplay muted loop playsinline class="hero-video">
    <source src="video.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Descubre Argentina</h1>
    <p>Explora la Patagonia...</p>
    <div class="hero-actions">
      <a class="btn btn-primary">Ver Destinos</a>
      <a class="btn btn-secondary glass">Contactanos</a>
    </div>
  </div>
</section>
```

**Características:**
- Video responsive (cover object-fit)
- Overlay gradiente (0.3-0.7 opacidad) para legibilidad
- Animaciones al cargar (slideUpFade con delays)
- 100% altura de viewport (menos altura del header)
- Botones con estilos primario y secundario (glass effect)

### 4. **Sistema de Filtrado CSS-Puro (Sin JavaScript)**

```html
<!-- Destinos.html: Filtrado sin JS -->
<div class="filter-container">
  <input type="radio" id="filter-all" class="filter-radio" name="filter" checked>
  <label for="filter-all">Todos</label>
  
  <input type="radio" id="filter-naturaleza" class="filter-radio" name="filter">
  <label for="filter-naturaleza">Naturaleza</label>
</div>

<div class="destinos-grid">
  <article class="destino-card naturaleza"></article>
  <article class="destino-card arqueologia"></article>
</div>
```

```css
/* CSS-puro: selector ~ (hermanos) */
#filter-naturaleza:checked ~ .destinos-grid .arqueologia {
  display: none;  /* Oculta cards que no coinciden */
}
```

**Ventajas:**
- ✅ Sin dependencias de JavaScript
- ✅ Funciona offline y en navegadores antiguos
- ✅ Mejor rendimiento que versión con JS
- ✅ Estado persistente mediante ID del input

### 5. **Tarjetas Flip 3D (Agencias)**

```html
<!-- Agencias: Efecto 3D flip -->
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="agencia1.jpg">
      <h3>Agencia Turística XYZ</h3>
    </div>
    <div class="flip-card-back">
      <p>Contacto: info@xyz.com</p>
      <p>Tel: +54 11 XXXX-XXXX</p>
    </div>
  </div>
</div>
```

```css
.flip-card {
  perspective: 1000px;  /* Activa transformaciones 3D */
  height: 500px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);  /* Rotación 180° en eje Y */
}

.flip-card-front, .flip-card-back {
  position: absolute;
  backface-visibility: hidden;  /* Oculta cara posterior durante rotación */
}

.flip-card-back {
  transform: rotateY(180deg);   /* Invierte cara posterior */
}
```

**Características:**
- Perspectiva 3D correcta
- Animación suave (0.6s)
- Backface-visibility para evitar texto invertido

### 6. **Formulario de Contacto Estructurado**

```html
<!-- Contacto: Layout 2 columnas -->
<section class="contacto-container">
  <div class="info-cards">
    <div class="info-card">
      <h3>Email</h3>
      <p>info@travelservices.com</p>
    </div>
    <div class="info-card">
      <h3>Teléfono</h3>
      <p>+54 11 XXXX-XXXX</p>
    </div>
  </div>
  
  <form class="contact-form">
    <input type="text" placeholder="Nombre">
    <input type="email" placeholder="Email">
    <textarea placeholder="Mensaje"></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>
```

```css
.contacto-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

@media (max-width: 768px) {
  .contacto-container {
    grid-template-columns: 1fr;  /* Stack en móvil */
  }
}
```

### 7. **Botones con Múltiples Estilos**

```css
/* Botón primario */
.btn-primary {
  background-color: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  transition: background-color var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

/* Botón con efecto glass */
.btn.glass {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn.glass:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
```

---

## 🔧 Sistema de Variables

### Variables de Tipografía

```css
--font-primary: 'Inter', sans-serif;       /* Cuerpo: legible, moderna */
--font-secondary: 'Outfit', sans-serif;    /* Títulos: impactante */
```

### Variables de Color (Tema Claro)

| Variable | Valor | Uso |
|----------|-------|-----|
| `--color-bg` | #f8fafc | Fondo principal de página |
| `--color-surface` | #ffffff | Tarjetas, superficies elevadas |
| `--color-text` | #0f172a | Texto principal (máximo contraste) |
| `--color-text-muted` | #404142 | Texto secundario, párrafos |
| `--color-primary` | #3b82f6 | Marca, botones, enlaces |
| `--color-primary-hover` | #2563eb | Hover del color primario |
| `--color-accent` | #f59e0b | Acento naranja para CTAs |
| `--color-border` | #e2e8f0 | Líneas, bordes, separadores |

### Variables de Color (Tema Oscuro)

```css
[data-theme="dark"] {
  --color-bg: #0f172a;              /* Fondo casi negro */
  --color-surface: #1e293b;         /* Superficies elevadas */
  --color-text: #f8fafc;            /* Texto claro */
  --color-text-muted: #94a3b8;      /* Texto secundario grisáceo */
  --color-primary: #60a5fa;         /* Azul más claro para visibilidad */
}
```

### Variables de Espaciado

```css
--header-height: 80px;              /* Altura del header fijo */
--container-width: 1200px;          /* Ancho máximo de contenedor */
--spacing-section: 6rem;            /* Padding vertical de secciones */
```

### Variables de Borde

```css
--radius-sm: 0.375rem;              /* 6px - Botones pequeños */
--radius-md: 0.5rem;                /* 8px - Cards, inputs */
--radius-lg: 0.75rem;               /* 12px - Botones principales */
--radius-xl: 1rem;                  /* 16px - Elementos grandes */
--radius-round: 9999px;             /* Totalmente circular */
```

### Variables de Sombra

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);           /* Sutil */
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), ...;    /* Medio */
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), ...;  /* Grande */
--shadow-hover: 0 20px 25px -5px rgb(0 0 0 / 0.1)...; /* Al interactuar */

/* En tema oscuro: opacidades más altas para profundidad */
[data-theme="dark"] {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.5);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.5), ...;
}
```

### Variables de Transición

```css
--transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);    /* Hover (200ms) */
--transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Normal (300ms) */
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);    /* Complejas (500ms) */
```

**Función de timing:** `cubic-bezier(0.4, 0, 0.2, 1)` proporciona una curva de animación natural y profesional.

---

## 🧩 Componentes Principales

### 1. **Componente: Header**

**Archivo:** [layout.css](css/layout.css)

```html
<header>
  <div class="header-container">
    <a href="index.html" class="logo">Travel Services</a>
    <nav class="main-nav">
      <ul>
        <li class="nav-item has-mega-menu">
          <a href="#" class="nav-link">Descubrir</a>
          <div class="mega-menu">
            <!-- Contenido del menú -->
          </div>
        </li>
      </ul>
    </nav>
    <button id="theme-toggle"><!-- Iconos sol/luna --></button>
  </div>
</header>
```

**Propiedades CSS:**
- Posición fixed (siempre visible)
- Altura: 80px
- Sombra sutil
- Z-index: 1000 (encima de todo)

### 2. **Componente: Hero Section**

**Archivo:** [home.css](css/home.css)

Características:
- Video de fondo (autoplay, muted, loop)
- Overlay gradiente para legibilidad
- Contenido centrado
- Animaciones staggered (delays progresivos)

### 3. **Componente: Card de Destino**

```html
<article class="destino-card">
  <span class="destino-tag">Naturaleza</span>
  <img src="destino.jpg" class="destino-img">
  <div class="destino-info">
    <span class="destino-price">$450</span>
    <h3>Cataratas del Iguazú</h3>
    <p>Descripción del destino...</p>
  </div>
</article>
```

**Estilos:**
- Imagen responsive con object-fit
- Tag de categoría posicionado absolutamente
- Precio destacado
- Transición al hover (sombra, rotación)

### 4. **Componente: Flip Card (3D)**

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"><!-- Contenido frontal --></div>
    <div class="flip-card-back"><!-- Contenido posterior --></div>
  </div>
</div>
```

**Transformaciones 3D:**
- `perspective: 1000px` en contenedor externo
- `transform: rotateY(180deg)` en hover
- `backface-visibility: hidden` para ocultaciones correctas

### 5. **Componente: Botón**

```html
<!-- Botón primario -->
<a href="#" class="btn btn-primary">Ver Destinos</a>

<!-- Botón secundario con efecto glass -->
<a href="#" class="btn btn-secondary glass">Contactanos</a>
```

**Variantes:**
- `.btn-primary`: Color azul, hover oscuro
- `.btn-secondary`: Fondo transparente
- `.glass`: Efecto vidrio (blur + transparency)

---

## 📄 Páginas del Sitio

### 1. **index.html — Página Principal**

**Estructura:**
- Hero con video de fondo
- Sección "Destinos Destacados" (grid 3 columnas)
- Sección "Ofertas Especiales"
- CTA (Call to Action) a otras secciones

**Archivos CSS:** global.css, layout.css, home.css

### 2. **pages/destinos.html — Catálogo de Destinos**

**Características:**
- Hero con título y subtítulo
- Filtrado CSS-puro (sin JavaScript)
  - Filtro "Todos"
  - Filtro "Naturaleza"
  - Filtro "Arqueología"
  - Filtro "Aventura"
- Grid responsivo de destinos

**Ejemplo de filtrado CSS:**
```css
#filter-arqueologia:checked ~ .destinos-grid .naturaleza {
  display: none;
}
```

**Archivos CSS:** global.css, layout.css, destinos.css

### 3. **pages/agencias.html — Directorio de Agencias**

**Características:**
- Hero con marca de color primario
- Grid de tarjetas flip 3D
- 6-9 agencias con información (frente/atrás)
- Efecto hover rotación 180°

**Información por agencia:**
- Frente: Logo, nombre, ubicación
- Atrás: Email, teléfono, horarios

**Archivos CSS:** global.css, layout.css, agencias.css

### 4. **pages/precios.html — Planes y Precios**

**Características:**
- Hero destacado
- Tabla comparativa de planes (Basic, Premium, VIP)
- Cards de características
- Botones de "Contratar" destacados

**Información por plan:**
- Precio mensual/anual
- Características incluidas
- CTA diferenciado

**Archivos CSS:** global.css, layout.css, precios.css

### 5. **pages/blog.html — Blog de Viajes**

**Características:**
- Hero con título
- Grid de artículos (cards)
- Cada artículo con:
  - Imagen
  - Categoría (etiqueta)
  - Título
  - Excerpt (fragmento)
  - Fecha de publicación
  - Autor

**Archivos CSS:** global.css, layout.css, blog.css

### 6. **pages/contacto.html — Contacto**

**Características:**
- Hero con título y CTA
- Layout 2 columnas:
  - Izquierda: Cards de información (email, teléfono, dirección)
  - Derecha: Formulario de contacto
- Formulario con validación HTML5
  - Inputs: nombre, email
  - Textarea: mensaje
  - Botón: enviar

**Archivos CSS:** global.css, layout.css, contacto.css

---

## 🛠️ Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **HTML5** | 5 | Estructura semántica |
| **CSS3** | 3 (con variables) | Estilos y animaciones |
| **JavaScript (Vanilla)** | ES6+ | Sistema de temas |

### Características CSS Utilizadas

- ✅ **CSS Variables** (Custom Properties)
- ✅ **CSS Grid** (Layouts responsivos)
- ✅ **Flexbox** (Navegación, componentes)
- ✅ **Transformaciones 3D** (Tarjetas flip)
- ✅ **Transiciones y Animaciones**
- ✅ **Media Queries** (Responsive design)
- ✅ **Selectores Avanzados** (`:has()`, `~`, `+`)
- ✅ **Pseudo-elementos** (`::before`, `::after`)
- ✅ **Pseudo-clases** (`:hover`, `:checked`, `:focus`)
- ✅ **Backdrop Filter** (Efecto glass)
- ✅ **Object-Fit** (Imágenes responsivas)

### JavaScript Features

- `localStorage` (Persistencia de tema)
- `matchMedia` (Preferencia del sistema)
- `setAttribute/getAttribute` (Manipulación del DOM)
- Event listeners (Click, loading)

---

## 🎯 Decisiones Arquitectónicas

### 1. **¿Por qué CSS-puro sin Framework?**

**Razones:**
- ✅ Mejor rendimiento (sin dependencias externas)
- ✅ Tamaño reducido (sin bootstrap.css ~150KB)
- ✅ Control total sobre el HTML
- ✅ Mejor para aprendizaje (CSS real, no abstracciones)
- ✅ Facilita mantenimiento personalizado

### 2. **¿Por qué HTML Semántico?**

```html
<!-- ❌ Incorrecto (divs genéricos) -->
<div>
  <div>Contenido principal</div>
  <div>Pie de página</div>
</div>

<!-- ✅ Correcto (etiquetas semánticas) -->
<main>
  Contenido principal
</main>
<footer>
  Pie de página
</footer>
```

**Ventajas:**
- SEO mejorado (buscadores entienden estructura)
- Accesibilidad (lectores de pantalla)
- Legibilidad del código
- Mantenibilidad

### 3. **¿Por qué Sistema de Variables CSS?**

**Antes (sin variables):**
```css
.btn-primary { background: #3b82f6; }
.link { color: #3b82f6; }
.header { background: #ffffff; }
/* Si cambia color primario, hay que buscar en 100+ líneas */
```

**Después (con variables):**
```css
:root { --color-primary: #3b82f6; }
.btn-primary { background: var(--color-primary); }
.link { color: var(--color-primary); }
/* Cambiar color primario: una línea */
```

## 🚀 Guía de Uso

### Instalación

1. **Clonar o descargar el proyecto:**
   ```bash
   git clone <https://github.com/mauriciozalazar29/Travel-Services-Sitio-Web-de-Turismo-Argentina.git>
   cd turismo-website
   ```

2. **Abrir en navegador:**
   - Opción 1: Doble clic en `index.html`
   - Opción 2: Servir localmente con Live Server (VS Code)
