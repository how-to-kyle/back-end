exports.seed = function(knex, Promise) {
    return knex('posts').insert([   
      { title: 'Save time by using hotkeys' },
      { title: 'Automated testing is the best' },
      { title: 'Brush your teeth while showering'}
    ]);
  };