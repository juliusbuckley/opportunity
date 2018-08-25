const authRouter = require('express').Router()
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authentication middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://opportunity.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://opportunity.auth0.com/api/v2/',
  issuer: `https://opportunity.auth0.com/`,
  algorithms: ['RS256']
});

const selectiveMiddlewareApply = function(path, middleware) {
  return function(req, res, next) {
    if (path.has(req.path)) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};

// const api_router = Router()
const skipList = new Set(['/services', '/services/find']);
// authRouter.get('/api', checkJwt, (req,res)=>{
//   console.log('authenticated big fella')
//   console.log(req)
//     res.redirect('/yo')
//  //  res.json({
//  //   message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//  // });
//
// });
module.exports = authRouter;
