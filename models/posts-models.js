const db = require('../data/dbConfig')

module.exports = {
add,
get,
getById,
update,
remove
}
async function add(addedObject) {
    const id = await db('posts').insert(addedObject)
    return addedObject
}

 function get() {
    return  db('posts')
}
async function getById(post_id){
    const id = await db('posts').where({post_id})
    return id
}

async function update(changes, id){
    if (changes){
        await db('posts').where({id}).update('title', changes)
    }
    return "Title has been updated"
}

async function remove(post_id) {
    await db('posts').where({id}).del() 
    return "Post deleted"
}