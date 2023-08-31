const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBrand, getaBrand, getallBrand, updateBrand, deleteBrand } = require('../controller/brandCtrl');

router.post('/',authMiddleware,isAdmin,createBrand)
router.get('/:id',getaBrand)
router.get('/',getallBrand)
router.put('/:id',authMiddleware,isAdmin,updateBrand)
router.delete('/:id',authMiddleware,isAdmin,deleteBrand)




module.exports= router;