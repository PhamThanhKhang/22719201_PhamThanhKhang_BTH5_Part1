const Product = require("../models/Product");
const Supplier = require("../models/Supplier");

// 📍 Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("supplierId");
    res.render("products/index", { products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Server Error");
  }
};

// 📍 Hiển thị form thêm sản phẩm
exports.getNewProduct = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render("products/new", { suppliers });
  } catch (err) {
    console.error("Error fetching suppliers:", err);
    res.status(500).send("Server Error");
  }
};

// 📍 Thêm sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity, supplierId } = req.body;
    await Product.create({ name, price, quantity, supplierId });
    res.redirect("/products");
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).send("Server Error");
  }
};

// 📍 Hiển thị form sửa sản phẩm
exports.getEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();
    if (!product) return res.status(404).send("Product not found");
    res.render("products/edit", { product, suppliers });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).send("Server Error");
  }
};

// 📍 Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
  try {
    const { name, price, quantity, supplierId } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplierId });
    res.redirect("/products");
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).send("Server Error");
  }
};

// 📍 Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).send("Server Error");
  }
};
