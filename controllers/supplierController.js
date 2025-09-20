const Supplier = require("../models/Supplier");

// Hiển thị danh sách
exports.getAllSuppliers = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("suppliers/index", { suppliers, title: "Danh sách nhà cung cấp" });

};

// Form thêm
exports.getNewSupplier = (req, res) => {
  res.render("suppliers/new");
};

// Thêm mới
exports.createSupplier = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect("/suppliers");
};

// Form sửa
exports.getEditSupplier = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render("suppliers/edit", { supplier });
};

// Cập nhật
exports.updateSupplier = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/suppliers");
};

// Xóa
exports.deleteSupplier = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect("/suppliers");
};
