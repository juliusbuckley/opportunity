const Router = require("express")
const companyController = require("../controllers/controller.company");
const jobController = require("../controllers/controller.job");
const industryController = require("../controllers/controller.industry")
const businessStreamController = require("../controllers/controller.businessStream")
const accountController = require("../controllers/controller.account")
const authRouter = require('express').Router();
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

const api_router = Router.Router()
const skipList = new Set(['/services', '/services/find']);
api_router.get('/api', (req,res)=>{
  res.redirect('/')
});
module.exports = api_router;
