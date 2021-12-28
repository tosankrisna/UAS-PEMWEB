module.exports = app => {
    const pembayarans = require('../controllers/pembayaran.controller');

    const router = require('express').Router();

    // Create a new Tutorial
    router.post("/add", pembayarans.create);

    // Retrieve all pembayarans
    router.get("/", pembayarans.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id_pembayaran", pembayarans.findOne);

    // Update a Tutorial with id
    router.put("/edit/:id_pembayaran", pembayarans.update);

    // Delete a Tutorial with id
    router.delete("/delete/:id_pembayaran", pembayarans.delete);

    app.use('/api/pembayaran', router);
};