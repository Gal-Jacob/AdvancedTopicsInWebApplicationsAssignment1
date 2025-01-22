import express from 'express';
import CommentsModel from '../db/models/CommentsModel.js'

const commentsRouter = express.Router();

// Create: Add a New comment
commentsRouter.post('/New', async (req, res) => {
    try {
        const { postId, text, senderId } = req.body; //Body Schema
        if (!postId || !text || !senderId) { //Check if schma is valid
            return res.status(400).json({ error: 'postId text and senderId is required' });
        }

        const newComment = new CommentsModel({ postId, text, senderId });
        res.status(201).json(await newComment.save());
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read: Get All Comments
commentsRouter.get('/all', async (req, res) => {
    try {
        const items = await CommentsModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }});

// Read: Get a Comment by ID
commentsRouter.get('/:id', async (req, res) => {
    try {
        const post = await CommentsModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read: Get Comment by Sender
commentsRouter.get('/senderId/:senderId', async (req, res) => {
    try {
        const Posts = await CommentsModel.find({senderId: req.params.senderId});
        if (!Posts) {
            return res.status(404).json({ error: 'Posts not found' });
        }
        res.json(Posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update: Update an item by ID
commentsRouter.put('/:id', async (req, res) => {
    try {
        const { text } = req.body;
        const updatedItem = await CommentsModel.findByIdAndUpdate(
            req.params.id,
            { text },
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


export default commentsRouter;