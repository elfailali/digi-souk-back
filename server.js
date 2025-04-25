require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const pricingPlanRoutes = require("./routes/PricingPlans");
const orderRoutes = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/pricing-plans", pricingPlanRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
