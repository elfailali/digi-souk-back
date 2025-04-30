import PricingPlan from '../models/PricingPlan';
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

  if (req.method === 'GET') {
    try {
      const plans = await PricingPlan.find();
      return res.status(200).json(plans);
    } catch (error) {
      console.error('Error fetching pricing plans:', error);
      return res.status(500).json({ error: 'Failed to fetch pricing plans' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
