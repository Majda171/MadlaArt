 // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });
  // Support keyboard enter on hamburger
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });

  // Simple form validation and submission simulation
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    formMessage.textContent = '';

    // Validate name
    const name = form.name;
    if (!name.value || name.value.length < 2) {
      name.classList.add('error');
      valid = false;
    } else {
      name.classList.remove('error');
    }

    // Validate email (basic)
    const email = form.email;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
      email.classList.add('error');
      valid = false;
    } else {
      email.classList.remove('error');
    }

    // Validate message
    const message = form.message;
    if (!message.value || message.value.length < 10) {
      message.classList.add('error');
      valid = false;
    } else {
      message.classList.remove('error');
    }

    if (valid) {
      formMessage.textContent = 'Děkuji za zprávu! Ozvu se co nejdříve.';
      formMessage.classList.add('success-message');
      form.reset();
    } else {
      formMessage.textContent = 'Prosím vyplňte správně všechna pole.';
      formMessage.classList.remove('success-message');
    }
  });

  // Mikroanimace blobů - jemný pohyb
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach(blob => {
    let angle = 0;
    function animate() {
      angle += 0.01;
      blob.style.transform = `translate(${Math.sin(angle) * 10}px, ${Math.cos(angle) * 10}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  });

  document.addEventListener('DOMContentLoaded', () => {
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach(blob => {
    let angle = 0;
    function animate() {
      angle += 0.01;
      blob.style.transform = `translate(${Math.sin(angle) * 10}px, ${Math.cos(angle) * 10}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  });
});

