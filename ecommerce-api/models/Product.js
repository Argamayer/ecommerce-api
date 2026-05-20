const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama produk wajib diisi'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Deskripsi wajib diisi']
  },
  price: {
    type: Number,
    required: [true, 'Harga wajib diisi'],
    min: [0, 'Harga tidak boleh negatif']
  },
  category: {
    type: String,
    required: true,
    enum: ['elektronik', 'pakaian', 'makanan', 'lainnya']
  },
  stock: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true  // otomatis tambah createdAt & updatedAt
});

module.exports = mongoose.model('Product', productSchema);