import express from 'express';
import PostModel from '../db/models/PostModel.js'

const postRouter = express.Router();

// Create: Add a New Post
postRouter.post('/New', async (req, res) => {
    try {
        const { title, description, senderId } = req.body; //Body Schema
        if (!title || !description || !senderId) { //Check if schma is valid
            return res.status(400).json({ error: 'title and description are required' });
        }

        const newPost = new PostModel({ title, description, senderId });
        res.status(201).json(await newPost.save());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read: Get All Posts
postRouter.get('/all', async (req, res) => {
    try {
        const items = await PostModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }});

// Read: Get a Post by ID
postRouter.get('/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read: Get Posts by Sender
postRouter.get('/senderId/:senderId', async (req, res) => {
    try {
        const Posts = await PostModel.find({senderId: req.params.senderId});
        if (!Posts) {
            return res.status(404).json({ error: 'Posts not found' });
        }
        res.json(Posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update: Update an item by ID
postRouter.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedItem = await PostModel.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true, runValidators: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default postRouter;