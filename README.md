# <img src="./imagens/logo - branca.png" alt="logo do Projeto" width=500>
 
![Status](https://img.shields.io/badge/status-Back--end%20em%20Desenvolvimento-orange)
![Tecnologia](https://img.shields.io/badge/tecnologia-HTML%20|%20CSS%20|%20JS%20|%20Python-blue)
![Licença](https://img.shields.io/badge/licença-MIT-lightgrey)

Um sistema de gestão de frequência de alunos, com um protótipo de front-end completo e o back-end em desenvolvimento com Python e Flask. O projeto é projetado para ser intuitivo, moderno e rico em funcionalidades tanto para alunos quanto para gestores.



---

## ✨ Funcionalidades Principais

O sistema é dividido em duas grandes áreas: o Painel do Aluno e o Painel do Gestor.

### 🎓 Painel do Aluno
- **Login/Cadastro:** Interface moderna com animação de painel deslizante.
- **Dashboard de Início:** Saudação, cartões de estatísticas e gráfico de frequência.
- **Check-in / Check-out:** Sistema para registro de ponto.
- **Justificativas:** Modal para justificar faltas e realizar upload de atestados.
- **Minha Agenda:** Calendário visual para acompanhamento de eventos.
- **Conquistas (Gamificação):** Sistema de medalhas e progresso.
- **Informações:** Visualização de dados, documentos e feedbacks.
- **Configurações:** Opções para troca de foto, senha e 2FA.

### 👔 Painel do Gestor
- **Dashboard do Gestor:** Visão geral com KPIs e feed de atividades.
- **Gestão de Alunos:** Tabela com lista de alunos e busca.
- **Análise de Justificativas:** Tabela para aprovar/recusar justificativas.
- **Relatórios:** Formulário para geração de relatórios de frequência.
- **Configurações:** Área para o gestor editar suas informações.

### 🛡️ Funcionalidade de Segurança: Sistema "Anti-Espertinhos"
O check-in só é validado se o aluno estiver fisicamente na instituição, através da **geolocalização** do dispositivo, que é verificada pelo back-end.

---

## 🛠️ Tecnologias Utilizadas

### **Front-end (Concluído)**
- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização, layout e animações.
- **JavaScript (ES6+):** Interatividade e manipulação do DOM.

### **Back-end (Em Desenvolvimento)**
- **Linguagem:** Python
- **Framework:** Flask
- **Banco de Dados (Sugestão):** SQLite para desenvolvimento, PostgreSQL para produção.

---


## 🗂️ Estrutura de Arquivos


/SISTEMA-CHECKIN/
|
|-- venv/              # Ambiente virtual do Python
|
|-- 📄 index.html      # Tela de Login e Cadastro
|-- 🎨 style.css       # Estilo do Login/Cadastro
|-- ⚙️ script.js       # Lógica do Login/Cadastro
|
|-- 📄 home.html       # Área Logada do Aluno
|-- 🎨 home.style.css  # Estilo da Área do Aluno
|-- ⚙️ home.script.js  # Lógica da Área do Aluno
|
|-- 📄 admin.html      # Painel do Gestor/Admin
|-- 🎨 admin.style.css # Estilo do Painel do Admin
|-- ⚙️ admin.script.js # Lógica do Painel do Admin
|
|-- 🐍 app.py          # Arquivo principal do Back-end (Flask)
|
`-- 📄 README.md       # Documentação do Projeto


---

## 🤝 Contribuidores

Este projeto está sendo desenvolvido com jovens talentos.

| Nome | Função Principal |
| :--- | :--- |
| Raphael Viana | Coordenador e Desenvolvedor de Projeto |
| Felipe Penha | Designer Gráfico & de UI |
| Guilherme de Oliveira | Designer Gráfico & de UI |
| Nicoly Gertrudes | Designer Gráfico & de UI |
| Bruno Batista | Designer Gráfico & de UI |
| Alice Vasconcelos | Social Media & Comunicação |
| Eurick Lima | Social Media & Comunicação |
| Gabriel Lucio | Social Media & Comunicação |
| Myllena de Oliveira | Social Media & Comunicação |
| Alycia Alves | Coordenador(a) de Projeto |
| Eloá Rodrigues | Coordenador(a) de Projeto |
| Lavínia Silva | Coordenador(a) de Projeto |
| Lavínia Borges | Coordenador(a) de Projeto |

---
<br>

## ©️ Copyright e Direitos Autorais

Copyright (c) 2025 Projeto Checkpoint. Todos os direitos reservados.

A visualização do código-fonte deste projeto é permitida exclusivamente para fins educacionais e de avaliação. A cópia, modificação, redistribuição, ou uso comercial deste software, no todo ou em parte, sem a permissão prévia e explícita dos detentores dos direitos autorais, é estritamente proibida e sujeita às penalidades da lei.
