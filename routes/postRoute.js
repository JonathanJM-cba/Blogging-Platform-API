const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const { validatorPost } = require("../validations/postValidation");
const router = express.Router();

router.post("/", validatorPost, createPost);

router.put("/:id", validatorPost, updatePost);

router.delete("/:id", deletePost);

module.exports = router;
