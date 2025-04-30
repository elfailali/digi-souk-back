import Order from '../models/Order';
import dbConnect from '../utils/dbConnect';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { fullName, email, phone, service, plan, duration, preferredContact, message } = req.body;

      const newOrder = new Order({
        fullName,
        email,
        phone,
        service,
        plan,
        duration,
        preferredContact,
        message,
      });

      await newOrder.save();
      return res.status(201).json({ message: 'Order received successfully' });
    } catch (error) {
      console.error('Error creating order:', error);
      return res.status(500).json({ error: 'Failed to save order' });
    }
  } else if (req.method === 'GET') {
    try {
      const orders = await Order.find();
      return res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
