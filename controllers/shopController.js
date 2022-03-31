const Product = require("../models/productModel");

exports.getShopProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
    });
  });
};
exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", docTitle: "cart" });
};
