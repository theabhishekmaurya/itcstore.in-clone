const passport = require("passport");
const User = require("../models/user.model");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID     : "135201624777-81tut00a5qjhvkpnvodudalgb8hcvtfq.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL  : "http://www.myitcstore.netlify.app/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    // var user = await User.find({email:profile.email}).lean().exec();

    // if(user.length===0){
    //    user = await User.create({
    //     email:profile.email,
    //     password:"1234",
    //     role:["customer"]
    //   })      
    // }
    // console.log(user)
    return done(null, "user");
}
));

module.exports = passport;