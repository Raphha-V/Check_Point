document.addEventListener('DOMContentLoaded', function () {
  // --- NAVEGAÇÃO PRINCIPAL ---
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === 'index.html') return;

    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.dataset.target;

      // Remove a classe 'active' de todos os links e seções
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      // Adiciona a classe 'active' ao link clicado e à seção correspondente
      this.classList.add('active');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  // --- LÓGICA SIMULADA DOS BOTÕES DE JUSTIFICATIVA (NO DASHBOARD) ---
  // (O código para os botões do dashboard continua o mesmo)
});

document.addEventListener('DOMContentLoaded', function () {
  // ... (todo o seu código de navegação e botões) ...


  // --- LÓGICA DA TROCA DE FOTO DO ADMIN ---
  const adminPhotoUpload = document.getElementById('admin-photo-upload');
  const adminProfilePic = document.getElementById('admin-profile-pic');

  adminPhotoUpload.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        adminProfilePic.src = e.target.result;
        // No futuro, aqui você enviaria a imagem para o back-end
      }
      reader.readAsDataURL(file);
    }
  });

}); // <-- O seu arquivo termina com isso. Adicione o código ACIMA desta linha.