'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserController = void 0;
const tsyringe_1 = require('tsyringe');
const user_service_1 = require('../services/user.service');
let UserController = (exports.UserController = class UserController {
  _service;
  constructor(_service) {
    this._service = _service;
  }
  async register(req, res, next) {
    try {
      const { username, password, email } = req.body;
      console.log('register', username, password, email);
      const user = await this._service.createUser(username, password, email);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await this._service.getUser(username, password);
    if (user) {
      // Passwords match
      res.json(user);
    } else {
      // Passwords don't match
      res.status(401).json({ error: 'Invalid username or password' });
    }
  }
});
exports.UserController = UserController = __decorate(
  [
    (0, tsyringe_1.injectable)(),
    __metadata('design:paramtypes', [user_service_1.UserService]),
  ],
  UserController,
);
