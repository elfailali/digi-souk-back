// seedOrders.js
const mongoose = require('mongoose');
const Order = require('../models/Order'); 
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });


const orders = [
  {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    service: 'IPTV',
    plan: 'Pack Start',
    duration: '6 mois',
    preferredContact: 'Email',
    message: 'Looking forward to the service!',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 987 654 321',
    service: 'IPTV',
    plan: 'Pack Intense',
    duration: '12 mois',
    preferredContact: 'Phone',
    message: 'Excited to start using the service.',
  },
  // Add more sample orders as needed
];

// Insert sample orders into the database
const seedOrders = async () => {
  try {
    await Order.insertMany(orders);
    console.log('Orders seeded successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding orders:', error);
    mongoose.connection.close();
  }
};

seedOrders();
