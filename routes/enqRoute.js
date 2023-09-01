const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createEnquiry, getaEnquiry, getallEnquiry, updateEnquiry, deleteEnquiry } = require('../controller/enqCtrl');

router.post('/',createEnquiry)
router.get('/:id',getaEnquiry)
router.get('/',getallEnquiry)
router.put('/:id',authMiddleware,isAdmin,updateEnquiry)
router.delete('/:id',authMiddleware,isAdmin,deleteEnquiry)




module.exports= router;