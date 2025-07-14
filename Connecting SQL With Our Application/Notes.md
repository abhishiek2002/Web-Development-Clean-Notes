# MySQL2 NPM Package: In-depth Explanation

The `mysql2` package is a modern and faster implementation of the MySQL client for Node.js. It is built on top of the `mysql` package but offers many improvements including better performance, support for modern JavaScript features like Promises and async/await, and support for prepared statements and binary data handling.

## 📦 Installation

```bash
npm install mysql2
```

## 🔑 Key Features

* Fully compatible with the MySQL protocol
* Supports Promises and async/await
* Prepared statements support (prevents SQL injection)
* Supports connection pooling
* Support for binary rows and BLOBs
* Works well with modern JavaScript (ES6+)
* Compatible with MariaDB

---

## 1. Basic Usage (Callback Style)

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});

connection.end();
```

---

## 2. Using Promises with `.promise()`

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
}).promise();

async function fetchData() {
  const [rows, fields] = await connection.query('SELECT * FROM users');
  console.log(rows);
  await connection.end();
}

fetchData();
```

---

## 3. Prepared Statements (Safe from SQL Injection)

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

const userId = 1;
connection.execute('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

### 🔄 `query()` vs `execute()`

| Feature                  | `query()`                             | `execute()`                                 |
| ------------------------ | ------------------------------------- | ------------------------------------------- |
| Use Case                 | General queries, including static SQL | Prepared statements with placeholders (`?`) |
| SQL Injection Prevention | ❌ Manual handling required            | ✅ Built-in protection                       |
| Statement Reuse          | ❌ Compiled every time                 | ✅ Precompiled and cached                    |
| Performance              | Slightly slower for repeated queries  | Faster for repeated prepared statements     |

#### ✅ Use `query()` when:

* Running static queries
* Simplicity is more important than safety

#### ✅ Use `execute()` when:

* Running dynamic queries with user inputs
* You want secure and efficient prepared statements

---

## 4. Connection Pooling

### 🔄 What is Connection Pooling?

Connection Pooling is a technique used to manage multiple database connections efficiently. Instead of opening and closing a new connection every time a query is executed, a **pool** of reusable connections is created and maintained.

### 🔍 Why use it?

* Reduces overhead of frequently creating and destroying connections
* Improves application performance
* Prevents database from being overwhelmed with too many concurrent connections
* Ensures efficient resource usage

### 💡 How it Works

* You define a **connection pool** with a limit (e.g., max 10 connections)
* When a query is made, a free connection from the pool is used
* When the query finishes, the connection is **returned to the pool** for reuse

### 🛠 Example:

```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db',
  waitForConnections: true,        // Wait if all connections are used
  connectionLimit: 10,             // Max number of connections
  queueLimit: 0                    // Unlimited queued requests
});

pool.query('SELECT * FROM users', (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

### Promisified Pool:

```js
const promisePool = pool.promise();

async function getUsers() {
  const [rows] = await promisePool.query('SELECT * FROM users');
  console.log(rows);
}

getUsers();
```

---

## 5. Handling Binary Data

You can store and retrieve binary data like images, PDFs, etc.

```js
const fs = require('fs');
const image = fs.readFileSync('image.png');

connection.execute('INSERT INTO images (name, data) VALUES (?, ?)', ['MyImage', image], (err) => {
  if (err) throw err;
  console.log('Image inserted');
});
```

---

## 6. Streaming Query Results

```js
const query = connection.query('SELECT * FROM big_table');

query
  .stream()
  .on('data', row => console.log(row))
  .on('end', () => connection.end());
```

---

## 7. Multiple Statement Support

You can run multiple SQL statements in one query by enabling `multipleStatements`:

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db',
  multipleStatements: true
});

connection.query('SELECT 1; SELECT 2', (err, results) => {
  if (err) throw err;
  console.log(results); // results[0] = first query, results[1] = second
});
```

⚠️ **Warning:** Enable this only if you trust the input source to prevent SQL injection.

---

## 8. Transactions Support

```js
async function runTransaction() {
  const conn = await pool.promise().getConnection();
  try {
    await conn.beginTransaction();
    await conn.query('INSERT INTO users (name) VALUES (?)', ['Alice']);
    await conn.query('INSERT INTO users (name) VALUES (?)', ['Bob']);
    await conn.commit();
    console.log('Transaction committed');
  } catch (err) {
    await conn.rollback();
    console.error('Transaction rolled back', err);
  } finally {
    conn.release();
  }
}
```

---

## ✅ When to Use `mysql2`

* When you want better performance than the original `mysql` package
* When you want promise support or use async/await
* When you need secure prepared statements
* When working with large datasets (streaming, BLOBs)

---

## 📚 Reference

* GitHub: [https://github.com/sidorares/node-mysql2](https://github.com/sidorares/node-mysql2)
* Documentation: [https://github.com/sidorares/node-mysql2/blob/master/README.md](https://github.com/sidorares/node-mysql2/blob/master/README.md)
