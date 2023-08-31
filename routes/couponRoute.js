const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createCoupon, getallCoupon, deleteCoupon, updateCoupon, getaCoupon } = require('../controller/couponCtrl');

router.post('/',authMiddleware,isAdmin,createCoupon)
router.put('/:id',authMiddleware,isAdmin,updateCoupon)
router.get('/:id',authMiddleware,isAdmin,getaCoupon)
router.get('/',authMiddleware,isAdmin,getallCoupon)
router.delete('/:id',authMiddleware,isAdmin,deleteCoupon)



module.exports= router;