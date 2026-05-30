const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require('path');
const { syncDatabase } = require("./model");
const categoryRoute = require('./routes/category.route')
const productRoute = require('./routes/product.route')
const customerRoute = require('./routes/customer.route')
const orderRoute = require('./routes/order.route')
const userRoutes = require('./routes/user.route');

const app = express();
const port = process.env.PORT || 3306;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());

app.use('/api/categories', categoryRoute)
app.use('/api/products', productRoute)
app.use('/api/customers', customerRoute)
app.use('/api/orders', orderRoute)
app.use('/api/users', userRoutes);

syncDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        });
    })
    .catch((err) => {
        console.error("Failed to sync database:", err);
        process.exit(1);
    })
