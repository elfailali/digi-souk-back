import PricingPlan from '../models/PricingPlan';
import dbConnect from '../utils/dbConnect';

export default async function handler(req, res) {
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
