module.exports = (sequelize, Sequelize) => {
  const Pembayaran = sequelize.define("pembayaran", {
    kode_pembayaran: {
      type: Sequelize.INTEGER,
    },
    tgl_pembayaran: {
      type: Sequelize.DATE,
    },
    bayar: {
      type: Sequelize.INTEGER,
    },
    kembalian: {
      type: Sequelize.INTEGER,
    },
    total_harga: {
      type: Sequelize.INTEGER,
    },
  });
  return Pembayaran;
};
