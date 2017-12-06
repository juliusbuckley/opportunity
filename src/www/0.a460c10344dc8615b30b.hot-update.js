exports.id = 0;
exports.modules = {

/***/ "./api/routers/route.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__("express").Router();
const jobController = __webpack_require__("./api/controllers/controller.jobpost.js");

Router.get("/job", jobController.getJob);

module.exports = Router;


/***/ })

};