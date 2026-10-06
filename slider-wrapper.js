const track = document.getElementById('sliderTrack');
  const slides = track.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const wrapper = document.querySelector('.slider-wrapper');
  let current = 0;
 
  // --- Autoplay ---
  const AUTOPLAY_DELAY = 4000; // milisegundos entre cada cambio de imagen
  let autoplayTimer = null;
 
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(current + 1);
    }, AUTOPLAY_DELAY);
  }
 
  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }
 
  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);
  wrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
  wrapper.addEventListener('touchend', () => {
    setTimeout(startAutoplay, AUTOPLAY_DELAY);
  });
 
  // Crear los puntos dinámicamente
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Ir a la imagen ' + (i + 1));
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoplay();
    });
    dotsContainer.appendChild(dot);
  });
 
  const dots = dotsContainer.querySelectorAll('.dot');
 
  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    track.scrollTo({
      left: track.clientWidth * current,
      behavior: 'smooth'
    });
  }
 
  prevBtn.addEventListener('click', () => {
    goToSlide(current - 1);
    startAutoplay();
  });
 
  nextBtn.addEventListener('click', () => {
    goToSlide(current + 1);
    startAutoplay();
  });
 
  // Actualizar el punto activo al hacer swipe o scroll manual
  let scrollTimeout;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      current = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }, 100);
  });
 
  // Reajustar posición si cambia el tamaño de ventana
  window.addEventListener('resize', () => {
    track.scrollTo({ left: track.clientWidth * current });
  });
 
  // Iniciar autoplay al cargar la página
  startAutoplay();