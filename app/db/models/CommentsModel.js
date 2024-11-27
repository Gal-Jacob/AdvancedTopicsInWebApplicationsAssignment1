const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    PostId: { type: String, required: true }, // The post ID is generate by the mongoDB
    Text: { type: String, required: true },
    senderId: { type: String, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
