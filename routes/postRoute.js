const express = require("express");
const { createPost, updatePost } = require("../controllers/postController");
const { validatorPost } = require("../validations/postValidation");
const router = express.Router();

router.post("/", validatorPost, createPost);

router.put("/:id", validatorPost, updatePost);

module.exports = router;
