const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (using a simple in-memory array for now)

// Routes
app.get('/', (req, res) => {
  res.json(foods);
});

app.post('/food', (req, res) => {
  try {
    const { name, image, description, button ,category} = req.body;
    
    if (!name || !image || !description || !button) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newFood = {
      _id: Date.now().toString(),
      name,
      image,
      description,
      button,
      category
    };

    foods.push(newFood);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
