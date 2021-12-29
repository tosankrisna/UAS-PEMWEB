module.exports = (app) => {
  const admins = require("../controllers/admin.controller");

  const router = require("express").Router();

  // Create a new Admin
  router.post("/add", admins.create);

  // Retrieve all Admins
  router.get("/", admins.findAll);

  // Retrieve a single Admin with id
  router.get("/:nip", admins.findOne);

  // Update a Admin with id
  router.put("/update/:nip", admins.update);

  // Delete a Admin with id
  router.delete("/delete/:nip", admins.delete);

  app.use("/api/admin", router);
};
