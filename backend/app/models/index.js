const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },

  logging: false,
});

// create database object structure including sequelize in there
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.barangs = require("./barang.model.js")(sequelize, Sequelize);
db.pembayarans = require("./pembayaran.model.js")(sequelize, Sequelize);

db.admins.hasMany(db.pembayarans, { as: "pembayarans" });
db.pembayarans.belongsTo(db.admins, {
  foreignKey: "adminId",
  as: "admin",
});

module.exports = db;
