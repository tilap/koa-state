module.exports = function (contextKey = 'state') {
  return async (ctx, next) => {
    ctx[contextKey] = {};
    ctx.hasState = (key) => ctx[contextKey].hasOwnProperty(key);
    ctx.getState = (key, defaultValue) => (ctx.hasState(key) ? ctx[contextKey][key] : defaultValue);
    ctx.setState = (key, value) => ctx[contextKey][key] = value;
    await next();
  };
};
