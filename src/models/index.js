import Sequelize from "sequelize";

import getUserModel from "./user.js";
import getMessageModel from "./message.js";

const sequelize = new Sequelize(process.env.DATABASE_URL);

const models = {
  User: getUserModel(sequelize, Sequelize),
  Message: getMessageModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
