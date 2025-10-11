// Navegación móvil
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Dropdown accesible (en móvil con click)
const dropbtn = document.querySelector('.nav__dropbtn');
const dropmenu = document.querySelector('.nav__dropmenu');
if (dropbtn && dropmenu) {
  dropbtn.addEventListener('click', () => {
    const show = dropmenu.style.display === 'block' ? 'none' : 'block';
    dropmenu.style.display = show;
    dropbtn.setAttribute('aria-expanded', String(show === 'block'));
  });
}

// Demo de envío de formulario
const btnSend = document.getElementById('btnSend');
const msg = document.getElementById('msg');
if (btnSend && msg) {
  btnSend.addEventListener('click', () => {
    msg.textContent = '¡Gracias! Te contactamos en breve.';
    setTimeout(()=> msg.textContent='', 4000);
  });
}

// Suaviza el scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
      menu?.classList.remove('open');
    }
  });
});
