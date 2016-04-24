'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var _this = this;

  var contextKey = arguments.length <= 0 || arguments[0] === undefined ? 'state' : arguments[0];

  return function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
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