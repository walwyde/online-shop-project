const express = require("express");
const bp = require("body-parser");
const path = require("path");
// const { engine } = require("express-handlebars");

const app = express();

// registering habdlebars as view engine...
// app.engine('hbs', engine({
//   extname: 'hbs',
//   defaultLayout: "mainLayout.hbs",
//   layoutsDir: "views/layouts/"
// }))
// setting handlebars as view engine...
// app.set('view engine', 'hbs')

// setting ejs as view engine...
app.set("view engine", "ejs");

// setting pug as view engine...
// app.set('view engine', 'pug')

// app.set("views", "views");

const admin_Data = require("./routes/admin_Routes");
const shop_Route = require("./routes/shop_Routes");

const port = process.env.PORT || 3002;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(express.static("./public"));
app.use(admin_Data.routes);
app.use(shop_Route);

app.use((req, res) => {
  res.status(404).render("404", { errorCss: true, docTitle: 'error' });
});

app.listen(port, () => {
  console.log(`connected on ${port}`);
});
