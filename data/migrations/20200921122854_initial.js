
exports.up = async function (knex) {
    await knex.schema.createTable('users', (table) => {
      table.increments('id').unsigned();
      table.text('email').unique().notNullable();
      table.text('password').notNullable();
    })
   await knex.schema.createTable('posts', posts => {
      posts.increments();

      posts
        .string('title', 255)
        .notNullable()
      posts.integer('user_post_id') 
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
 
  };
  
  exports.down = async function (knex) {
    await knex.schema
   
    .dropTableIfExists('posts')
    .dropTableIfExists('users')
  };
