const products = [];

exports.addProductControl = (req, res) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/add-product",
    formsCss: true,
    activeAddProduct: true,
  });
}

exports.postProductControl = (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  products.push({ title: obj.title });
  res.redirect("/");
}

exports.getProductControl = (req, res) => {
  res.render("index", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
}