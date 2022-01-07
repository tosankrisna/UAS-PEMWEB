const { barangs, Sequelize } = require("../models");
const db = require("../models");
const Barang = db.barangs;
const Op = db.Sequelize.Op;

// Create and Save a new Barang
exports.create = (req, res) => {
  if (
    !req.body.kode_barang ||
    !req.body.nama ||
    !req.body.stok ||
    !req.body.harga
  ) {
    res.status(500).send({
      message: "Please fill all forms",
    });
    return;
  }

  const barangs = {
    kode_barang: req.body.kode_barang,
    nama: req.body.nama,
    harga: req.body.harga,
    stok: req.body.stok,
  };

  Barang.create(barangs)
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

// Retrieve all barang from the database.
exports.findAll = (req, res) => {
  const search = req.query.search;
  const condition = search
    ? {
        [Op.or]: [
          {
            kode_barang: {
              [Op.like]: `%${search}%`,
            },
          },
          {
            nama: {
              [Op.like]: `%${search}%`,
            },
          },
        ],
      }
    : null;

  Barang.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

// Find a single Barang with an id
exports.findOne = (req, res) => {
  const kode_barang = req.params.kode_barang;

  Barang.findOne({ where: { kode_barang: kode_barang } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ status: error.message || "Note not found" });
    });
};

// Update a Barang by the id in the request
exports.update = (req, res) => {
  const kode_barang = req.params.kode_barang;

  Barang.update(req.body, {
    where: { kode_barang: kode_barang },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Barang was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Barang with kode barang=${kode_barang}. Maybe Barang was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Barang with kode barang=" + kode_barang,
      });
    });
};

// Delete a Barang with the specified id in the request
exports.delete = (req, res) => {
  const kode_barang = req.params.kode_barang;

  Barang.destroy({
    where: { kode_barang: kode_barang },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Barang was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Barang with kode barang=${kode_barang}. Maybe Barang was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Barang with kode barang=" + kode_barang,
      });
    });
};

// exports.updateStok = (kode, jumlah) => {
//   Barang.update(
//     {
//       stok: Sequelize.literal(stok - jumlah),
//     },
//     { where: { kode_barang: kode } }
//   );
// };
