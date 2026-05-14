const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    const book = await Book.create({
      title,
      author,
      available: true,
    });

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};