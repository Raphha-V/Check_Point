document.addEventListener('DOMContentLoaded', function () {
  // --- LÓGICA DA SIDEBAR EXPANSÍVEL ---
  const appContainer = document.querySelector('.app-container');
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.addEventListener('mouseenter', () => appContainer.classList.add('sidebar-expanded'));
    sidebar.addEventListener('mouseleave', () => appContainer.classList.remove('sidebar-expanded'));
  }

  // --- LÓGICA DE NAVEGAÇÃO ---
  const allLinks = document.querySelectorAll('.nav-link, .sub-nav-link');
  const contentSections = document.querySelectorAll('.content-section');
  allLinks.forEach(link => {
    if (link.parentElement.classList.contains('sidebar-footer')) return;
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.dataset.target;
      document.querySelectorAll('.nav-link, .sub-nav-link').forEach(l => l.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));
      document.querySelectorAll(`[data-target="${targetId}"]`).forEach(l => l.classList.add('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');
    });
  });

  // --- LÓGICA SIMULADA DOS BOTÕES DE JUSTIFICATIVA ---
  const actionButtons = document.querySelectorAll('.task-actions button, .data-table .btn-sm');
  actionButtons.forEach(button => {
    button.addEventListener('click', function () {
      const action = this.classList.contains('btn-success') ? 'APROVADA' : 'RECUSADA';
      alert(`Justificativa ${action}!`);
      this.closest('.task-item, tr').remove();
    });
  });

  // --- LÓGICA DA TROCA DE FOTO DO ADMIN ---
  const adminPhotoUpload = document.getElementById('admin-photo-upload');
  const adminProfilePic = document.getElementById('admin-profile-pic');
  if (adminPhotoUpload && adminProfilePic) {
    adminPhotoUpload.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          adminProfilePic.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    });
  }
});