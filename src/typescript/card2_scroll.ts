// Add this script to your projec

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.relative') as HTMLElement;
    let isDragging = false;
    let startX: number;
    let scrollLeft: number;

    scrollContainer.addEventListener('mousedown', (e: MouseEvent) => {
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

    scrollContainer.addEventListener('mousemove', (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();//avoid text selection while dragging 
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});

console.log("card2...")
