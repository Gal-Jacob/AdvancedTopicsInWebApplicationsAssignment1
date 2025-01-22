import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({  // The post ID is generate by the mongoDB
    title: { type: String, required: true },
    description: { type: String, required: true },
    senderId: { type: String, required: true },
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;