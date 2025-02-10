const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// 启用 CORS
app.use(cors());

// 代理中间件配置
const proxyOptions = {
    changeOrigin: true,
    pathRewrite: {'^/proxy': ''},
    onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, PUT, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type';
    },
    onError: function(err, req, res) {
        console.error('代理请求错误:', err);
        res.status(500).send('代理服务器错误');
    }
};

// 设置代理路由
app.use('/proxy', createProxyMiddleware(proxyOptions));

// 健康检查端点
app.get('/health', (req, res) => {
    res.send('代理服务器运行正常');
});

// 启动服务器
app.listen(port, () => {
    console.log(`代理服务器运行在 http://localhost:${port}`);
    console.log('使用方法:');
    console.log('1. 在 WebDAV 配置中使用以下地址格式:');
    console.log('   http://localhost:3000/proxy/你的WebDAV服务器地址');
    console.log('2. 例如坚果云 WebDAV 地址:');
    console.log('   http://localhost:3000/proxy/dav.jianguoyun.com/dav');
}); 