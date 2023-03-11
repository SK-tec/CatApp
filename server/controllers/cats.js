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
    const cats = await Cat.find();
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
      res.status(404).json({ message: "Cat not Found" });
    }
    res.json(deletedCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCat, getAllCats, getCatById, updateCat, deleteCat };
