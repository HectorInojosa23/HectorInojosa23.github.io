const carousel = document.querySelector('.carousel');
  const images = carousel.querySelectorAll('img');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
  }

  // Mostrar la primera imagen al cargar la página
  showImage(currentImageIndex);

  // Cambiar de imagen cada 2 segundos
  setInterval(nextImage, 3000);

  // Eventos para los botones
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);


