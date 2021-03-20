import {Request,Response} from 'express'
import knex from '../database/connection'
export default class ProductController {

        async index(request:Request,response:Response){
            //listar filtrado por categoria
            const { id,name, categories} = request.query;

        const filteredProducts = await knex('products')
        .select('id','name','categories')
        .where('categories',String(categories))

            console.log(filteredProducts);

            return response.json({ok:true})
            
        }

       
        async show(request:Request,response:Response){
            const {id} = request.params

            const product = await knex('products').where('id',id).first()

            if(!product){
                return response.status(400).json({message:'Produto nao encontrado'})
            }

          
            return response.json(product)
        }
    
        async create(request:Request,response:Response){
            
            const {
                name,
                price,               
                categories
            } = request.body;
        
            const product ={
                name,
                price,
                categories
            }
            const trx = await knex.transaction()
            const insertedProduct =  await trx('products').insert(product)
            const product_id = insertedProduct[0]

            await trx.commit()

            return response.json({
                id:product_id,
                ...product
            })
        
    }
}