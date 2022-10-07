const body = document.querySelector('body');
const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})
