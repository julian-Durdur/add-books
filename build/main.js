require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_books__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_user__ = __webpack_require__(10);








const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect('mongodb://localhost/bookstraining_db');
const db = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('express pompeleupe');
});

const { PORT } = process.env;
//initialisation de pug
app.set('views', __WEBPACK_IMPORTED_MODULE_3_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug'); //voir doc express template engine
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_3_path___default.a.join(__dirname, "../public")));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: true }));
app.use('/', __WEBPACK_IMPORTED_MODULE_4__routes_index__["a" /* indexRouter */]);
app.use('/books', __WEBPACK_IMPORTED_MODULE_5__routes_books__["a" /* booksRouter */]);
app.use('/admin', __WEBPACK_IMPORTED_MODULE_6__routes_user__["a" /* adminRouter */]);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return indexRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const indexRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

indexRouter.get('/', (req, res) => {
  res.send('ca fonctionne ');
});



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return booksRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);


const booksRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
//doc multer

var storage = __WEBPACK_IMPORTED_MODULE_2_multer___default.a.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ storage: storage }).single("img");

booksRouter.get('/', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */].find({}, (err, books) => {
    if (err) console.log(err);
    res.render("allBook", {
      books
    });
  });
});

booksRouter.get('/add_book', (req, res) => {
  res.render('add_book');
});

booksRouter.post('/add_book', upload, (req, res) => {
  const datas = req.body;
  datas["img"] = req.file.filename; //recuperer la clef img dans l'objet datas(form)
  const newBook = new __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */](datas);
  newBook.save((err, book) => {
    if (err) res.send(err);
    res.redirect("/books");
  });
});



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const bookSchema = new Schema({
  title: { type: String, trim: true },
  author: { type: String, trim: true },
  years: { type: Date, default: Date.now() },
  description: { type: String },
  img: { type: String }
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Book", bookSchema);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(11);


const adminRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

adminRouter.get('/login', (req, res) => {
  res.render('login');
});
adminRouter.post('/login', (req, res, next) => {
  if (req.body.email && req.body.password) {
    __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */].authenticate(req.body.email, req.body.password, function (err, user) {
      if (err || !user) {
        var err = new Error("Email ou mot de passe introuvable");
        err.status = 401;
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

adminRouter.get('/register', (req, res) => {
  res.render('register');
});

adminRouter.post('/register', (req, res, next) => {
  const newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);
    console.log(user);
  });
});



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new Schema({
  username: { type: String, trim: true },
  name: { type: String, trim: true },
  email: { type: String },
  password: { type: String }
});

userSchema.statics.authenticate = function (email, password, cb) {
  User.findOne({ email: email }).exec(function (err, user) {
    if (err) {
      return cb(err);
    } else if (!user) {
      var error = new Error('Utilisateur introuvable');
      error.status = 401;
      return cb(error);
    }
    __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compare(password, user.password, function (error, result) {
      if (result === true) {
        return cb(null, user);
      } else {
        return cb();
      }
    });
  });
};

// config bcrypt
userSchema.pre('save', function (next) {
  //voir doc node
  const user = this; //  this = chaque instance du model
  __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, 10, function (error, hash) {
    if (error) return next(error);
    user.password = hash;
    next();
  });
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", userSchema);



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map