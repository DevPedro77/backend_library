
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>backend_library - Documentação</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px;">

  <h1>📚 backend_library</h1>
  <p>API RESTful para gerenciamento de livros, desenvolvida com Node.js, Express e MongoDB. Permite operações CRUD para um acervo de livros.</p>

  <h2>🚀 Funcionalidades</h2>
  <ul>
    <li>Listar todos os livros</li>
    <li>Buscar um livro por ID</li>
    <li>Cadastrar um novo livro</li>
    <li>Atualizar informações de um livro existente</li>
    <li>Deletar um livro do acervo</li>
  </ul>

  <h2>🛠️ Tecnologias Utilizadas</h2>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
    <li><a href="https://mongoosejs.com/">Mongoose</a></li>
  </ul>

  <h2>📦 Instalação</h2>
  <ol>
    <li>Clone o repositório:
      <pre><code>git clone https://github.com/DevPedro77/backend_library.git</code></pre>
    </li>
    <li>Acesse o diretório do projeto:
      <pre><code>cd backend_library</code></pre>
    </li>
    <li>Instale as dependências:
      <pre><code>npm install</code></pre>
    </li>
    <li>Configure o <code>.env</code> com:
      <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/nome_do_banco</code></pre>
    </li>
    <li>Inicie o servidor:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h2>📫 Rotas da API</h2>
  <ul>
    <li><strong>GET</strong> /api/livros — listar todos os livros</li>
    <li><strong>GET</strong> /api/livros/:id — buscar livro por ID</li>
    <li><strong>POST</strong> /api/livros — cadastrar novo livro</li>
    <li><strong>PUT</strong> /api/livros/:id — atualizar livro existente</li>
    <li><strong>DELETE</strong> /api/livros/:id — deletar livro</li>
  </ul>

  <h3>Exemplo de JSON para cadastro ou atualização:</h3>
  <pre><code>{
  "titulo": "Nome do Livro",
  "editora": "Nome da Editora",
  "preco": 100,
  "paginas": 200
}</code></pre>

  <h2>🧪 Testando com Postman</h2>
  <ol>
    <li>Abra o <a href="https://www.postman.com/">Postman</a></li>
    <li>Crie uma nova requisição</li>
    <li>Use o método HTTP desejado (GET, POST, PUT, DELETE)</li>
    <li>Insira a URL (ex: http://localhost:3000/api/livros)</li>
    <li>Para POST/PUT, vá em "Body" &gt; "raw" &gt; "JSON" e insira os dados</li>
    <li>Envie e veja a resposta</li>
  </ol>

  <h2>📄 Licença</h2>
  <p>Este projeto está licenciado sob a Licença MIT. Veja o arquivo <code>LICENSE</code> para detalhes.</p>

  <h2>👨‍💻 Autor</h2>
  <p><strong>Pedro</strong> — <a href="https://github.com/DevPedro77">DevPedro77</a></p>

  <p>Contribuições são bem-vindas!</p>

</body>
</html>
```

