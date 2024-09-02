"use strict";
// Add this script to your project
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.relative');
    let isDragging = false;
    let startX;
    let scrollLeft;
    scrollContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });
    scrollContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    scrollContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });
    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDragging)
            return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});
