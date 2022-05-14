const Product = require("../models/productModel");
const Cart = require("../models/cartModel");

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
  const prodId = req.params.productid;
  Product.findById(prodId, (product) => {
    res.render("shop/productDetail", {
      product: product,
      path: "/products",
      docTitle: product.title,
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", docTitle: "cart" });
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
    console.log(product)
  });

  res.redirect("/cart");
};
