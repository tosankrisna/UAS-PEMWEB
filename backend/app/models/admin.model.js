module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    nip: {
      type: Sequelize.INTEGER,
    },
    nama: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.TEXT,
    },
    jenis_kelamin: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.ENUM("admin", "kasir"),
    },
  });

  return Admin;
};
