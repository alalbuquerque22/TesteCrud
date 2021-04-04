import {Request,Response} from 'express'
import knex from '../database/connection'
export default class ProductsIndexController{

   

    async index(request: Request,response: Response){
        // Listar produtos
        const products = await knex('products').select('*')
        
        const serializedProducts = products.map(product => {
            return {
                id:product.id,
                name: product.name, 
                price: product.price,
                // image_url:`http:192.168.10.111:3333/uploads/${product.image}`,
                categories:product.categories
            }; 
        });

        return response.json(serializedProducts)
    }
}