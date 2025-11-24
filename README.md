# Fullstack (Laravel + React)

## Este repositório contém um projeto completo dividido em duas aplicações:

### blog-back → API construída em Laravel

### blog-front → Interface construída em React

Ambas são organizadas dentro de uma única pasta principal para facilitar versionamento e deploy.

📁 Estrutura do Projeto <br>
blog/ <br>
├── blog-back/   # Backend Laravel (API REST) <br>
└── blog-front/  # Frontend React (Vite) <br>

### 🔧 Tecnologias Utilizadas

#### Backend (blog-back)

- Laravel 11

- Laravel Breeze (autenticação)

- MySQL

- Eloquent ORM

- Controllers REST

- Rotas API

#### Frontend (blog-front)

- React + Vite

- React Router DOM

- Axios

 - TailwindCSS

### 📌 Funcionalidades Implementadas

#### Backend (Laravel)

- CRUD completo de Posts:

- Criar Posts

- Listar Posts

- Exibir detalhes

- Atualizar Posts

- Deletar Posts

- API com rotas REST em /api/posts

- Validações básicas

#### Frontend (React)

- Tela Home exibindo posts vindos da API

- Página de criação de posts (Create)

- Página de edição de posts (Update)

- Página de detalhes (Detail)

- Botão de excluir com confirmação

- Navegação com React Router DOM

- Requisições via Axios

- Formulários com estados controlados (useState)

- Atualização automática da lista ao criar/editar/deletar

### 🔌 Configuração do Backend
1. Acessar a pasta <br>
```cd blog/blog-back```
2. Instalar dependências <br>
```composer install```
3. Configurar o .env

- Criar banco MySQL

- Ajustar:
```
DB_DATABASE=blog
DB_USERNAME=root
DB_PASSWORD= 
```

4. Criar tabelas <br>
```php artisan migrate```

5. Rodar o servidor <br>
```php artisan serve```

Backend estará em: http://localhost:8000

### 💻 Configuração do Frontend
1. Acessar a pasta <br>
```cd blog/blog-front```
2. Instalar dependências <br>
```npm install```
3. Rodar o projeto <br>
```npm run dev```

Frontend estará em: http://localhost:3000

### 🔗 Integração Front ↔ Back

A API do Laravel é consumida diretamente pelo React utilizando Axios:

#### Exemplo (GET):

```axios.get("http://localhost:8000/api/posts")```

#### Exemplo (POST):

```axios.post("http://localhost:8000/api/posts", { title, author, body })```

### 🧭 Rotas do React

- / → Lista de posts

- /posts/create → Criar

- /posts/update/:id → Editar

- /posts/detail/:id → Visualizar

### 🚀 Como Rodar o Projeto Completo

1. Levantar o backend <br>
```cd blog/blog-back``` <br>
```php artisan serve```
2. Levantar o frontend <br>
```cd blog/blog-front``` <br>
```npm run dev```

### ✔️ Sobre o Projeto

#### Este projeto foi desenvolvido para fins didáticos, praticando:

- Integração entre Laravel e React

- Estruturação completa de API

- Navegação no React

- CRUD real com banco MySQL

- Boas práticas de organização

- Serve como base sólida para qualquer aplicação fullstack moderna.

### 📜 Licença

Projeto livre para estudos e aprimoramentos.

### ✨ Autor

Desenvolvido por José Isaías Lourenço durante estudos avançados de Laravel + React.<br>
Em parceria com a empresa [© Vetor256](https://vetor256.com).
