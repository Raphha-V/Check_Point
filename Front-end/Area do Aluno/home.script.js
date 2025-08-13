document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DA SIDEBAR EXPANSÍVEL ---
    const appContainer = document.querySelector('.app-container');
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('mouseenter', () => appContainer.classList.add('sidebar-expanded'));
        sidebar.addEventListener('mouseleave', () => appContainer.classList.remove('sidebar-expanded'));
    }

    // --- LÓGICA DE NAVEGAÇÃO E GRÁFICO ---
    let frequencyChartInstance = null;
    const allLinks = document.querySelectorAll('.nav-link, .sub-nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    allLinks.forEach(link => {
        if (link.classList.contains('logout-link') || (link.parentElement && link.parentElement.classList.contains('sidebar-footer'))) return;
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.dataset.target;
            document.querySelectorAll('.nav-link, .sub-nav-link').forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            document.querySelectorAll(`[data-target="${targetId}"]`).forEach(l => l.classList.add('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add('active');
            if (targetId === 'dashboard') createFrequencyChart();
        });
    });

    function createFrequencyChart() {
        const ctx = document.getElementById('frequencyChart');
        if (!ctx) return;
        if (frequencyChartInstance) frequencyChartInstance.destroy();
        const canvasCtx = ctx.getContext('2d');
        const gradient = canvasCtx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(138, 99, 210, 0.6)');
        gradient.addColorStop(1, 'rgba(138, 99, 210, 0)');
        frequencyChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Horas', data: [6, 5, 5.5, 7, 6, 1, 0],
                    backgroundColor: gradient, borderColor: '#8a63d2', borderWidth: 3,
                    fill: true, tension: 0.4, pointRadius: 0, pointHoverRadius: 6,
                }]
            },
            options: {
                maintainAspectRatio: false, responsive: true,
                interaction: { intersect: false, mode: 'index' },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#1e1b33', titleColor: '#f0f0f0', bodyColor: '#a0a0b3',
                        padding: 10, cornerRadius: 8, displayColors: false,
                        callbacks: { label: context => `${context.raw} horas` }
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(160, 160, 179, 0.2)' }, ticks: { color: '#a0a0b3' } },
                    x: { grid: { display: false }, ticks: { color: '#a0a0b3' } }
                }
            }
        });
    }
    if (document.getElementById('dashboard')?.classList.contains('active')) {
        createFrequencyChart();
    }

    // --- LÓGICA DE CHECK-IN / OUT ---
    const checkinBtn = document.getElementById('checkin-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkStatusElements = document.querySelectorAll('#check-status, #dashboard-status');
    const lastActivity = document.getElementById('last-activity');
    
    if (checkinBtn) {
        checkinBtn.addEventListener('click', () => {
            checkinBtn.disabled = true;
            checkoutBtn.disabled = false;
            checkStatusElements.forEach(el => {
                el.textContent = "Presente";
                el.className = "status status-ok";
            });
            const now = new Date();
            if(lastActivity) lastActivity.textContent = `Check-in realizado às ${now.toLocaleTimeString('pt-BR')}.`;
        });
    }
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            checkinBtn.disabled = false;
            checkoutBtn.disabled = true;
            checkStatusElements.forEach(el => {
                el.textContent = "Ausente";
                el.className = "status status-absent";
            });
            const now = new Date();
            if(lastActivity) lastActivity.textContent = `Check-out realizado às ${now.toLocaleTimeString('pt-BR')}.`;
        });
    }

    // --- LÓGICA DO MODAL DE JUSTIFICATIVA ---
    const justifyBtn = document.getElementById('justify-btn');
    const modal = document.getElementById('justification-modal');
    if (modal && justifyBtn) {
        const closeModalBtn = modal.querySelector('.close-button');
        function openModal() { modal.classList.add('active'); }
        function closeModal() { modal.classList.remove('active'); }
        
        justifyBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) closeModal();
        });

        const justificationForm = document.getElementById('justification-form');
        if (justificationForm) {
            justificationForm.addEventListener('submit', function(event) {
                event.preventDefault();
                alert("Justificativa enviada para análise!");
                justificationForm.reset();
                closeModal();
            });
        }
    }

    // --- LÓGICA DA TROCA DE FOTO ---
    const photoUploadInput = document.getElementById('photo-upload');
    const profilePic = document.getElementById('profile-pic');

    if (photoUploadInput && profilePic) {
        photoUploadInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePic.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
    }
});
