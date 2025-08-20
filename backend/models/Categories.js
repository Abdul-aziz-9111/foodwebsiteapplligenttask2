const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  button: { type: String, required: true }
});

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  items: [itemSchema] // <-- array of items
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;