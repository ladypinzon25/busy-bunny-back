const Sequelize = require('sequelize');

import dbCredentials from '../../../env';

export const db = new Sequelize(dbCredentials.name, dbCredentials.username, dbCredentials.password, {
  host: dbCredentials.host,
  dialect: 'mysql',
  freezeTableName: true,
  define: {
    timestamps: false,
    raw: true
  }
});

export function connect() {
  db.authenticate()
    .then(() => console.log('Connection with database has been established successfully.'))
    .catch((error: any) => console.error('Unable to connect to the database:', error));
}
