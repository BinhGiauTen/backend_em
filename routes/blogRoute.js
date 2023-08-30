const express = require('express');
const router = express.Router();
const {createBlog, updateBlog, getaBlog, getallBlog, deleteBlog, likeBlog, dislikeBlog} = require('../controller/blogCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/',authMiddleware,isAdmin,createBlog)
router.put('/likes',authMiddleware,likeBlog)
router.put('/dislikes',authMiddleware,dislikeBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.get('/:id',getaBlog)
router.get('/',getallBlog)
router.delete('/:id',authMiddleware,isAdmin,deleteBlog)



module.exports= router;