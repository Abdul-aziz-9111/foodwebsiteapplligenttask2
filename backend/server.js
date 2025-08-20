  const express = require('express');
  const app = express();
  const mongoose = require('mongoose');
  const Food = require('./models/Food.js');
  const cors = require('cors');
  const Category= require('./models/Categories.js');
  const category = require('./category.json');
  app.use(cors(
    {
      origin:'*',
    }
  ));
  app.use(express.json());
  mongoose.connect("mongodb://127.0.0.1:27017/foods")
  .then(()=>{
    console.log("mongodb connected");
  })
.then(async () => {
    for (let i = 0; i < category.length; i++) {
        await Category.create(category[i]);  // ek-ek karke insert karega
    }
    console.log("Inserted in index order");
})
.catch(err => console.log(err));
  

  app.post('/food', async (req, res) => {
    try {
      const { name, image, description, button,category } = req.body;
      const newFood = new Food({ name, image, description, button,category });
      await newFood.save();
      res.status(201).json({ message: "Data saved" });
    } catch (err) {
      console.error("POST /food error:", err);
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/', async (req, res) => {
    try {
      const foods = await Food.find();
      res.json(foods);
    } catch (err) {
      console.error("GET / error:", err);
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/categories',async(req,res)=>{
    const categories= await Category.find();
    res.json(categories);
  });

  app.listen(3000,'0.0.0.0',()=>{
      console.log("server running on port 3000");
  });

      
