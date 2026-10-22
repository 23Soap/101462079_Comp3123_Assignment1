require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routers/usersRoutes');
const employeeRoutes = require('./routers/employeeRoutes');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

connectDB();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'API is running smoothly' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});