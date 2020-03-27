exports.up = function(knex) { //método up é responsável pela criação da tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //o 2 é o tamanho fixo da string
    });
};

exports.down = function(knex) { //método down é responsável se der alguma merda e precisar voltar atrás, oq deve ser desfeito
    return knex.schema.dropTable('ongs');
};
