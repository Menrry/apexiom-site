document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  
// Selecciona todos los enlaces dentro de la lista de navegación
  const navLinks = document.querySelectorAll('.nav-menu a'); 

  navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // 1. Quita la clase 'active' de todos los enlaces del menú
    navLinks.forEach(item => item.classList.remove('active'));
    
    // 2. Agrega la clase 'active' únicamente al enlace que recibió el clic
    this.classList.add('active');
  });
});


  

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));
  }
});
