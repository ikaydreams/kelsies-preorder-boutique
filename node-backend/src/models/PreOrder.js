const mongoose = require('mongoose');

const PreOrderSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  userName: String,
  userEmail: String,
  quantity: Number,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('PreOrder', PreOrderSchema);