end/src/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  status: { type: String, enum: ['preorder', 'available'], required: true },
  image: String,
  description: String,
});

module.exports = mongoose.model('Product', ProductSchema);