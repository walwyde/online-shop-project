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

app.set("views", "views");

const errController = require('./controllers/errorController')
const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/adminRoutes");

const port = process.env.PORT || 3002;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(express.static("./public"));
app.use(shopRoutes);
app.use(adminRoutes);

app.use(errController.getErrorPage)

app.listen(port, () => {
  console.log(`connected on ${port}`);
});
