console.log("trail.js loaded");
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-shadow");
    document.addEventListener("mousemove", (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        setTimeout(() => {
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
        }, 50);
    });
    document.addEventListener("mouseleave", () => {
        cursor.style.display = 'none';
    });
    document.addEventListener("mouseenter", () => {
        cursor.style.display = 'inline';
    });
});