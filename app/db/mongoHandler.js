import mongoose from 'mongoose';
import config from '../config/config.js';


export const connectDB = async () => {
    try {
        await mongoose.connect(config().mongo.connection_string, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
