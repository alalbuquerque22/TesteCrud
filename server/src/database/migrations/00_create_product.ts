import  {Knex} from 'knex'

export async function up(knex: Knex){
//cria tablea


   return knex.schema.createTable('products', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.double('price').notNullable();
        // table.string('image');
        table.string('categories').notNullable();
        

    });

}



export async function down(knex: Knex){

    //desfaz o up

    return knex.schema.dropTable('products')
    

}