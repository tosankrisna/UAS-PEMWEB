const { admins } = require("../models");
const db = require("../models");
const Admin = db.admins;
const Op = db.Sequelize.Op;

// Create and Save a new Admin
exports.create = (req, res) => {
  if (
    !req.body.nip ||
    !req.body.nama ||
    !req.body.password ||
    !req.body.alamat ||
    !req.body.jenis_kelamin ||
    !req.body.level
  ) {
    res.status(500).send({
      message: "Please fill all forms",
    });
    return;
  }

  const admins = {
    nip: req.body.nip,
    nama: req.body.nama,
    password: req.body.password,
    alamat: req.body.alamat,
    jenis_kelamin: req.body.jenis_kelamin,
    level: req.body.level,
  };

  Admin.create(admins)
    .then((data) => {
      res.send({ status: "success", data: data });
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

// Retrieve all admins from the database.
exports.findAll = (req, res) => {
  const nama = req.query.nama;
  const condition = nama
    ? {
        nama: {
          [Op.like]: `%${nama}%`,
        },
      }
    : null;

  Admin.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({ status: error.message });
    });
};

// Find a single Admin with an id
exports.findOne = (req, res) => {
  const nip = req.params.nip;

  Admin.findOne({ where: { id: nip } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ status: error.message || "Note not found" });
    });
};

// Update a Admin by the id in the request
exports.update = (req, res) => {
  const nip = req.params.nip;

  Admin.update(req.body, {
    where: { id: nip },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Admin with nip=${id}. Maybe Admin was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id,
      });
    });
};

// Delete a Admin with the specified id in the request
exports.delete = (req, res) => {
  const nip = req.params.nip;

  Admin.destroy({
    where: { id: nip },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Admin was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id,
      });
    });
};
