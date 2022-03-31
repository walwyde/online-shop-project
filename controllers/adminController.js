const Product = require("../models/productModel");

exports.addProductControl = (req, res) => {
  res.render("admin/add-product", {
    docTitle: "Add Product",
    path: "/add-product",
  });
};

exports.postProductControl = (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  const title = obj.title;
  const imageUrl = obj.imageUrl;
  const price = obj.price;
  const description = obj.description;

  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

exports.getProductControl = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      docTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
    });
  });
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/admin-products", {
      prods: products,
      docTitle: "Shop",
      path: "/admin/admin-products",
      hasProducts: products.length > 0,
    });
  });
};
