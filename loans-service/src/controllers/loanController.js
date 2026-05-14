const Loan = require('../models/Loan');

exports.borrowBook = async (req, res) => {
  try {
    const loan = await Loan.create(req.body);
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  const { id } = req.params;
  const loan = await Loan.findByPk(id);

  if (!loan) {
    return res.status(404).json({ message: 'Loan not found' });
  }

  loan.return_date = new Date();
  await loan.save();

  res.json(loan);
};

exports.getLoans = async (req, res) => {
  const loans = await Loan.findAll();
  res.json(loans);
};