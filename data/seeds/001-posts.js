exports.seed = function(knex, Promise) {
    return knex('posts').insert([   
      { title: 'testing seed title',  user_post_id: 1 },
      { title: 'testing seed title2',  user_post_id: 1 },
      { title: 'testing seed title3',  user_post_id: 2 }
    ]);
  };