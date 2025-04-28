const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PricingPlan = require('../models/PricingPlan');

dotenv.config();

const pricingPlans = [
  {
    id: 'start',
    name: 'Pack Start',
    description: 'Idéal pour les débutants en IPTV',
    channels: 5000,
    videoQuality: 'HD',
    devices: 1,
    support: 'Email',
    options: [
      { duration: '6 mois', price: '390,99Dhs' },
      { duration: '12 mois', price: '690,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: false },
      { text: 'Support technique prioritaire', included: false },
      { text: 'Applications dédiées multi-appareils', included: false },
    ],
  },
  {
    id: 'intense',
    name: 'Pack Intense',
    description: 'Notre offre la plus populaire',
    channels: 8000,
    videoQuality: 'HD/4K',
    devices: 2,
    support: 'Email & Chat',
    options: [
      { duration: '6 mois', price: '590,99Dhs' },
      { duration: '12 mois', price: '990,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: true },
      { text: 'Support technique prioritaire', included: true },
      { text: 'Applications dédiées multi-appareils', included: false },
    ],
  },
  {
    id: 'infinity',
    name: 'Pack Infinity',
    description: 'Expérience IPTV ultime sans compromis',
    channels: 12000,
    videoQuality: 'HD/4K/8K',
    devices: 4,
    support: 'Email, Chat & Téléphone',
    options: [
      { duration: '6 mois', price: '799,99Dhs' },
      { duration: '12 mois', price: '1399,99Dhs' },
    ],
    features: [
      { text: 'Chaînes francophones', included: true },
      { text: 'Chaînes internationales', included: true },
      { text: 'Films et séries à la demande', included: true },
      { text: 'Guide des programmes électronique', included: true },
      { text: 'Qualité 4K', included: true },
      { text: 'Support technique prioritaire', included: true },
      { text: 'Applications dédiées multi-appareils', included: true },
    ],
  },
];

mongoose.connect(process.env.MONGODB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(async () => {
  await PricingPlan.deleteMany({});
  await PricingPlan.insertMany(pricingPlans);
  console.log('Pricing plans seeded ✅');
  process.exit();
}).catch(err => {
  console.error('Seeding failed ❌:', err);
  process.exit(1);
});
