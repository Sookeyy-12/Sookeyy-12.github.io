/*window.onload = function(){ 
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h2").onmouseover = event => {
let iterations = 0;
const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
    if (index < iterations) {
        return event.target.dataset.value[index];
    }
    return letters[Math.floor(Math.random() * 26)]
    })
    .join("");
    if (iterations >= event.target.dataset.value.length) {
    clearInterval(interval);
    }
    iterations += 1 / 3;
}, 30);
}
};
*/

let flag = 0;
let variable = document.querySelector(':root');

const changeTheme = function() {
    let vs = getComputedStyle(variable);
    if (flag === 1) {
        variable.style.setProperty('--active-bg', vs.getPropertyValue('--dark-mode-bg'));
        variable.style.setProperty('--active-font', vs.getPropertyValue('--dark-mode-font'));
        variable.style.setProperty('--active-header', vs.getPropertyValue('--dark-mode-header'));
        variable.style.setProperty('--active-nav-pan', vs.getPropertyValue('--dark-mode-nav-pan'));
        variable.style.setProperty('--active-nav-bg', vs.getPropertyValue('--dark-mode-nav-bg'));
        variable.style.setProperty('--active-nav-border', vs.getPropertyValue('--dark-mode-nav-border'));
        variable.style.setProperty('--active-digi-pan', vs.getPropertyValue('--dark-mode-digi-pan'));
        variable.style.setProperty('--active-socs', vs.getPropertyValue('--dark-mode-socs'));
        flag = 0;
        logo.innerHTML ="<i class='fa-solid fa-sun' id='theme'></i>";
        console.log("Dark mode triggered");
    } else {
        logo.innerHTML = "<i class='fa-solid fa-moon' id='theme'></i>";
        variable.style.setProperty('--active-bg', vs.getPropertyValue('--light-mode-bg'));
        variable.style.setProperty('--active-font', vs.getPropertyValue('--light-mode-font'));
        variable.style.setProperty('--active-header', vs.getPropertyValue('--light-mode-header'));
        variable.style.setProperty('--active-nav-pan', vs.getPropertyValue('--light-mode-nav-pan'));
        variable.style.setProperty('--active-nav-bg', vs.getPropertyValue('--light-mode-nav-bg'));
        variable.style.setProperty('--active-nav-border', vs.getPropertyValue('--light-mode-nav-border'));
        variable.style.setProperty('--active-digi-pan', vs.getPropertyValue('--light-mode-digi-pan'));
        variable.style.setProperty('--active-socs', vs.getPropertyValue('--light-mode-socs'));
        flag = 1;
        console.log("Light mode triggered");
    }
}

let logo = document.getElementById('theme-logo');
logo.addEventListener('click', changeTheme);