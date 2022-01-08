module.exports = (app) => {
  const pembayarans = require("../controllers/pembayaran.controller");

  const router = require("express").Router();

  // Create a new pembayaran
  router.post("/add", pembayarans.create);

  // Retrieve all pembayarans
  router.get("/", pembayarans.findAll);

  // add barang to pembayaran
  router.post("/addpembayaran", pembayarans.addBarang);

  // Retrieve a single Tutorial with id
  router.get("/:kode_pembayaran", pembayarans.findOne);

  app.use("/api/pembayaran", router);
};
