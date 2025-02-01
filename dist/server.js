"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("express-async-errors");
var _express = _interopRequireDefault(require("express"));
var dotenv = _interopRequireWildcard(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cloudinary = _interopRequireDefault(require("cloudinary"));
var _path = _interopRequireWildcard(require("path"));
var _url = require("url");
var _ErrorHandler = _interopRequireDefault(require("./errors/ErrorHandler.js"));
var _authMiddleware = require("./middleware/authMiddleware.js");
var _index = require("./routes/index.js");
var _index2 = require("./routes/Admin/index.js");
var _dokterRoute = _interopRequireDefault(require("./routes/Dokter/dokterRoute.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import library

var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = (0, _path.dirname)(_filename);

// import middleware

// import route

var app = (0, _express["default"])();
app.use(_express["default"].json());
if (process.env.NODE_ENV !== "production") {
  app.use((0, _morgan["default"])("tiny"));
}
dotenv.config();
app.use((0, _cookieParser["default"])());
_cloudinary["default"].config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});
app.use(_express["default"]["static"](_path["default"].resolve(_dirname, './client/dist')));

// auth route
app.use('/api/v1/auth', _index.authRoute);

// admin route
app.use('/api/v1/admin', _authMiddleware.authenticatedUser, _authMiddleware.authorizedAdminPermission, _index2.adminRoute);
app.use('/api/v1/medis', _authMiddleware.authenticatedUser, _authMiddleware.authorizedAdminPermission, _index2.rekamMedisRoute);
app.use('/api/v1/dokter/data', _authMiddleware.authenticatedUser, _authMiddleware.authorizeDokterPermission, _dokterRoute["default"]);
app.use('/api/v1/dokter', _authMiddleware.authenticatedUser, _authMiddleware.authorizedAdminPermission, _index2.dokterRoute);
app.get('*', function (req, res) {
  res.sendFile(_path["default"].resolve(_dirname, './public', 'index.html'));
});
app.use(_ErrorHandler["default"]);
try {
  await _mongoose["default"].connect(process.env.DB_CONNECTION);
  app.listen(5000, function () {
    console.log("App is listen on port 5000");
  });
} catch (error) {
  console.log(error.message);
}