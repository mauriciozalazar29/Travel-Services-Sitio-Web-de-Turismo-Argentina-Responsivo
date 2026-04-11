/* =========================================
   MAIN.JS — Lógica principal del sitio
   Maneja el cambio de tema claro/oscuro.
   Se aplica en todas las páginas del proyecto.
========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    /* Si el botón no existe en la página, no se ejecuta nada */
    if (!themeToggle) return;

    /* Lee la preferencia guardada en el almacenamiento local del navegador.
       Si no existe, consulta la preferencia del sistema operativo del usuario. */
    const storedTheme = localStorage.getItem('theme');
    const prefersDark  = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    /* Aplica el tema inicial al elemento <html> mediante el atributo data-theme */
    document.documentElement.setAttribute('data-theme', initialTheme);

    /* Al hacer clic en el botón, alterna entre "dark" y "light"
       y guarda la nueva preferencia en localStorage para persistirla. */
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme     = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
