import * as Sequelize from "sequelize";

import { db } from '../setup/db';

class Users extends Sequelize.Model {}

Users.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
}, { sequelize: db, modelName: 'users' });

export default Users;
