const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// You may want to use a User model to store users in DB
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
  // Here, you can find or create the user in your DB
  // For demo, just pass profile
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});