const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: { type: String, required: true }, // The post ID is generate by the mongoDB
    text: { type: String, required: true },
    senderId: { type: String, required: true },
});

const CommentsModel = mongoose.model('Post', CommentSchema);

export default CommentsModel;
