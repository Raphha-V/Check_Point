document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // Adiciona a classe que ativa a animação para mostrar o painel de cadastro
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
    }

    // Remove a classe para voltar ao painel de login
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    // Adicione este bloco antes do }); final do seu script.js

    // --- LÓGICA DO UPLOAD DE DECLARAÇÃO ESCOLAR ---
    const declaracaoInput = document.getElementById('declaracao-upload');
    const fileNameStatus = document.getElementById('file-name-status');
    const submitDeclaracaoBtn = document.getElementById('submit-declaracao-btn');
    let selectedFile = null;

    // Evento para quando um arquivo é escolhido
    declaracaoInput.addEventListener('change', function () {
        if (this.files && this.files.length > 0) {
            selectedFile = this.files[0];
            fileNameStatus.textContent = selectedFile.name;
            fileNameStatus.style.fontStyle = 'normal';
            fileNameStatus.style.color = '#333';
            submitDeclaracaoBtn.disabled = false; // Habilita o botão de envio
        } else {
            selectedFile = null;
            fileNameStatus.textContent = "Nenhum arquivo selecionado.";
            submitDeclaracaoBtn.disabled = true; // Desabilita se nenhum arquivo for selecionado
        }
    });

    // Evento para o clique no botão "Enviar"
    submitDeclaracaoBtn.addEventListener('click', function () {
        if (selectedFile) {
            // No futuro, aqui você faria a chamada para o back-end
            alert(`Enviando o arquivo "${selectedFile.name}" para o servidor!`);
            console.log("Arquivo a ser enviado:", selectedFile);

            // Reseta o campo e dá feedback ao usuário (simulação)
            fileNameStatus.textContent = "Arquivo enviado com sucesso!";
            fileNameStatus.style.color = 'var(--success-color)';
            submitDeclaracaoBtn.disabled = true;
            declaracaoInput.value = ''; // Limpa o input para um novo envio
            selectedFile = null;
        }
    });

}); // <-- O seu arquivo termina com isso. Adicione o código ACIMA desta linha.});

// Adicione este código no final do seu arquivo script.js

// Esta função será executada assim que a página carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // ... (o seu código anterior de troca de telas continua aqui em cima) ...

    // --- TESTE DE CONEXÃO COM O BACK-END ---
    // A função 'fetch' é o jeito do JavaScript fazer requisições na internet
    fetch('http://127.0.0.1:5000/api/status')
        .then(response => response.json()) // Converte a resposta para o formato JSON
        .then(data => {
            // Se tudo deu certo, 'data' será o objeto que enviamos do Python
            console.log("Mensagem do Back-end:", data.message);
            // Podemos até mostrar um alerta para ter certeza que funcionou
            alert("Conexão com o back-end estabelecida com sucesso!");
        })
        .catch(error => {
            // Se algo der errado (ex: servidor desligado), veremos um erro
            console.error("Erro ao conectar com o back-end:", error);
            alert("ERRO: Não foi possível conectar ao servidor. Verifique se o app.py está rodando.");
        });
});