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

