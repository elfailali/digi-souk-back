window.onload = async function() {
 try {
     // Fetch pricing plans
     const pricingPlans = await fetch('/api/pricingPlans.js');
     
     const pricingPlansDiv = document.getElementById('pricingPlans');
     pricingPlans.forEach(plan => {
         const planDiv = document.createElement('div');
         planDiv.classList.add('pricing-plan');
         planDiv.innerHTML = `<strong>${plan.name}</strong><br>Price: $${plan.price}`;
         pricingPlansDiv.appendChild(planDiv);
     });

     // Fetch orders
     const orders = await fetch('/api/orders.js');
     
     const ordersDiv = document.getElementById('orders');
     orders.forEach(order => {
         const orderDiv = document.createElement('div');
         orderDiv.classList.add('order');
         orderDiv.innerHTML = `<strong>Order ID: ${order._id}</strong><br>Product: ${order.productName}<br>Status: ${order.status}`;
         ordersDiv.appendChild(orderDiv);
     });
 } catch (error) {
     console.error('Error fetching data:', error);
 }
};
