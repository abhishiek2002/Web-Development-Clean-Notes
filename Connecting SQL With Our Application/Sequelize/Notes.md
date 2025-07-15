# Sequelize ORM: In-depth Explanation

Sequelize is a popular **Node.js ORM (Object Relational Mapping)** library that makes it easy to interact with SQL databases like MySQL, PostgreSQL, SQLite, and MSSQL using JavaScript instead of writing raw SQL queries.

---

## 🚀 Why Use Sequelize?

* Abstracts complex SQL queries into readable JavaScript syntax
* Reduces boilerplate code for database operations
* Automatically handles SQL injection protection
* Supports promises and async/await
* Easy to manage relationships between tables (associations)
* Built-in migrations and seeders
* Cross-database support (MySQL, Postgres, etc.)

---

## 🛠️ Installation

```bash
npm install sequelize
npm install mysql2  # For MySQL databases
```

---

## ⚙️ Connecting to a Database

```js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testdb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('✅ Database connected successfully');
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}
```

---

## 🏗️ Defining Models

A model represents a table in the database.

```js
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});
```

---

## 📦 Syncing Models (Creating Tables)

```js
await sequelize.sync(); // Creates tables if they do not exist
```

For force recreation:

```js
await sequelize.sync({ force: true }); // Drops and recreates tables
```

---

## 🔁 CRUD Operations

### ➕ Create

```js
await User.create({ name: 'Abhishek', email: 'abhishek@example.com' });
```

### 📥 Read

```js
const users = await User.findAll();
const user = await User.findOne({ where: { name: 'Abhishek' } });
```

### ✏️ Update

```js
await User.update({ email: 'new@example.com' }, {
  where: { name: 'Abhishek' }
});
```

### ❌ Delete

```js
await User.destroy({ where: { name: 'Abhishek' } });
```

---

## 🔗 Associations (Relationships)

### One-to-Many

```js
User.hasMany(Post);
Post.belongsTo(User);
```

### Many-to-Many

```js
User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });
```

---

## 🧪 Migrations and Seeders (Optional)

Use Sequelize CLI:

```bash
npx sequelize-cli init
```

This sets up:

* `models/`
* `migrations/`
* `seeders/`
* `config/config.json`

---

## 📊 DataTypes in Sequelize

* `STRING`
* `INTEGER`
* `BOOLEAN`
* `DATE`
* `TEXT`
* `FLOAT`
* `DECIMAL`

```js
age: { type: DataTypes.INTEGER, allowNull: false }
```

---

## ✅ Summary

| Feature                     | Sequelize ORM |
| --------------------------- | ------------- |
| Write raw SQL               | ❌ Not needed  |
| JS Syntax                   | ✅ Yes         |
| Supports relationships      | ✅ Yes         |
| Works with MySQL/PostgreSQL | ✅ Yes         |
| Async/await friendly        | ✅ Yes         |
| Auto table creation         | ✅ Yes         |

---

## 🔗 References

* [Sequelize Docs](https://sequelize.org/)
* [GitHub Repo](https://github.com/sequelize/sequelize)

Sequelize allows you to work with databases like you're working with JS objects. This makes database interaction much easier and cleaner for Node.js developers.
