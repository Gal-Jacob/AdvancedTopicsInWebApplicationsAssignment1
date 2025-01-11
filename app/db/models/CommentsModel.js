import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    postId: { type: String, required: true },
    text: { type: String, required: true },
    senderId: { type: String, required: true },
});

const CommentsModel = mongoose.model('Post', CommentSchema);

export default CommentsModel;
