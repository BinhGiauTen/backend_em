const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCategory, updateCategory, deleteCategory, getaCategory, getallCategory } = require('../controller/prodcategoryCtrl');

router.post('/',authMiddleware,isAdmin,createCategory)
router.get('/:id',getaCategory)
router.get('/',getallCategory)
router.put('/:id',authMiddleware,isAdmin,updateCategory)
router.delete('/:id',authMiddleware,isAdmin,deleteCategory)




module.exports= router;