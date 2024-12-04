document.querySelectorAll('.additional-images img').forEach(image => {
    image.addEventListener('click', function () {
      const mainImage = document.querySelector('.main-image');
      mainImage.src = this.src;
    });
  });
  