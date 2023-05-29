// Middleware function to check if the user is authenticated
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      // If the user is logged in, proceed to the next middleware or route handler
      next();
    }
  };
  
  module.exports = withAuth;
  