'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var _this = this;

  var contextKey = arguments.length <= 0 || arguments[0] === undefined ? 'state' : arguments[0];

  return function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ctx[contextKey] = {};
              ctx.hasState = function (key) {
                return ctx[contextKey].hasOwnProperty(key);
              };
              ctx.getState = function (key, defaultValue) {
                return ctx.hasState(key) ? ctx[contextKey][key] : defaultValue;
              };
              ctx.setState = function (key, value) {
                return ctx[contextKey][key] = value;
              };
              _context.next = 6;
              return next();

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));
    return function (_x2, _x3) {
      return ref.apply(this, arguments);
    };
  }();
};