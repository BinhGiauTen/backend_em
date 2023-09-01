const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createColor, getaColor, getallColor, updateColor, deleteColor } = require('../controller/colorCtrl');

router.post('/',authMiddleware,isAdmin,createColor)
router.get('/:id',getaColor)
router.get('/',getallColor)
router.put('/:id',authMiddleware,isAdmin,updateColor)
router.delete('/:id',authMiddleware,isAdmin,deleteColor)




module.exports= router;