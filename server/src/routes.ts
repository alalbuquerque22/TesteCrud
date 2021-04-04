import express from 'express'
import knex from './database/connection'
import ProductsController from './controllers/ProductsController'
import ProductsIndexController from './controllers/IndexController'


const routes = express.Router();
const productsController = new ProductsController()
const productsIndexController = new ProductsIndexController()


routes.get('/products', productsIndexController.index)
// listar tudo 

routes.post('/products', productsController.create)
//adicionar 
routes.get('/products/:id', productsController.show)
//lisstar por id 

routes.get('/products', productsController.index)
//listar por categoria




export default routes;