addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 允许的源，替换为你的网站域名
  const allowedOrigins = [
    'https://myyjs1.github.io',
    'http://localhost:8080',
    'http://127.0.0.1:8080'
  ];

  // 处理 CORS 预检请求
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': allowedOrigins.includes(request.headers.get('Origin')) 
          ? request.headers.get('Origin') 
          : allowedOrigins[0],
        'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
      }
    });
  }

  // 获取目标 WebDAV URL
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');
  
  if (!targetUrl) {
    return new Response('Missing target URL', { status: 400 });
  }

  // 创建转发请求
  const proxyRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  });

  try {
    const response = await fetch(proxyRequest);
    
    // 创建响应头
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', allowedOrigins.includes(request.headers.get('Origin')) 
      ? request.headers.get('Origin') 
      : allowedOrigins[0]);
    headers.set('Access-Control-Allow-Credentials', 'true');

    // 返回代理响应
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  } catch (error) {
    return new Response(`Proxy error: ${error.message}`, { status: 500 });
  }
} 