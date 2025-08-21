# Helmet Middleware Explained in Detail

This file explains all the smaller middlewares inside **Helmet** (an npm package) and what each of them does in simple terms. Along with that, you will also find explanations of the common vulnerabilities that hackers can exploit in websites.

---

## Helmet Middlewares

### 1. `helmet.contentSecurityPolicy()`

* **Purpose**: Prevents **Cross-Site Scripting (XSS)** and other attacks by controlling what resources (scripts, images, styles) the browser is allowed to load.
* **Example**: You can say: *"Only load JavaScript files from my own domain, not from external sites"*.
* **Why?**: Stops attackers from injecting harmful scripts into your web page.

---

### 2. `helmet.crossOriginEmbedderPolicy()`

* **Purpose**: Prevents your site from embedding resources (like images, videos, or scripts) in a way that could leak sensitive information.
* **Why?**: Protects against attacks when working with **cross-origin resources** (resources from another domain).

---

### 3. `helmet.crossOriginResourcePolicy()`

* **Purpose**: Controls whether other websites can access resources (like images, fonts, APIs) hosted on your server.
* **Why?**: Prevents data leakage by restricting who can use your server’s resources.

---

### 4. `helmet.dnsPrefetchControl()`

* **Purpose**: Controls **DNS Prefetching** (a browser feature where it looks up domain names before you actually click on a link).
* **Why?**: Prefetching can leak user activity to third-party domains. This middleware helps you control or disable it.

---

### 5. `helmet.frameguard()`

* **Purpose**: Stops your site from being displayed inside an `<iframe>` on other websites.
* **Why?**: Protects from **Clickjacking attacks** where attackers trick users into clicking hidden buttons/links.

---

### 6. `helmet.hidePoweredBy()`

* **Purpose**: Removes the `X-Powered-By: Express` header.
* **Why?**: Hides information about the technology you’re using. Attackers can’t target specific software versions if they don’t know what you’re running.

---

### 7. `helmet.hsts()`

* **Purpose**: Enables **HTTP Strict Transport Security (HSTS)**.
* **Effect**: Forces the browser to always use **HTTPS** instead of HTTP.
* **Why?**: Protects against man-in-the-middle attacks and ensures encrypted connections.

---

### 8. `helmet.noSniff()`

* **Purpose**: Stops browsers from trying to "guess" file types (MIME sniffing).
* **Why?**: Prevents attacks where a malicious file could be executed as a script if the browser misinterprets its type.

---

### 9. `helmet.referrerPolicy()`

* **Purpose**: Controls how much referrer information (the URL of the previous page) is sent when navigating from your site to another.
* **Why?**: Helps prevent leaking sensitive information about your site’s structure.

---

### 10. `helmet.xssFilter()` *(Legacy)*

* **Purpose**: Provides basic protection against **Cross-Site Scripting (XSS)**.
* **Note**: This is now mostly outdated because modern browsers have their own built-in XSS protection, but Helmet used to enable it explicitly.

---

## Common Vulnerabilities Hackers Exploit

Here are the main vulnerabilities Helmet helps reduce and other common ones:

### 1. Cross-Site Scripting (XSS)

* Attackers inject malicious JavaScript into your website.
* Example: A comment box allows users to insert `<script>` tags that steal cookies.

### 2. Clickjacking

* Your site is loaded inside an invisible iframe.
* Users think they’re clicking a button on your site, but actually click a hidden malicious action.

### 3. Data Leakage

* Sensitive information like API keys, server details, or user data leaks via headers, referrer links, or exposed files.

### 4. Insecure HTTP Connections

* If your website doesn’t force **HTTPS**, data (like passwords, tokens) can be stolen in transit using man-in-the-middle attacks.

### 5. SQL Injection

* Attackers inject SQL code into input fields to manipulate your database.
* Example: `SELECT * FROM users WHERE name = '' OR '1'='1'`.

### 6. CSRF (Cross-Site Request Forgery)

* Tricks users into performing unwanted actions while they’re logged in.
* Example: Submitting a hidden form to transfer money without user’s consent.

### 7. Directory Traversal

* Attackers manipulate file paths to access restricted files on the server.
* Example: Accessing `/etc/passwd` on Linux servers.

### 8. Remote Code Execution (RCE)

* Vulnerabilities in your server allow hackers to run their own code remotely.

### 9. Session Hijacking

* Attackers steal or guess session tokens to impersonate a user.

### 10. DDoS (Distributed Denial of Service)

* Overloading your server with requests until it crashes.

---

# ✅ Summary

Helmet is like a **security guard** for your Express app. Each middleware is a **rule** that strengthens your HTTP headers. This reduces risks of attacks like **XSS, clickjacking, data leakage, and insecure connections**.

However, Helmet alone is not enough—you must also protect your site against **SQL Injection, CSRF, RCE, and DDoS attacks** with other best practices.
