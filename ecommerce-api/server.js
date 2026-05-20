const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/productRoutes'));

// Route default
app.get('/', (req, res) => {
  res.json({ message: 'API Sistem Produk E-Commerce berjalan!' });
});

// Connect MongoDB & jalankan server
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB terhubung');
    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Gagal connect MongoDB:', err.message);
    process.exit(1);
  });