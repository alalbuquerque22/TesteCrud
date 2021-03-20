import {Knex} from 'knex'
//caso deixe as categorias pre listadas
export async function seed(knex: Knex){
   await knex('products').insert([
        {
         name:"teste",
         price:"123", 
        //  image:"eletronicos.svg", 
         categories:"eletroeletronicos"        },
        {
         name:"teste",
         price:"123", 
        //  image:"cama.svg", 
         categories:"Cama, Mesa e Banho"        },
        {
         name:"teste",
         price:"123", 
        //  image:"cozinha.svg", 
         categories:"Cozinha"        },
        {
         name:"teste",
         price:"123", 
        //  image:"telecom.svg", 
         categories:"Telecom"        },
        {
         name:"teste",
         price:"123", 
        //  image:"ferramentas.svg", 
         categories:"Manutenção"        },
    ])
}