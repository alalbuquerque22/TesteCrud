import {Knex} from 'knex'

export async function up(knex: Knex){
//cria tablea


   return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable(); 
        table.string('cpf').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();

    });

}



export async function down(knex: Knex){

    //desfaz o up

    return knex.schema.dropTable('users')
    

}