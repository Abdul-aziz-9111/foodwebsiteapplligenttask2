const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
const foods = [];  // <-- ye missing tha

// POST /details route
app.post('/details', (req, res) => {
  const data = req.body;
  foods.push(data);  // frontend ka data array me save kar rahe
  console.log(foods);  // pura array console me dikhega
  res.status(201).json({ message: "Data received and saved successfully", data });
});

// GET /details route
app.get('/details', (req, res) => {
  res.json(foods); // frontend ko sab saved data bhej rahe
});

// POST /food route
app.post('/food', (req, res) => {
  try {
    const { name, image, description, button, category } = req.body;
    
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
app.post('/detailpagedata',(req,res)=>{
  const data=req.body;
  res.json(data);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
