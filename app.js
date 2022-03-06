const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const cartController = require("./controllers/cart.controller");
const passport = require("./configs/google.auth");
require("dotenv").config();
const app = express();
const path = require("path");
const port = process.env.PORT || 4353;

app.use(express.static(path.join(__dirname, "./public")));
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("", (req, res) => {
  try {
  } catch (e) {
    res.send(e.message);
  }
});

app.use("/user", userController);
app.use("/cart", cartController);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://www.myitcstore.netlify.app/auth/google/callback",
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    res.send(req.user);
  }
);

app.listen(port, () => {
  connect();
  console.log(`Listening at ${port}`);
});
