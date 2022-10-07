const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn-icon-container');
const modeIcon = document.querySelector('.mode-icon');

document.addEventListener("load", function() {
    document.querySelector('.mode-icon').innerHTML = "light_mode";
    document.querySelector('.mode-icon').style.color = "#fac213";
});

document.addEventListener('load', () => {
    document.querySelector('.mode-icon').innerHTML = "light_mode";
    document.querySelector('.mode-icon').style.color = "#fac213";
});

document.onload = loadLightMode;

function loadLightMode() {
    document.querySelector('.mode-icon').innerHTML = "light_mode";
}

btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeIcon.classList.add('icon-transitions');
    modeIcon.classList.add('spin-animations')

    if(body.classList.contains('dark-mode')) {
        document.querySelector('.mode-icon').innerHTML = "dark_mode";
        document.querySelector('.mode-icon').style.color = "#000";
    } else {
        document.querySelector('.mode-icon').innerHTML = "light_mode";
        document.querySelector('.mode-icon').style.color = "#fac213";
    }
});