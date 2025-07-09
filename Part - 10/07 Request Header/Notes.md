# Understanding HTTP Headers in Express.js (Node.js)

## 📌 What are HTTP Headers?

HTTP headers are **key-value pairs** sent between the client and server that provide **metadata about the request or response**.

In Express.js, you can access request headers using `req.headers` or specific methods like `req.get()`.

---

## 🧠 Why Are Headers Important?

Headers give context to the request or response, like:

* What type of data is being sent (`Content-Type`)
* Who sent the request (`Authorization`)
* How the response should be handled (`Cache-Control`)

They help control how the server and client communicate.

---

## 🧪 Example Request With Headers:

```http
GET /dashboard HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Authorization: Bearer abc123
Content-Type: application/json
```

### In Express:

```js
app.get('/dashboard', (req, res) => {
  console.log(req.headers);
  console.log(req.get('Authorization'));
});
```

---

## 📥 Accessing Request Headers in Express

### 1. All headers:

```js
console.log(req.headers); // returns an object with all headers
```

### 2. Specific header:

```js
req.get('Content-Type'); // or req.headers['content-type']
```

> Header names are **case-insensitive** but should be lowercase in `req.headers`.

---

## 📬 Common Request Headers

| Header Name     | Purpose                                       |
| --------------- | --------------------------------------------- |
| `Content-Type`  | Tells the server what data format is sent     |
| `Authorization` | Carries access tokens or credentials          |
| `User-Agent`    | Identifies the client application/browser     |
| `Accept`        | Tells server what response format is accepted |
| `Host`          | Specifies domain of the request               |
| `Cookie`        | Sends stored cookies with the request         |

---

## 📤 Setting Response Headers

You can also send headers back to the client using `res.set()` or `res.header()`:

```js
res.set('Content-Type', 'application/json');
res.set('Cache-Control', 'no-store');
```

Or chain with `.status()`:

```js
res.status(200).set('Content-Type', 'text/html').send('<h1>Hello</h1>');
```

---

## 🔐 `Authorization` Header Example

Used to send tokens (JWT, Bearer tokens, Basic Auth):

```http
Authorization: Bearer eyJhbGciOi...
```

In Express:

```js
const token = req.get('Authorization');
// You might extract token after 'Bearer '
```

---

## 🚫 Modifying Headers After Response

You **cannot** change headers after the response has been sent:

```js
res.send('Done');
res.set('X-Test', 'value'); // ❌ throws error
```

Always set headers **before** `res.send()` or `res.end()`.

---

## 🔧 Middleware That Depends on Headers

* `cors` → reads `Origin` and sets CORS headers
* `body-parser` / `express.json()` → reads `Content-Type`
* `helmet` → sets secure HTTP headers

---

## 🧼 Best Practices

* Always validate header values before use (especially `Authorization`)
* Use appropriate headers for API communication (JSON, Auth, etc.)
* Set proper `Content-Type` in both requests and responses
* Handle missing headers gracefully

---

## ✅ Summary

* HTTP headers are key-value metadata for requests/responses.
* Access them using `req.headers` or `req.get()` in Express.
* Common headers include `Content-Type`, `Authorization`, and `User-Agent`.
* Use `res.set()` to send headers in responses.
* Header management is crucial for APIs, security, and browser behavior.

---

Let me know if you'd like diagrams showing client-server header flow or a cheat sheet of useful headers!
