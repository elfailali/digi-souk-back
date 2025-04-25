const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  service: String,
  plan: String,
  duration: String,
  preferredContact: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
