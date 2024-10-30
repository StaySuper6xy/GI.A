const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gia')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic Schema Examples
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  role: String
});

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: String,
  category: String,
  date: Date,
  description: String,
  userId: mongoose.Schema.Types.ObjectId
});

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  clientName: String,
  amount: Number,
  status: String,
  dueDate: Date,
  userId: mongoose.Schema.Types.ObjectId
});

// Models
const User = mongoose.model('User', userSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);
const Invoice = mongoose.model('Invoice', invoiceSchema);

// Example Routes
app.get('/api/dashboard', async (req, res) => {
  try {
    const totalRevenue = await Transaction.aggregate([
      { $match: { type: 'income' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const totalExpenses = await Transaction.aggregate([
      { $match: { type: 'expense' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const recentInvoices = await Invoice.find()
      .sort({ dueDate: -1 })
      .limit(5);

    const clientCount = await User.countDocuments({ role: 'client' });

    res.json({
      revenue: totalRevenue[0]?.total || 0,
      expenses: totalExpenses[0]?.total || 0,
      recentInvoices,
      clientCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
