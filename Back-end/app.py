# Importa as classes Flask, jsonify do pacote flask
from flask import Flask, jsonify
# Importa o CORS do pacote que acabamos de instalar
from flask_cors import CORS

# Cria uma instância da nossa aplicação web
app = Flask(__name__)
# Habilita o CORS para a nossa aplicação, permitindo a comunicação
CORS(app)

# Define uma rota de API (note o /api/ no início)
@app.route("/api/status")
def status():
    # Agora, em vez de texto, retornamos um dicionário Python.
    # O jsonify vai transformar isso em um formato que o JavaScript entende.
    return jsonify({
        "status": "ok",
        "message": "O back-end está online e pronto para a ação!"
    })

# A rota antiga, que podemos remover depois
@app.route("/")
def hello_world():
    return "Olá, o back-end em Python do Checkpoint está funcionando!"

# Roda a aplicação
if __name__ == '__main__':
    app.run(debug=True)