# hello-http

学习并掌握 HTTP 协议的基本原理。

开发环境：Visual Studio Code + Node

参考视频：[《HTTP 协议原理 + 实践 Web 开发工程师必学》](https://coding.imooc.com/class/225.html)

## 1.CORS (Cross-Origin Resource Sharing) 跨域资源共享

CORS 是一个 W3C 标准，它允许浏览器向跨源(协议 + 域名 + 端口)服务器，发出 XMLHttpRequest 请求，从而克服了 Ajax 只能同源使用的限制。

|配置属性 | 描述 |
|--------|------|
| `Access-Control-Allow-Origin: <origin> \| *` | origin 参数的值指定了允许访问该资源的外域 URI。对于不需要携带身份凭证的请求，服务器可以指定该字段的值为通配符，表示允许来自所有域的请求 |
| `Access-Control-Expose-Headers: <header-name>, <header-name>, ...` | 让服务器把允许浏览器访问的头放入白名单 |
| `Access-Control-Max-Age: <delta-seconds>` | 表示请求的结果在多少秒内有效 |
| `Access-Control-Allow-Methods: <method>[, <method>]*` | 表示实际请求所允许使用的 HTTP 方法 |
| `Access-Control-Allow-Headers: <field-name>[, <field-name>]*` | 表示请求中允许携带的首部字段 |

## 2.缓存控制

使用 Cache-Control 实现缓存机制。

| 配置属性 | 描述 |
|---------|------|
| `public` | 响应可以被任何对象缓存 |
| `private` | 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）,可以缓存响应内容 |
| `no-cache` | 在释放缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证 |
| `no-store` | 缓存不应存储有关客户端请求或服务器响应的任何内容 |
| `max-age=<seconds>` | 设置缓存存储的最大周期 |
| `s-maxage=<seconds>` | 覆盖 max-age |

## 3.缓存验证

1. *ETag* : 响应头是一种强校验器。如果资源请求的响应头里含有 ETag , 客户端可以在后续的请求的头中带上 If-None-Match 头来验证缓存。
2. *Last-Modified* : 响应头是一种弱校验器。因为它只能精确到一秒。如果响应头里含有这个信息，客户端可以在后续的请求中带上 If-Modified-Since 来验证缓存。
3. *Vary* : 当缓存服务器收到一个请求，只有当前的请求和原始（缓存）的请求头跟缓存的响应头里的 Vary 都匹配，才能使用缓存的响应。

## 4.Cookie

Cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。

* `Set-Cookie: <cookie名>=<cookie值>` 设置 Cookie
* `HttpOnly` Document.cookie API 无法访问带有 HttpOnly 标记的 Cookie ，它们只应该发送给服务端，避免跨域脚本 (XSS) 攻击。
* `Domain` 指定了哪些主机可以接受 Cookie 。
* `Path` 指定了主机下的哪些路径可以接受 Cookie 。

## 5.重定向

1. *永久重定向(301)* ：表示原 URL 不应再被使用，而应该优先选用新的 URL 。
2. *临时重定向(302)* ：有时候请求的资源无法从其标准地址访问，但是却可以从另外的地方访问。

## 6.Content-Security-Policy

允许站点管理者在指定的页面控制用户代理的资源。

|配置属性 | 描述 |
|--------|------|
| `img-src` | 限制图片和图标源 |
| `script-src` | 限制 javascript 源 |
| `form-action` | 限制能被用来作为给定上下文的表单提交的 目标 URL |
