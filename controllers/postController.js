const { postModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const createPost = async (req, res) => {
  const { title, content, category, tags } = req.body;
  try {
    const postData = {
      title,
      content,
      category,
      tags,
    };

    const newPost = await postModel.create(postData);

    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error al intentar crear un post: ", error);
    handleHttpError(res, "ERROR_CREATE_POST", 500);
  }
};

module.exports = { createPost };
