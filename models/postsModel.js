const { DataTypes, Op } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Posts = sequelize.define(
  "Posts",
  {
    id: {
      type: DataTypes.INTEGER(255),
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING(255)),
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

Posts.searchPostsByTerm = function (searchQuery = {}) {
  const { term } = searchQuery;

  const whereConditions = {};

  if (term) {
    whereConditions[Op.or] = [
      { title: { [Op.iLike]: `%${term}%` } },
      { content: { [Op.iLike]: `%${term}%` } },
      { category: { [Op.iLike]: `%${term}%` } },
    ];
  }

  return this.findAll({
    where: whereConditions,
  });
};

module.exports = Posts;
