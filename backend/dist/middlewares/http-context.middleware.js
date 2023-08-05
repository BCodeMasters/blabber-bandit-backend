'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.setRequest = void 0;
const express_http_context_1 = __importDefault(require('express-http-context'));
async function setRequest(req, res, next) {
  express_http_context_1.default.set('request', {
    url: req?.url,
    method: req?.method,
  });
  return next();
}
exports.setRequest = setRequest;
