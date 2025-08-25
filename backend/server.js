const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Food = require('./models/Food.js');
const cors = require('cors');
const Category = require('./models/Categories.js');
const category = require('./category.json');
const Detail = require('./models/detail.js');

app.use(cors({ origin: '*' }));
app.use(express.json());

// ✅ MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/foods")
  .then(async () => {
    console.log("✅ MongoDB connected");

    // ✅ Sirf tab insert kare jab Category empty ho
    const count = await Category.countDocuments();
    if (count === 0) {
      await Category.insertMany(category);
      console.log("Inserted categories in index order");
    }
  })
  .catch(err => console.log("❌ MongoDB error:", err));

// ✅ Add Food
app.post('/food', async (req, res) => {
  try {
    const { name, image, description, button, category } = req.body;
    const newFood = new Food({ name, image, description, button, category });
    await newFood.save();
    res.status(201).json({ message: "Data saved" });
  } catch (err) {
    console.error("POST /food error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all foods
app.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    console.error("GET / error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get categories
app.get('/categories', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// ✅ Just testing details post (not saving)
app.post('/details', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: "Received" });
});

// ✅ Detail insert
app.post('/datadetails', async (req, res) => {
  try {
    const data = req.body;
    let result;
    if (Array.isArray(data)) {
      result = await Detail.insertMany(data);
    } else {
      result = await Detail.create(data);
    }
    res.status(201).json({ message: "Data saved successfully", data: result });
  } catch (err) {
    console.error("POST /datadetails error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all details
app.get('/datapage', async (req, res) => {
  try {
    const details = await Detail.find();
    res.json(details);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get detail by id
app.get("/datapage/:id", async (req, res) => {
  const { id } = req.params;
  console.log("👉 Looking for product with id:", id);

  try {
    // Category ke andar items array me se product dhundho
    const category = await Category.findOne({ "items._id": id }, { "items.$": 1 });

    if (!category || !category.items || category.items.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(category.items[0]); // Sirf matched item bhejna hai
  } catch (err) {
    console.error("GET /datapage/:id error:", err);
    res.status(500).json({ error: "Server error" });
  }
});// ✅ Server start
app.listen(3000, '0.0.0.0', () => {
  console.log("🚀 Server running on http://localhost:3000");
});
