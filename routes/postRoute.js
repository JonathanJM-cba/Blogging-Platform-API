const express = require("express");
const { createPost } = require("../controllers/postController");
const { validatorPost } = require("../validations/postValidation");
const router = express.Router();

router.post("/", validatorPost, createPost);

module.exports = router;
