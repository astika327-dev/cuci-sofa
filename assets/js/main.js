
// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', ()=>{
    const open = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Contact form (mailto fallback)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const wa = data.get('wa');
    const address = data.get('address');
    const message = data.get('message');
    const subject = encodeURIComponent('Booking Cuci Sofa');
    const body = encodeURIComponent(
      `Nama: ${name}\nWA: ${wa}\nAlamat: ${address}\n\nPesan:\n${message}`
    );
    window.location.href = `mailto:${'hello@cucisofapro.id'}?subject=${subject}&body=${body}`;
  });
}
