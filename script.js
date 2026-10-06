// menú móvil
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

 // crosshair que sigue el cursor dentro de cada proyecto
  projects.forEach(p => {
    const cross = p.querySelector('.project-crosshair');
    p.addEventListener('mousemove', e => {
      const rect = p.getBoundingClientRect();
      cross.style.left = (e.clientX - rect.left - 17) + 'px';
      cross.style.top = (e.clientY - rect.top - 17) + 'px';
    });
  });

  
  