const Product = require("../models/productModel");

exports.addProductControl = (req, res) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/add-product",
    formsCss: true,
    activeAddProduct: true,
  });
};

exports.postProductControl = (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  const product = new Product(obj.title);
  product.save();
  res.redirect("/");
};

exports.getProductControl = (req, res) => {
  Product.fetchAll((products) => {

    res.render("index", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};
