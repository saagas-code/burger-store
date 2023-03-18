<h1 align="center">Burger Store</h1>

Projetinho simples realizado com o intuito de revisar alguns conhecimentos adquiridos tanto no front quanto no back feito em React + NodeJS e banco de dados postgreSQL




https://user-images.githubusercontent.com/104795182/226123046-dbe4aff9-1a1b-43f4-96ba-49c927762b10.mp4




<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,nodejs,nestjs,mysql,docker" />
  </a>
</p>

<h1 align="center">🚀 Tecnologias</h1>

<div align="center">
	<table border="1">
	<tr>
	<td>HTML</td>
	<td>CSS</td>
	<td>JavaScript</td>
	<td>React</td>
	<td>Node</td>
	<td>Redux toolkit</td>
	<td>React Toastify</td>
	<td>React Icons</td>
	</tr>
	</table>
</div>

<h1 align="center">Instalacão</h1>

<h2 align="center">Front-End</h2>
## para rodar aplicacão corretamente é necessário ter o back-end do projeto rodando

**1 - Clonar a aplicacão**

```bash
git clone https://github.com/saagas-code/burger-store.git
cd burger-store
cd front-end
```

**2 - Criar arquivo .env e setar variaveis**

```bash
REACT_APP_PORT_BACK=4000 // porta da API do back-end
```

**3 - Instalar dependencias e rodar aplicacão**

```bash
npm install
npm run dev
```

<h2 align="center">Back-End</h2>

**1 - Clonar a aplicacão**

```bash
git clone https://github.com/saagas-code/burger-store.git
cd burger-store
cd back-end
```

**2 - Criar arquivo .env e setar variaveis**

```bash
POSTGRES_USER= // Usuário do BD
POSTGRES_PASSWORD= // Senha do BD
POSTGRES_DB= // Nome do BD

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public
```

**3 - Instalar dependencias e rodar aplicacão**

```bash
npm install
npm run start:dev
       ou
docker compose up
```

<h1 align="center">Rotas do Back-End</h1>

### Categorias

| Method | Url         | Descricão                | Retorno           |
| ------ | ----------- | ------------------------- | ----------------- |
| POST   | /categories | Cria uma categoria        | VOID              |
| GET    | /categories | Lista todas as categorias | [JSON](#category) |

### Produtos

| Method | Url       | Descricão             | Retorno          |
| ------ | --------- | ----------------------- | ---------------- |
| POST   | /products | Cria um produto         | VOID             |
| GET    | /products | Lista todos os produtos | [JSON](#product) |

<h1 align="center">Exemplos de retornos JSON's</h1>

#### <a id="category">Método GET das categorias -> /categories</a>

```json
{
  "id": "f62988d9-d597-4ffe-bae1-9e2ca1be5dea",
  "name": "Sanduíches",
  "created_at": "2023-03-18T17:18:54.875Z"
}
```

#### <a id="product">Método GET dos produtos -> /products</a>

```json
{
	"id": "8b60c7ff-8af8-4ab6-b65b-1bf1e0abcce3",
	"name": "testeeeeee",
	"price": 16,
	"image": "http://localhost:8819/6.svg",
	"created_at": "2023-03-18T17:20:00.670Z",
	"category_id": "f62988d9-d597-4ffe-bae1-9e2ca1be5dea",
	"category": {
		"id": "f62988d9-d597-4ffe-bae1-9e2ca1be5dea",
		"name": "Sanduíches3",
		"created_at": "2023-03-18T17:18:54.875Z"
	}
}
```
