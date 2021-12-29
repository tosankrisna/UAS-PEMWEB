module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("barang", {
    kode_barang: {
      type: Sequelize.INTEGER,
    },
    nama: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
    stok: {
      type: Sequelize.INTEGER,
    },
  });

  return Barang;
};
