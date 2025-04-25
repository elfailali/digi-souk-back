const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  text: String,
  included: Boolean
});

const optionSchema = new mongoose.Schema({
  duration: String,
  price: String
});

const pricingPlanSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  channels: Number,
  videoQuality: String,
  devices: Number,
  support: String,
  options: [optionSchema],
  features: [featureSchema],
});

module.exports = mongoose.model('PricingPlan', pricingPlanSchema);
