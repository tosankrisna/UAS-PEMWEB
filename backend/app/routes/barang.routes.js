module.exports = app => {
    const barangs = require('../controllers/barang.controller');

    const router = require('express').Router();

    // Create a new Tutorial
    router.post("/add", barangs.create);

    // Retrieve all barangs
    router.get("/", barangs.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id_barang", barangs.findOne);

    // Update a Tutorial with id
    router.put("/edit/:id_barang", barangs.update);

    // Delete a Tutorial with id
    router.delete("/delete/:id_barang", barangs.delete);

    app.use('/api/barang', router);
};