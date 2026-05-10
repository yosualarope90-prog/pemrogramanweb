// Navigasi Halaman
function navigateTo(page) {

  document.querySelectorAll('.page').forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active-link');
  });

  document.querySelectorAll(`[data-page="${page}"]`).forEach(link => {
    link.classList.add('active-link');
  });

  document.getElementById('mobile-nav').classList.add('hidden');

  window.scrollTo(0, 0);
}

// Event Menu
document.querySelectorAll('.nav-link').forEach(link => {

  link.addEventListener('click', () => {
    navigateTo(link.dataset.page);
  });

});

// Mobile Menu
document.getElementById('mobile-menu-btn')
.addEventListener('click', () => {

  document.getElementById('mobile-nav')
  .classList.toggle('hidden');

});

// Form Kontak
document.getElementById('contact-form')
.addEventListener('submit', function(e) {

  e.preventDefault();

  document.getElementById('success-message')
  .classList.remove('hidden');

  this.reset();

  setTimeout(() => {
    document.getElementById('success-message')
    .classList.add('hidden');
  }, 3000);

});

// Lucide Icons
lucide.createIcons();
