 document.addEventListener('DOMContentLoaded', function() {
  // Get the menu toggle button
  const menuToggle = document.getElementById('menuToggle');
  
  // Add click event listener to toggle the menu
  menuToggle.addEventListener('click', function() {
    // Toggle the menu-active class on the nav-container
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('menu-active');
  });
});

        const words = ["websites", "SaaS tools", "E-commerce stores", "customized Software"];
  const textEl = document.getElementById("changingText");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % words.length;
    textEl.style.opacity = 0;
    setTimeout(() => {
      textEl.textContent = words[index];
      textEl.style.opacity = 1;
    }, 400);
  }, 2500);

        // Simple JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
            
            // Play button interaction
            const playButton = document.querySelector('.play-button');
            if (playButton) {
                playButton.addEventListener('click', function() {
                    alert('Video would play here in a real implementation');
                });
                
                playButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'translate(-50%, -50%) scale(1.1)';
                });
                
                playButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'translate(-50%, -50%) scale(1)';
                });
            }
            
            // Smooth scroll for navigation
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Would implement smooth scroll to sections in a real implementation
                });
            });
        });

        // Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});