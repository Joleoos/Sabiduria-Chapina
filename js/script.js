const nav = document.querySelector('#nav-list');
const abrir = document.querySelector('#hamburger-abrir');
const cerrar = document.querySelector('#hamburger-cerrar');


abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})

