const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/', async (req, res) => {
  const { fullName, email, phone, service, plan, duration, preferredContact, message } = req.body;
  console.log(req.body);

  try {
    const order = new Order({
      fullName,
      email,
      phone,
      service,
      plan,
      duration,
      preferredContact,
      message,
    });

    await order.save();
    res.status(201).json({ message: 'Order received successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save order' });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;



