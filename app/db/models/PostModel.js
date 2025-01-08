import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    senderId: { type: String, required: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;