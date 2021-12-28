module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        nama: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Admin;
};