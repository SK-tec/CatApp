const express = require("express");
const router = express.Router();
const {
  getAllCats,
  searchCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
} = require("../controllers/cats");

console.log("/");
router.get("/", getAllCats);
router.get("/:query", searchCats);
router.get("/details/:id", getCatById);
router.post("/", createCat);
router.put("/:id", updateCat);
router.delete("/details/:id", deleteCat);

module.exports = router;
