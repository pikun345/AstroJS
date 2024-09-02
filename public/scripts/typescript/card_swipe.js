"use strict";
// swipe.ts
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container');
    const wrapper = document.querySelector('.cards-wrapper');
    if (!container || !wrapper)
        return;
    let startX, scrollLeft;
    const onMouseMove = (e) => {
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        wrapper.scrollLeft = scrollLeft - walk;
    };
    const onMouseUp = () => {
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseup', onMouseUp);
    };
    container.addEventListener('mousedown', (e) => {
        startX = e.pageX - container.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseup', onMouseUp);
    });
    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });
    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        wrapper.scrollLeft = scrollLeft - walk;
    });
});
