// Seleccionar todos los elementos que se animarán
const scrollElements = document.querySelectorAll('.scroll-up');

// Función para agregar la clase 'visible' si el elemento está visible
const elementInView = (el, percentageScroll = 100) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('visible');
};

const hideScrollElement = (element) => {
  element.classList.remove('visible');
};

// Función para manejar el scroll
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 75)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

// Escuchar el evento de scroll
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});





