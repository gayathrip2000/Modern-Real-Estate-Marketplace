// yourApp.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code logic related to MongoDB connection can go here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
