const { sequelize } = require("../config/configDb");

const models = {
  postModel: require("./postsModel"),
};

sequelize.sync({ force: false });

module.exports = models;
