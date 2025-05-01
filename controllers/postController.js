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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, tags } = req.body;
  try {
    //Se verifica la existencia del post
    const post = await postModel.findByPk(id);

    if (!post) return handleHttpError(res, "ERROR_POST_NOT_FOUND", 404);

    const postData = {
      title: title,
      content: content,
      category: category,
      tags: tags,
    };

    const updatedPost = await post.update(postData);

    res.status(200).json(updatedPost);
  } catch (error) {
    console.log("Error al intentar actualizar post: ", error);
    handleHttpError(res, "ERROR_UPDATE_POST", 500);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    //Se verifica si existe el post a eliminar
    const post = await postModel.findByPk(id);

    if (!post) return handleHttpError(res, "ERROR_POST_NOT_FOUND", 404);

    await post.destroy();

    res.status(204).json({ message: "Post eliminado con éxito" });
  } catch (error) {
    console.log("Error al intentar eliminar post: ", error);
    handleHttpError(res, "ERROR_DELETE_POST", 500);
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    //Se verifica si existe el post
    const post = await postModel.findByPk(id);

    if (!post) return handleHttpError(res, "ERROR_POST_NOT_FOUND", 404);

    res.status(200).json(post);
  } catch (error) {
    console.log("Error al intentar obtener post por ID: ", error);
    handleHttpError(res, "ERROR_GET_POST_BY_ID", 500);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.findAll({});

    res.status(200).json(posts);
  } catch (error) {
    console.log("Error al obtener todos los posts: ", error);
    handleHttpError(res, "ERROR_GET_ALL_POSTS", 500);
  }
};

const getPostsByTerm = async (req, res) => {
  const { term } = req.query;
  try {
    const posts = await postModel.searchPostsByTerm({ term });

    res.status(200).json(posts);
  } catch (error) {
    console.log("Error al obtener posts por término: ", error);
    handleHttpError(res, "ERROR_GET_POSTS_BY_TERM", 500);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getAllPosts,
  getPostsByTerm,
};
