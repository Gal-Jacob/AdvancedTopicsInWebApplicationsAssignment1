const mongoose = require('mongoose');

const MONGO_URI='mongodb+srv://galyaakov100:ysJQH2vwmNYIfKzU@assiment1.dksyj.mongodb.net/posts'  // Replace with your MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;