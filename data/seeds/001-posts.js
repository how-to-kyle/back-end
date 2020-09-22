exports.seed = function(knex, Promise) {
    return knex('posts').insert([   
      { title: 'Save time by using hotkeys',  user_post_id: 1 },
      { title: 'Automated testing is the best',  user_post_id: 1 },
      { title: 'Brush your teeth while showering',  user_post_id: 2 }
    ]);
  };