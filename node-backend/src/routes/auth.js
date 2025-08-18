const express = require('express');
const passport = require('passport');
const router = express.Router();

// Start Google OAuth
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication
    // Send user info or redirect as needed
    res.redirect('http://localhost:5173'); // Update with your frontend URL
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:5173');
  });
});

module.exports = router;