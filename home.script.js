document.addEventListener('DOMContentLoaded', function () {
  // --- NAVEGAÇÃO PRINCIPAL ---
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === 'index.html') return;

    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.dataset.target;

      navLinks.forEach(navLink => navLink.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // --- LÓGICA DA ABA DE CHECK-IN / CHECK-OUT ---
  const checkinBtn = document.getElementById('checkin-btn');
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkStatus = document.querySelectorAll('#check-status, #dashboard-status');
  const lastActivity = document.getElementById('last-activity');
  let isCheckedIn = false;

  checkinBtn.addEventListener('click', () => {
    isCheckedIn = true;
    checkinBtn.disabled = true;
    checkoutBtn.disabled = false;
    checkStatus.forEach(el => {
      el.textContent = "Presente";
      el.className = el.id === 'dashboard-status' ? 'status-ok' : 'status status-ok';
    });
    const now = new Date();
    lastActivity.textContent = `Check-in realizado às ${now.toLocaleTimeString('pt-BR')}.`;
  });

  checkoutBtn.addEventListener('click', () => {
    isCheckedIn = false;
    checkinBtn.disabled = false;
    checkoutBtn.disabled = true;
    checkStatus.forEach(el => {
      el.textContent = "Ausente";
      el.className = el.id === 'dashboard-status' ? 'status-absent' : 'status status-absent';
    });
    const now = new Date();
    lastActivity.textContent = `Check-out realizado às ${now.toLocaleTimeString('pt-BR')}.`;
  });


  // --- LÓGICA DO MODAL DE JUSTIFICATIVA ---
  const justifyBtn = document.getElementById('justify-btn');
  const modal = document.getElementById('justification-modal');
  const closeModalBtn = modal.querySelector('.close-button');

  function openModal() { modal.classList.add('active'); }
  function closeModal() { modal.classList.remove('active'); }

  justifyBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const justificationForm = document.getElementById('justification-form');
  justificationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Justificativa enviada para análise!");
    justificationForm.reset();
    closeModal();
  });

  // --- LÓGICA DO UPLOAD DE DECLARAÇÃO ESCOLAR ---
  const declaracaoInput = document.getElementById('declaracao-upload');
  const fileNameStatus = document.getElementById('file-name-status');
  const submitDeclaracaoBtn = document.getElementById('submit-declaracao-btn');
  let selectedFile = null;

  declaracaoInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      selectedFile = this.files[0];
      fileNameStatus.textContent = selectedFile.name;
      fileNameStatus.style.fontStyle = 'normal';
      fileNameStatus.style.color = '#333';
      submitDeclaracaoBtn.disabled = false;
    } else {
      selectedFile = null;
      fileNameStatus.textContent = "Nenhum arquivo selecionado.";
      submitDeclaracaoBtn.disabled = true;
    }
  });

  submitDeclaracaoBtn.addEventListener('click', function () {
    if (selectedFile) {
      alert(`Enviando o arquivo "${selectedFile.name}" para o servidor!`);
      console.log("Arquivo a ser enviado:", selectedFile);
      fileNameStatus.textContent = "Arquivo enviado com sucesso!";
      fileNameStatus.style.color = 'var(--success-color)';
      submitDeclaracaoBtn.disabled = true;
      declaracaoInput.value = '';
      selectedFile = null;
    }
  });

  // --- LÓGICA DA TROCA DE FOTO ---
  const photoUploadInput = document.getElementById('photo-upload');
  const profilePic = document.getElementById('profile-pic');

  photoUploadInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profilePic.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // ... (todo o seu código JS anterior até o final)

  // --- NOVA LÓGICA PARA O SINO DE NOTIFICAÇÃO ---
  const notificationBell = document.getElementById('notification-bell');
  const notificationPanel = document.getElementById('notification-panel');

  notificationBell.addEventListener('click', function (event) {
    event.stopPropagation(); // Impede que o clique feche o painel imediatamente
    notificationPanel.classList.toggle('show');
  });

  // Fecha o painel se clicar em qualquer lugar fora dele
  document.addEventListener('click', function () {
    if (notificationPanel.classList.contains('show')) {
      notificationPanel.classList.remove('show');
    }
  });

  // Impede que cliques dentro do painel o fechem
  notificationPanel.addEventListener('click', function (event) {
    event.stopPropagation();
  });

}); // <-- O seu arquivo termina com isso. Adicione o código ACIMA desta linha.