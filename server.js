//MODULES
// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");

//Cookies and encryption
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Security SALT for bcrypt and cookie session management
const salt = bcrypt.genSaltSync(10);
app.use(
  cookieSession({
    name: "session",
    keys: [salt, salt, salt],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

///// ///////////////ROUTES REQUIRE and MOUNT///////////////////////////////////

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
// Note: mount other resources here, using the same pattern above

/////////////////////ROUTES //////////////////////////////////////////////////

// ----------------------------------------------------------------------------
// Home page

// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {

  // req.session = null; //delete cookie
  req.session.user = "SomeUser"; //set random cookie - should be ideally username on login if we do stretch

  // Access the session cookie
  console.log(req.session.user);
  const templateVars = { user: req.session.user };


  //goes to index regardless of cookie or not for now
  !templateVars.user
    ? res.render("index", templateVars)
    : res.render("index", templateVars);
});

// ----------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////////
////////////////////SERVER LISTENING  WHEN FILE RUN/////////////////////////////
// ----------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
////////////////////////////////////////////////////////////////////////////////