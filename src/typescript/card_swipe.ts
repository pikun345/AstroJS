// swipe.ts
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.scroll-container') as HTMLElement;
    const wrapper = document.querySelector('.cards-wrapper') as HTMLElement;
    
    if (!container || !wrapper) return;
    
    let startX: number, scrollLeft: number;
    
    const onMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      wrapper.scrollLeft = scrollLeft - walk;
    };
    
    const onMouseUp = () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseup', onMouseUp);
    };
    
    container.addEventListener('mousedown', (e: MouseEvent) => {
      startX = e.pageX - container.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseup', onMouseUp);
    });
    
    // Touch events for mobile
    container.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
    });
    
    container.addEventListener('touchmove', (e: TouchEvent) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      wrapper.scrollLeft = scrollLeft - walk;
    });
  });
  