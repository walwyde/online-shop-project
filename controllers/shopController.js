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
exports.getProduct = (req, res) => {
  const prodId = req.params.productId
  Product.findById(prodId, product => {
    console.log(product)
  })
  res.redirect('/products')
  }

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", docTitle: "cart" });
};
