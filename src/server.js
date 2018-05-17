import express from 'express';
import React from 'react';
import serialize from "serialize-javascript";
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

import routes from './routes.js';
import App from './App';
import store from './store.js';
require('dotenv').config()

const server = express();

/*HMR Setup*/
var config = require('../webpack.client.config');
const compiler = webpack(config)
server.use(webpackDevMiddleware(compiler, {
  publicPath: 'http://localhost:3000/scripts/',
  stats: {colors: true}
}));
server.use(webpackHotMiddleware(compiler, {
  log: console.log
}));
/*End of HMR Setup*/

server.use(express.static("public"))
server.get('*', (req, res, next) => {
  const activeRoute = routes.find((route)=>matchPath(req.url,route)) || {};
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App/>
        </StaticRouter>
      </Provider>
  ))
  const preloadedState = store.getState()
  const styles = sheet.getStyleTags();
  const title = 'Server side Rendering with Styled Components';
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          ${styles}
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="http://localhost:3000/scripts/bundle.js" defer></script>
        </head>
        <body style="margin:0">
          <div id="app">${body}</div>
        </body>
      </html>
    `
  );
});

server.listen(
  process.env.PORT, ()=>{
    console.log(`-----------------------------------------------\n| NOTICE\n-----------------------------------------------\n| Serving at http://localhost:${process.env.PORT}\n| Now watching for changes\n-----------------------------------------------`)
  }
);
