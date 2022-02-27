const express = require("express");
const connect=require("./configs/db");
const userController = require("./controllers/user.controller");
const cartController = require("./controllers/cart.controller");
const passport = require("../src/configs/google.auth");
const path=require("path");
const app = express();

const cors=require("cors");

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/user", userController);
app.use("/cart", cartController);

passport.serializeUser(function(user, done) {
  done(null, user);
});
  
passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));


app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect : "http://www.myitcstore.netlify.app/auth/google/callback",
        failureRedirect : '/auth/google/failure'
}),(req, res) =>{
    res.send(req.user);
}
);



app.listen(9876, ()=>{
    connect();
    console.log("Listening at 9876");
});