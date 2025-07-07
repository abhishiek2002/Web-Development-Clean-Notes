# Axios in JavaScript (In-depth Guide)

## 📦 What is Axios?

Axios is a **promise-based HTTP client** for the browser and Node.js. It is used to make **HTTP requests** (GET, POST, PUT, DELETE, etc.) from JavaScript applications.

Axios provides a cleaner, more powerful syntax for making asynchronous requests than the built-in `fetch()` API.

---

## ✅ Key Features of Axios

- Performs HTTP requests (GET, POST, etc.)
- Automatically transforms JSON data
- Supports request and response interceptors
- Can cancel requests
- Supports async/await
- Works in both browsers and Node.js

---

## 📥 Installation

### Using npm:

```bash
npm install axios
```

### Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## 🚀 Basic Syntax

```js
axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts/1",
})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

Or the shorthand version:

```js
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
```

---

## 📬 Making Different HTTP Requests

### GET Request:

```js
axios
  .get("https://api.example.com/users")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

### POST Request:

```js
axios
  .post("https://api.example.com/users", {
    name: "John",
    age: 25,
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

### PUT Request:

```js
axios
  .put("https://api.example.com/users/1", {
    name: "John Updated",
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
```

### DELETE Request:

```js
axios
  .delete("https://api.example.com/users/1")
  .then((res) => console.log("User deleted"))
  .catch((err) => console.log(err));
```

---

## 🧠 Using Async/Await with Axios

```js
async function getUser() {
  try {
    const response = await axios.get("https://api.example.com/users/1");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUser();
```

---

## 🛡️ Error Handling

Axios gives detailed errors:

```js
axios.get("/invalid-url").catch((error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.log("Data:", error.response.data);
    console.log("Status:", error.response.status);
  } else if (error.request) {
    // No response received
    console.log("No response:", error.request);
  } else {
    // Error setting up the request
    console.log("Error:", error.message);
  }
});
```

---

## ⚙️ Axios Configuration

You can set default configuration for all requests:

```js
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "Bearer TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
```

---

## 🔁 Interceptors

### Request Interceptor:

```js
axios.interceptors.request.use((config) => {
  console.log("Sending request:", config);
  return config;
});
```

### Response Interceptor:

```js
axios.interceptors.response.use((response) => {
  console.log("Received response:", response);
  return response;
});
```

---

## ⌛ Canceling Requests

```js
const controller = new AbortController();
axios.get("/users", { signal: controller.signal }).catch((thrown) => {
  if (axios.isCancel(thrown)) {
    console.log("Request canceled", thrown.message);
  }
});

// Cancel the request
controller.abort();
```

---

## 📁 Uploading Files

```js
const formData = new FormData();
formData.append("file", fileInput.files[0]);

axios
  .post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  .then((res) => console.log("Uploaded"))
  .catch((err) => console.error(err));
```

---

## 🧪 Practice Task

Convert this fetch code to Axios:

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

---

## 📌 Summary Table

| Feature        | Axios                    |
| -------------- | ------------------------ |
| Syntax         | Clean and Promise-based  |
| JSON support   | Automatic parsing        |
| Error handling | Granular and descriptive |
| Interceptors   | Yes                      |
| Async/await    | Fully supported          |
| Cancel tokens  | Supported                |

---

## 🏁 Conclusion

Axios is an extremely useful library for making HTTP requests in JavaScript. It simplifies code, improves error handling, and supports a wide range of features beyond what `fetch` offers. It works great with modern tools like async/await and is widely used in frontend frameworks like React, Vue, and Angular.

