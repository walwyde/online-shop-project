const express = require("express");
const router = express.Router();
const admin_Data = require("./admin_Routes");

router.get("/", (req, res) => {
  const products = admin_Data.products;
  res.render("index", { prods: products,
     docTitle: "Shop",
      path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true
    });
});

module.exports = router;
