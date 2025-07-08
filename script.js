document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
      }
    });
  }

  // Form handling
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form && formMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      formMessage.textContent = '';

      const name = form.name;
      const email = form.email;
      const message = form.message;

      // Validate name
      if (!name.value || name.value.length < 2) {
        name.classList.add('error');
        valid = false;
      } else {
        name.classList.remove('error');
      }

      // Validate email
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!email.value || !emailPattern.test(email.value)) {
        email.classList.add('error');
        valid = false;
      } else {
        email.classList.remove('error');
      }

      // Validate message
      if (!message.value || message.value.length < 10) {
        message.classList.add('error');
        valid = false;
      } else {
        message.classList.remove('error');
      }

      if (valid) {
        const formData = new FormData(form);

        fetch('https://formspree.io/f/manjgdop', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
              formMessage.textContent = 'Děkuji za zprávu! Ozvu se co nejdříve.';
              formMessage.classList.add('success-message');
              form.reset();
            } else {
              formMessage.textContent = 'Něco se pokazilo. Zkuste to prosím znovu.';
              formMessage.classList.remove('success-message');
            }
          })
          .catch(() => {
            formMessage.textContent = 'Chyba při odesílání. Zkuste to prosím později.';
            formMessage.classList.remove('success-message');
          });
      } else {
        formMessage.textContent = 'Prosím vyplňte správně všechna pole.';
        formMessage.classList.remove('success-message');
      }
    });
  }

  // Blob animation
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
