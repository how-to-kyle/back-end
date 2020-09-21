const express = require('express');
const router = express.Router();
const Posts = require('../models/posts-models')

router.post("/", (req, res) => {
    Posts.add(req.body)
    .then(response => {res.status(201).json(response)})
    .catch((error)=> {
        res.status(500).json( {message: error.message})
    })
})

router.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    Posts.update(id, req.body)
    .then(response=>{
        res.status(200).json(response)
    })
    .catch((error)=> {
        res.status(500).json( {message: error.message})

    })
})

router.delete("/id", (req, res)=>{
    const id = Number(req.params.id)
    Posts.remove(id, req.body)
    .then(response=> {
        res.status(200).json(response)
    })
    .catch((error)=> {
        res.status(500).json({message:error.message})
    })
})

router.get("/", (req,res) => {
    Posts.get()
    .then((posts) => {
        res.status(200).json(posts)
    })
    .catch((error)=> {
        res.status(500).json({
            message: "Error retrieving the posts",
        })
    })
})
router.get("/:id", (req, res)=> {
    Posts.getById(Number(req.posts.id))
    res.status(200).json(posts)
})


module.exports = router;