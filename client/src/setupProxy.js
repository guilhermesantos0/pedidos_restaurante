const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/items',createProxyMiddleware({target: 'http://localhost:8000',changeOrigin: true,}));
  app.use('/add',createProxyMiddleware({target: 'http://localhost:8000',changeOrigin: true,}));
  app.use('/remove',createProxyMiddleware({target: 'http://localhost:8000',changeOrigin: true,}));
  app.use('/getCart',createProxyMiddleware({target: 'http://localhost:8000',changeOrigin: true,}));
  app.use('/getProduct',createProxyMiddleware({target: 'http://localhost:8000',changeOrigin: true,}));
};