document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const muroGrid = document.getElementById('muroGrid');

  // 1. FILTRADO EN TIEMPO REAL
  // Busca coincidencias en todo el texto de cada tarjeta (nombre, bio, tags)
  searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    const tarjetas = muroGrid.querySelectorAll('.card');

    tarjetas.forEach((tarjeta) => {
      const contenido = tarjeta.textContent.toLowerCase();
      tarjeta.style.display = contenido.includes(termino) ? 'flex' : 'none';
    });
  });

  // 2. CONTADOR DE LIKES (Delegación de eventos)
  // Escucha clics en toda la cuadrícula para que funcione en cualquier tarjeta nueva
  muroGrid.addEventListener('click', (e) => {
    const btnLike = e.target.closest('.btn-like');
    if (!btnLike) return;

    const countSpan = btnLike.querySelector('.like-count');
    let likesActuales = parseInt(btnLike.dataset.likes, 10) || 0;
    
    likesActuales++;
    btnLike.dataset.likes = likesActuales;
    countSpan.textContent = likesActuales;
  });
});
