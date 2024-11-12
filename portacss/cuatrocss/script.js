const menuButton = document.getElementById('apare');
const menuDropdown = document.getElementById('despliegue');


menuButton.addEventListener('click', () => {
  if (menuDropdown.style.display === 'none' || menuDropdown.style.display === '') {
    menuDropdown.style.display = 'block'; // Mostrar el menú
    
  } else {
    menuDropdown.style.display = 'none'; // Ocultar el menú
    
  }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menuDropdown.style.display === 'block') {
      menuDropdown.style.display = 'none'; 
    }
  });