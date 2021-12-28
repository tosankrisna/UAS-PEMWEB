module.exports = (sequelize, Sequelize) => {
    const Pembayaran = sequelize.define("pembayaran", {
        id_admin: {
            type: Sequelize.INTEGER
        },
        barang: {
            type: Sequelize.STRING
        },
        total_harga: {
            type: Sequelize.INTEGER
        }
    });
    return Pembayaran;
};