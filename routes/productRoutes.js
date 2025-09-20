const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Hiển thị danh sách sản phẩm
router.get("/", productController.getAllProducts);

// Form thêm mới sản phẩm
router.get("/new", productController.getNewProduct);

// Xử lý thêm mới sản phẩm
router.post("/", productController.createProduct);

// Form sửa sản phẩm
router.get("/:id/edit", productController.getEditProduct);

// Xử lý cập nhật sản phẩm
router.post("/:id", productController.updateProduct);

// Xử lý xóa sản phẩm
router.post("/:id/delete", productController.deleteProduct);

module.exports = router;
