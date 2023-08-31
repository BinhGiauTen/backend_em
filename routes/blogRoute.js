const express = require("express");
const router = express.Router();
const {
  createBlog,
  updateBlog,
  getaBlog,
  getallBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {uploadPhoto, blogImgResize } = require("../middlewares/uploadimages");

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImgResize,
  uploadImages
);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getaBlog);
router.get("/", getallBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;