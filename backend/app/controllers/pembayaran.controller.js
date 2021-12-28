const { pembayarans } = require('../models');
const db = require('../models');
const Pembayaran = db.pembayarans;
const Op = db.Sequelize.Op;

// Create and Save a new Pembayaran
exports.create = (req, res) => {
    if (!req.body.nama || !req.body.stok || !req.body.harga) {
        res.status(500).send({
            message: 'Please fill all forms'
        });
        return;
    }

    const pembayarans = {
        nama: req.body.nama,
        harga: req.body.harga,
        stok: req.body.stok
    };

    Pembayaran.create(pembayarans)
        .then(data => {
            res.send({ status: 'success', data: data });
        })
        .catch(error => {
            res.status(500).send({ status: error.message });
        });
};

// Retrieve all barang from the database.
exports.findAll = (req, res) => {
    const nama = req.query.nama;
    const condition = nama ? {
        nama: {
            [Op.like]: `%${nama}%`
        }
    } : null;

    Pembayaran.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({ status: error.message });
        });
};

// Find a single Pembayaran with an id
exports.findOne = (req, res) => {
    const id = req.params.id_pembayaran;

    Pembayaran.findOne({ where: { id: id } })
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(404).send({ status: error.message || 'Note not found' });
        })
};

// Update a Pembayaran by the id in the request
exports.update = (req, res) => {
    const id = req.params.id_pembayaran;

    Pembayaran.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pembayaran was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pembayaran with id=${id}. Maybe Pembayaran was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pembayaran with id=" + id
            });
        });
};

// Delete a Pembayaran with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id_pembayaran;

    Pembayaran.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pembayaran was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Pembayaran with id=${id}. Maybe Pembayaran was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pembayaran with id=" + id
            });
        });
};