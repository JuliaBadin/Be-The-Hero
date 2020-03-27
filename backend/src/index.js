/** 
  * Rotas / Recursos
 **/

 /** 
  * Métodos HTTP:
  *
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
 **/

 /** 
  * Tipos de Parâmetros
  * 
  * Query: Parâmetros nomeado enviados na rota após '?' (Filtros, paginação)
  * Route Parms: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 **/

 /**
  * SQL: MySQUL, SQLite, PostgeeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

const express = require('express');
const cors = require('./cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);