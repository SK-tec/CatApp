const Cat = require("../models/cat");
const createCat = async (req, res) => {
  try {
    const newCat = await Cat.create(req.body);
    res.status(201).json(newCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllCats = async (req, res) => {
  try {
    const cats = await Cat.find().sort({ createdAt: -1 });
    res.json(cats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const searchCats = async (req, res) => {
  const s = req.params.query;
  try {
    const cats = await Cat.find({
      $or: [
        { breed: new RegExp(s, "i") },
        { temperament: new RegExp(s, "i") },
        { origin: new RegExp(s, "i") },
      ],
    }).sort({ createdAt: -1 });
    if (cats.length === 0) {
      res.status(404).json({ message: "No cats found that match your search" });
      return;
    }
    res.json(cats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCatById = async (req, res) => {
  try {
    const cats = await Cat.find({ _id: req.params.id });
    if (cats.length === 0) {
      res.status(404).json({ message: "Cat not Found" });
    }
    res.json(cats[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCat = async (req, res) => {
  try {
    const updatedCat = await Cat.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedCat) {
      res.status(404).json({ message: "Cat not Found" });
    }
    res.json(updatedCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCat = async (req, res) => {
  try {
    const deletedCat = await Cat.findOneAndDelete({ _id: req.params.id });
    if (!deletedCat) {
      res.status(404).json({ message: "Cat not found" });
    }
    res.json(deletedCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCat,
  getAllCats,
  searchCats,
  getCatById,
  updateCat,
  deleteCat,
};
