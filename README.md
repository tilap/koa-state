# Koa state

Simple state layer middleware for Koa. As mentionned in official [koajs](http://koajs.com/):

>>> ctx.state
The recommended namespace for passing information through middleware and to your frontend views.

## Install

```
npm --save install koa-state
```

## Usage

```
const Koa = require('Koa');
const koaState = require('koa-state');

const app = new Koa();
app.use(koaState());

app.use(async (ctx, next) => {
  if (!ctx.hasState('my-key-state')) {
    ctx.setState('my-key-state', 'anything-as-value');
  }

  await next();
});

app.use(async (ctx, next) => {
  console.log(ctx.getState('my-key-state'));
  await next();
});

app.listen(3000);
```

## Options

You can customize the context key with ```app.use(koaState('contextKey'));```

## License

MIT
