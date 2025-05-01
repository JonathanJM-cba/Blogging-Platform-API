const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  getPostsByTerm,
} = require("../controllers/postController");
const { validatorPost } = require("../validations/postValidation");
const router = express.Router();

router.post("/", validatorPost, createPost);

router.put("/:id", validatorPost, updatePost);

router.delete("/:id", deletePost);

router.get("/filter", getPostsByTerm);

router.get("/:id", getPostById);

router.get("/", getAllPosts);

module.exports = router;
