const express = require('express');
const router = express.Router();
const PricingPlan = require('../models/PricingPlan');

router.get('/', async (req, res) => {
  try {
    const plans = await PricingPlan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pricing plans' });
  }
});

module.exports = router;
