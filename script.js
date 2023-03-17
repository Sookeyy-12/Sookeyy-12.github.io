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

const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches; // true
console.log(`prefersDark = ${prefersDark}`);

flag = 0;

let currentTheme = document.getElementById("currentTheme");
let logo = document.getElementById('theme-logo');

const changeTheme = function(ctheme = false) {
    if (ctheme === false || flag === 1) {
        currentTheme.innerHTML = '<link rel="stylesheet" type="text/css" href="./themes/lightmode.css">';
        flag = 0;
        logo.innerHTML ="<i class='fa-solid fa-moon' id='theme'></i>";
        console.log("Light mode triggered");
    } else {
        currentTheme.innerHTML = '<link rel="stylesheet" type="text/css" href="./themes/darkmode.css">';
        flag = 1;
        logo.innerHTML = "<i class='fa-solid fa-sun' id='theme'></i>";
        console.log("Dark mode triggered");
    }
}

changeTheme(prefersDark);

logo.addEventListener('click', changeTheme);