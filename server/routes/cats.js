const express=require('express');
const router=express.Router();
const {getAllCats,getCatById,createCat,updateCat,deleteCat}=require('../controllers/cats');

console.log('/')
router.get('/',getAllCats);
router.get('/:id',getCatById);
router.post('/',createCat);
router.put('/:id',updateCat);
router.delete('/:id',deleteCat);

module.exports=router;
