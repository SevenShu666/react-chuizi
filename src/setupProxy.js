const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
              target: 'https://shopapi.smartisan.com',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":""
              }
            }
         )
    );
}