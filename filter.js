 // filtro de portafolio
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projects.forEach(p => {
        p.style.display = (filter === 'all' || p.dataset.cat === filter) ? 'flex' : 'none';
      });
    });
  });