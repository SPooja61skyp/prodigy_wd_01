window.addEventListener('scroll', function() {
  var navigationMenu = document.querySelector('.navigation-menu');
  if (window.scrollY > 50) {
    navigationMenu.classList.add('scrolled');
  } else {
    navigationMenu.classList.remove('scrolled');
  }
});