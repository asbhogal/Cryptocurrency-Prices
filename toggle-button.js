const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn-icon-container');
const modeIcon = document.querySelector('.mode-icon');

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        document.querySelector('.mode-icon').innerHTML = "dark_mode";
    } else {
        document.querySelector('.mode-icon').innerHTML = "light_mode";
    }
})
