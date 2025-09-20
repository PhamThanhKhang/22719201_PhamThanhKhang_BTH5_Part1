const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get all suppliers
 */
router.get("/", supplierController.getAllSuppliers);

router.get("/new", supplierController.getNewSupplier);
router.post("/", supplierController.createSupplier);

router.get("/:id/edit", supplierController.getEditSupplier);
router.post("/:id", supplierController.updateSupplier);

router.post("/:id/delete", supplierController.deleteSupplier);

module.exports = router;
